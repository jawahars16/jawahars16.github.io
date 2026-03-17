---
title: "No more Dangling Pointers with Rust"
date: "2019-07-31"
description: "Have you ever worked with a system, where it often end up in an unexpected state?"
tags: ["Rust", "Systems"]
heroImage: "/assets/blog/2019-07-31-no-more-dangling-pointers-with-rust/hero.png"
---

In programming memory can be categorised into two - Static and dynamic memory. When memory size of the variables are known at compile time, we call that as static memory. For example primitive data types like int, floats and arrays are fixed size. Fixed size values usually sits in Stack. When a function start executing, all local variables get allocated in Stack. Once the function completes execution, local variables goes out of scope and will be removed from Stack.

![Dangling Pointers](/assets/blog/2019-07-31-no-more-dangling-pointers-with-rust/static_memory.png)

Dynamic memory is exact opposite. If you think that the memory size of the variables might change at runtime, that is dynamic memory. Array List is a good example for Dynamic memory. It gets resized during runtime. Since the memory size is not known at compile time, this cannot be stored in Stack. Dynamic memory gets stored in a special section called heap. Pointers are fixed size. So in below example, pointers gets stored in stack and corresponding data gets stored in heap memory.

![Dangling Pointers](/assets/blog/2019-07-31-no-more-dangling-pointers-with-rust/dynamic_memory.png)

Once the function done executing, the local variables goes out of scope and pointers will be removed from the stack. But what about heap memory? Languages like Java, C# has garbage collectors, that will take care of removing unused memory from heap. Memory management is manual for languages like C, C++.

## Dangling Pointers

Dangling pointers is a situation where you have valid pointers in the stack, but it is pointing to invalid memory. You might end up in this situation, when you deallocate the heap memory before the pointers in stack deallocated.

![Dangling Pointers](/assets/blog/2019-07-31-no-more-dangling-pointers-with-rust/dangling_pointer.png)

This is a security issue. Because when you deallocate a memory, we are informing Operating System, that we no longer need this section of memory. So OS will mark that piece of memory as ready to allocate and allocate to other applications, when they request for memory. If that happen, we end up having pointers to memory location that we don’t own. What if we try to deallocate that memory?

This is a common issue in languages with manual memory management. In a recent article, it says that 70% of security patches released by Microsoft contains memory safety related fixes.

Let’s go through a simple example in C++, to create a dangling pointer situation. Usually in C++, memory allocated and deallocated through a general pattern. Constructor in a class gets invoked when a class initialised and this is the right place to allocate memory in heap.Destructor will be invoked when the class instance goes out of scope, and this is the right place to deallocate memory from heap. Assume we already created a class that does allocation and deallocation of memory in constructor and destructor respectively.

```
int main() {
  SomeClass pointer1 = SomeClass();
  SomeClass pointer2 = pointer1;
}
```

In above example code, there are two variables declared but both holding the same value. When constructor invoked, it allocates a heap memory. Then we are declaring one more variable and assigning the same value. In C++ usually, when you assign a value of complex type, it does a shallow copy (unless you explicitly implemented copy constructor) instead of deep copy. That means only only pointer gets copied in Stack, but not the heap memory. Actually it is not recommended to copy heap memory for performance reasons. Now the final memory layout looks like that we have two pointers pointing to the same heap memory.

![Dangling Pointers](/assets/blog/2019-07-31-no-more-dangling-pointers-with-rust/cpp.png)

Now when the function done with execution, local variables goes out of scope and it invokes destructor. First pointer2 invokes destructor that deallocates the heap memory. At this point, pointer1 becomes dangling pointer. It points to a memory that is already deallocated.

![Dangling Pointers](/assets/blog/2019-07-31-no-more-dangling-pointers-with-rust/dangling_pointer_cpp.png)

From our example, we understood that the primary cause of dangling pointer is having multiple owners for the same resource. Because when one pointer deallocates memory other pointers became dangling pointers.

## Ownership

Rust solves this problem by enforcing single owner concept during compile time. Rust follows certain rules for Ownership.

**Rule #1**

> Every value in Rust has an owner.
Generally the variable is called as owner for that value.

![Dangling Pointers](/assets/blog/2019-07-31-no-more-dangling-pointers-with-rust/owner.png)

**Rule #2**

> Value dropped, when owner goes out of scope.
When owner goes out of the scope, heap memory will be deallocated out of the box.

**Rule #3**

> Only one owner per value.

Multiple owners for a value is simply not allowed in Rust. Consider we declared one more variable and assign the same value as we did in C++ example.

![Dangling Pointers](/assets/blog/2019-07-31-no-more-dangling-pointers-with-rust/invalid_variable.png)

Rust will make vector2 variable as new owner and vector1 as invalid. Rust will behave like as if the variable vector1 is not even declared. Rust gives compilation error for above example.

![Dangling Pointers](/assets/blog/2019-07-31-no-more-dangling-pointers-with-rust/error1.png)

This not only happens when you reassign variables. The ownership also gets transferred when a variable passed to a different function. The below code also fail in Rust.

![Dangling Pointers](/assets/blog/2019-07-31-no-more-dangling-pointers-with-rust/error2.png)

This ensures single owner for a value and prevents memory unsafe issues. But this looks like complicated and does not allow us to do typical programming. Because in a typical programming, we declare variables, we pass it to other variables and functions and that is how other parts of our program will get access to the variables’s value. But looks like that Rust is not allowing us to do that.

## Borrowing
In reality, most of the times we don’t want to transfer ownership. Instead we just want to pass the value of a variable. To do that, Rust has another concept called Borrowing. Borrowing is a process of passing the variables to other parts of program without transferring the ownership. Just by adding an ampersand(&) before the variable, we say that we don’t want the ownership, but only a reference to that variable.

![Dangling Pointers](/assets/blog/2019-07-31-no-more-dangling-pointers-with-rust/reference.png)

Again, Rust follows certain rules to achieve borrowing.

**Rule #1**

> All references are immutable by default.

In Rust everything is immutable by default. Even if you declare a simple integer variable, it is immutable. To write that variable, it has to be explicitly marked as mutable. Same thing applicable for references. To make a mutable reference both the reference and owner must be mutable. Otherwise Rust gives a compilation error.

**Rule #2**

> Not more than one mutable reference allowed in a scope.

You cannot have two references pointing to same value and both are updating the value at same time.

**Rule #3**

> Mutable and immutable reference cannot go hand in hand within a a scope.

Rule number 2 and 3 are enforced to prevent race conditions. Consider you have multiple references to the same memory, and all are accessing the memory at same time from different threads, and one reference is writing to the memory. You cannot make sure that all references will have synchronised value, unless you have some other synchronisation mechanism to handle that.

## Conclusion
So Rust avoids dangling pointers, data races and other memory unsafe issues during the compile time itself. That is the reason that Rust is able to provide the same performance that C++ offers. Rust has Zero Runtime Overhead. Rust is a major advancement in Systems Programming in terms of Memory Safety. But it still has a steep learning curve. When you code in Rust, most of the times, we think the code is valid, but Rust compiler will fail it. It needs more practice to get it right.

Hope this gives a good insight on Rust memory safety.

