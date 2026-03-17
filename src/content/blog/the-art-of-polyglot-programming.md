---
title: "The art of Polyglot Programming"
date: "2019-08-12"
description: "Have you ever worked with a system, where it often end up in an unexpected state?"
tags: ["Programming"]
heroImage: "/assets/blog/2019-08-12-the-art-of-polyglot-programming/hero.png"
---

Years back in 2013, I was working in a Hospitality management system. The application was used by front desk staff in star hotels. It helps to check in or check out rooms, book appointments and offer several other services. The entire application was written C#. Yes, you hear it right - the whole application including the user interface was written in C#. It was a desktop application and they used to install it in high resolution touch monitors backed by Windows OS and keep it in reception.

The UI was powered by Windows Presentation Framework (WPF) and backend was using ASP.NET Web API. Even the database layer was abstracted using Entity Framework - one of the popular ORM in C#. I didn’t remember writing a single native SQL query in that project.

It becomes a problem when the customer wanted the same application in web, since they have hard time provisioning the system, installing required dependencies and managing updates. So we proposed to build the web interface using Silverlight. Silverlight is a web platform used to build rich web interfaces using C#. (The technology is dead now). Our competitors were starting to explore AngularJS and React, while we stuck with a technology that was about to deprecate.

It was all happened because our limitation in the capability. Apart from organization perspective, it also created problem to the individual’s learning. Our team has a great expertise in C#. We know each and every feature in C# and how it works. But we never know why some of the design decisions were made in that programming language. Many of the language decisions started to make sense, when we start learning other languages.

The option to pass by reference (ref and out) and pass by value feature in C# makes more sense, when I learn about borrowing feature in Rust.

I understood the actual purpose of dynamic keyword in C#, after I experienced the power of dynamic programming in Python.

Lambdas and anonymous functions in C# started to make sense, when I explored functional programming in Haskell.

The necessity of two way data binding in WPF now making more sense, after I learnt the problems of bi-directional data flow and how Redux solved the problem with Flux design pattern (uni-directional data flow)

The moment you start learning other languages, it opens up a lot of new boxes in your brain and you will be able to view programming languages from a different perspective. I like the way Uncle Bob Martin put it.

> The reason to learn a new language is to create new neural pathways in your mind. - Uncle Bob Martin

## Polyglot Programming
General definition

> Polyglot programming is the practice of writing code in multiple languages to capture additional functionality and efficiency not available in a single language.

![Polyglot Programming](/assets/blog/2019-08-12-the-art-of-polyglot-programming/polyglot.png)

There are lot of media sources already talking about advantages of polyglot programming. And my favorite is the interview with Neal Ford (Director, Software Architect, and Meme Wrangler at ThoughtWorks), discussing about the benefits of Polyglot Programming.

