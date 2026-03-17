---
title: "Golang - Inheritance vs Composition"
date: "2023-01-03"
description: "Have you ever worked with a system, where it often end up in an unexpected state?"
tags: ["Go", "OOP"]
heroImage: "/assets/blog/2019-02-21-golang-inheritance-vs-composition/hero.png"
---

Go claims itself as an object oriented programming language. Of course it is. But developers who came from Java or C#, would realise that OOPS in Go is not same as other languages. Let's see how Golang handles Inheritance.

Inheritance - From Wikipedia - the mechanism of basing an object or class upon another object (prototype-based inheritance) or class (class-based inheritance), retaining similar implementation.
The definition of inheritance has been explained in various articles and repeating that is not necessary. Let's jump into Golang way of inheriting.

Go does not support inheritance directly. Go is not that fond of IS-A relationship. Go prefers composition over inheritance.

Good read - [Inheritance is evil. Stop using it.](https://codeburst.io/inheritance-is-evil-stop-using-it-6c4f1caf5117)

Following is a typical inheritance problem.

![Golang Inheritance](/assets/blog/2019-02-21-golang-inheritance-vs-composition/1560609611060.png)

In Java the design is achieved through following code using inheritance.

```
class Walkable {
  void Walk() {
    // Walk implementation
  }
}

class Flyable extends Walkable {
  void Fly (){
    // Fly implementation
  }
}

class Bird extends Flyable {
  void Quack() {
    // Quack implemntation
  }
}
```

Logically, bird is a flyable creature and all flyable creatures are walkable. The Bird class now has access to all attributes and functions from base classes. The same problem can be designed via Composition as below.

![Golang Inheritance](/assets/blog/2019-02-21-golang-inheritance-vs-composition/1560609612320.png)

And it is implemented in Go as below. (Functions can be attached to structs in Go. It is not shown below for simplicity.)

```
type Walkable struct {
  // Walkable attributes
}

type Flyable struct {
  // Flyable attributes
}

type Bird struct {
  Walkable
  Flyable
  // Bird attributes
}
```

Look at the Bird struct. It is now composed of Walkable and Flyable structures and has access to all public attributes and functions owned by Walkable and Flyable structures. So we got the same effect as we got in Java. But unlike Java, Go inheritance has few limitations.

Let's look into the benefits of inheritance and will see how Go handles it.

- Function overriding (Runtime polymorphism)
- Subtyping
- Code reuse

Function overriding is the primary purpose of inheritance. Subtyping and code reuse can be done in different ways. End of the day, Inheritance is all about extending an objects's behavior.

## Function overriding

From my perspective, I always consider polymorphism is the primary purpose of inheritance especially runtime polymorphism. (Don't worry about compile time polymorphism - method overloading. For me it is just a syntactic sugar in few languages).

Let's consider a basic example for function overriding. Talking tom is a toy that just listens and repeats.

Following is a very basic model for it.

```
class TalkingTom {
  public void Listen(){
    System.out.println("Tom listening...");
  }

  public void Repeat(){
    System.out.println("Tom repeating...");
  }

  public void Play(){
    Listen();
    Repeat();
  }
}
```

The functions Listen and Repeat will print messages appropriately. Now consider we need to create one more toy by extending TalkingTom.

```
class TalkingAngela extends TalkingTom {
  public void Listen() {
    System.out.println("Angela listening...");
  }

  public void Repeat() {
    System.out.println("Angela repeating...");
  }
}
```

New object extends the built-in one and overrides few functionalities. And now calling the Start function on both objects will yield results appropriately.

```
TalkingTom tom = new TalkingTom();
tom.Play();
// Output :
// Tom listening...
// Tom repeating...

TalkingAngela angela = new TalkingAngela();
angela.Play();
// Output :
// Angela listening...
// Angela repeating...
```

Now let's see how to achieve the same behavior in Golang. First let's create a TalkingTom structure.

```
type TalkingTom struct {
}

func (tom *TalkingTom) Listen() {
	fmt.Println("Tom listening...")
}

func (tom *TalkingTom) Repeat() {
	fmt.Println("Tom repeating...")
}

func (tom *TalkingTom) Play() {
	tom.Listen()
	tom.Repeat()
}
```

Similarly will create another structure extending the previous one and override the Listen and Repeat functions.

```
type TalkingAngela struct {
	TalkingTom
}

func (tom *TalkingAngela) Listen() {
	fmt.Println("Angela listening...")
}

func (tom *TalkingAngela) Repeat() {
	fmt.Println("Angela repeating...")
}
```

But for our surprise, Go behave differently when we create objects for these two structures and invoke the Play function.

```
var tom = &TalkingTom{}
tom.Play()
// Output :
// Tom listening...
// Tom repeating...

var angela = &TalkingAngela{}
angela.Play()
// Output :
// Tom listening...
// Tom repeating...
```

![Golang Inheritance](/assets/blog/2019-02-21-golang-inheritance-vs-composition/1560609613581.jpg)

So what went wrong !! Usually when we do inheritance in Java, all base class functions will be copied to derived class. Remember the Walkable, Flyable example from beginning of this article. Flyable has all Walkable functions and Bird has both walkable and Flyable functions. When Play function of TalkingAngela gets called, it literally called Listen and Repeat functions owned by TalkingAngela object and not TalkingTom object. So the override works as expected.

In case of Go, the situation is quite different. TalkingAngela has access to all functions of TalkingTom. So even though we didn't define the function Play in TalkingAngela, it is totally legal to call Play function from TalkingAngela. But the function Play is not exactly owned by TalkingAngela. It is still owned by TalkingTom even after Composition. So the Listen and Repeat functions are called on TalkingTom structure, not on TalkingAngela.

![Golang Inheritance](/assets/blog/2019-02-21-golang-inheritance-vs-composition/1560609614896.png)

Both of the following statements yields same results.

```
angela.Play() // This must be just syntactic sugar, I guess :)
angela.TalkingTom.Play()
```

So function overriding is not possible with Golang. Of course the above problem can be solved by overriding the Play function also. Then it is nothing but creating a whole new structure instead of extending from existing one.

## Subtyping

This is another benefit of Inheritance in traditional OO programming. You can substitute the derived class object in place for base class object. For example if there is a function which is expecting the TalkingTom object, it should be legal to pass TalkingAngela to that function.

```
  public static void Play(TalkingTom toy){
    toy.Start();
  }

  public static void main(String[] args) {
    // Both statements are legal
    Play(new TalkingTom());
    Play(new TalkingAngela());
  }
  ```
But this is not the case in Golang. In Go, TalkingAngela is just composed of TalkingTom and it is not legal to substitute TalkingAngela object in place of TalkingTom.
```
func play(toy *TalkingTom) {
	toy.Play()
}

func main() {
	play(&TalkingTom{})
	play(&TalkingAngela{})
}
```
"Error: cannot use TalkingAngela literal (type *TalkingAngela) as type *TalkingTom in argument to play"
But luckily, this can be achieved through interfaces in Go.

### Code reuse

Go will gain this benefit from Composition as all the functions of composed structures seamlessly embedded into the parent structure. Just by embedding TalkingTom structure into TalkingAngela, it it totally legal to access all functions from TalkingAngela without redefining them.

### Conclusion

Go is modern, fast and concurrent, but extending an object's behavior is quite limited unlike other Object Oriented Programming languages. Also we saw that other secondary objectives like subtyping and code reuse are still possible.