[Video Link](https://www.youtube.com/watch?v=sBbGAzs9k-c)

In this article, I want to talk about few ideas that will help us to advance in the direction of becoming a polyglot programmer. Polyglot programming doesn’t mean learning and being an expert in every programming language.

It is the matter of understanding the high level programming concepts and having awareness about evolving new language features.

### Dig deeper
Understanding multiple languages becomes easier, when you are strong in programming fundamentals. When I say fundamentals, I mean the overall fundamental building blocks that make up a programming language. Consider type system - the nature of type system varies from language to language. A language could be either static or dynamic typed. It could be either strong or weekly typed. Or untyped (WebAssembly). Try to understand the rationale behind those design decisions. Some languages like C, C++ are statically typed, because type information is not available during run time. So they have to do type checking at compile time. Python has a sophisticated runtime, which can do type checking on the fly. So they don't need type information at compile time. Understanding these kind of fundamental working model will help you to pick up any new languages easily.

![Polyglot Programming](/assets/blog/2019-08-12-the-art-of-polyglot-programming/basics.jpg)

Similarly try to understand other building blocks like memory management, execution environment like whether it is compiled or interpreted, executed by processor or virtual machine, the nature of threading. Also compare these features with the programming languages you already known. That helps you to get more insights on why certain design decisions are made. For example goroutines(lightweight threads) might be the result of costly nature of OS threads in Java.

### Best practices
The common problem in Polyglot Programming is, when we try to master multiple programming languages, we may tend to lose the best practices in that particular language. A programmer who code Java for 10 years may follow good practices when compared to the programmer who practicing the language for an year. But that doesn't mean polyglot programmer write bad code. With proper understanding of language agnostics best practices, we can definitely write good code in any language. I recommend books like Clean Code (by Uncle Bob) and Refactoring (by Martin Fowler).

![Polyglot Programming](/assets/blog/2019-08-12-the-art-of-polyglot-programming/best_practice.jpg)

Write code that is readable, testable and extensible. You will always end up in a design pattern. Understanding the concepts like modularity, dependency management, composition will help you write efficient code in any programming language. I would say all the best practices rooted in the modularity. The level of modularity in your code decides the robustness of your code.

### Be open minded
I know some of my fellow developers blame particular languages. They say the language has a bad design. I disagree with that. No language is bad. Every programming language has been designed with a purpose in mind. If you try to create a high performance, cross platform game engine using Javascript, then it will be a nightmare. Thats not the problem with language. You chose the wrong tool. One might argue that NodeJS is bad for web development, because of its single threaded nature. It might be !! But understand the rationale behind it. Even though it handles all the requests in a single main thread, how efficiently it delegates all asynchronous calls like I/O operations to multiple threads. It makes the main thread to be available all the time to handle incoming requests. You don't have to use NodeJS in your project, but understanding these kind of unique behaviors in multiple languages and frameworks help you to expand your programming brain.

![Polyglot Programming](/assets/blog/2019-08-12-the-art-of-polyglot-programming/learning.jpg)

Some programmers are very biased with the language they use and they stick to that language no matter how many better languages pitch in. They try to find loopholes in the new languages as much as possible and try to debunk it. But I would recommend you to be aware of the new languages and frameworks. And if something interest you, go ahead and learn about it. There is nothing wrong for a Javascript developer who uses jQuery for long time to explore React for his side project. Don't use the same technology stack of your mainstream project in your side projects. That is the only way to break the barrier and jump into the fun world of polyglot programming.

### Taste the unique features
When you learn a new programming language I bet you the first ten chapters would remain same in all languages. It include data types, variable declarations, conditional operations, functions and structures. But the last few chapters introduce the key features of that particular language. Being aware of the key features in a programming language will help you to choose the right tool for your problem. When you learn a new language, identify the key features and practice examples based on the key features. If you are learning Go, create a simple webserver and see how efficiently you can handle multiple requests concurrently using goroutines. If you are learning Rust, try to create simple image processing library and run it from browser using webassembly. By doing that you can understand the ease of manual memory management and the power of webassembly.

### Adapt the changes
Changes are inevitable. New languages and frameworks born when new changes or problems arise into the technology. Think about the evolution of hardware and multi core processors. What about the amount of data that got accumulated across internet over the past 10 years. We need proper technology and frameworks to deal with that data. Web is revolutionized. jQuery was the most popular javascript library 10 years before. But now things changed. Web is not just a platform to read and submit data forms like before. Web is one true universal platform. Web is now expected to support broad range of applications like word processing, video and music editing, games, conference calls, screen sharing and so on. Agile and extreme programming becomes unavoidable in software development life cycle. Such practice of continuous delivery gave birth to devops. Devops opened up opportunities for various languages and frameworks. Programmers has to keep up with these changes by learning suitable technologies.

![Polyglot Programming](/assets/blog/2019-08-12-the-art-of-polyglot-programming/changes.jpg)

### Closing
Learning is fun. Learning new stuff is always exciting. No matter what we do, we cannot learn everything in our lifetime. Learning is an ongoing process. I would like to remind the words of Steve Jobs, which suits all the time.

>Stay hungry. Stay foolish.

I myself sometimes ask whether I am a polyglot programmer. If you ask me how many programming languages I know, I cannot answer that question. I didn't even know how many languages exists at this point of writing this article. But if you give me a problem and ask me to solve it in any new programming language, I have the confidence that I can solve it. If that means a polyglot programmer, then of course I am a Polyglot Programmer.