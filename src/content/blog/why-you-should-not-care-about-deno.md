---
title: "Why you shouldn't care about Deno?"
date: "2020-05-30"
description: "Deno is a new runtime for Javascript and Typescript. Deno claims to be a secure runtime and has a built-in typescript compiler. In this article, I would like to focus on the real need for a new runtime for Javascript."
tags: ["JavaScript"]
heroImage: "/assets/blog/2020-05-30-why-you-should-not-care-about-deno/hero.png"
---

[Deno](https://deno.land/) is a new runtime for Javascript and Typescript. Deno claims to be the secure runtime and has a built-in typescript compiler. In this article, I would like to focus on the real need for a new runtime for Javascript. NodeJS is the most popular and powerful runtime. Several applications like PayPal, LinkedIn, and Netflix still uses NodeJS. There are several reasons, NodeJS becomes so popular - Event-driven architecture, [Asynchronous IO](https://www.jawahar.tech/blog/javascript-asynchronous-programming), and based on a way simple programming language (Javascript). 

Even though NodeJS has a lot of advantages, it is known that none of the platforms is problem-free. NodeJS also has few downsides. A couple of years back, [Ryan Dahl](https://github.com/ry) (creator of NodeJS) gave a talk where he listed a few of the mistakes he regrets made in NodeJS. 

[![10 Things I Regret About Node.js - Ryan Dahl - JSConf EU](/assets/blog/2020-05-30-why-you-should-not-care-about-deno/video_thumbnail.jpg)](http://www.youtube.com/watch?v=M3BM9TB-8yA "10 Things I Regret About Node.js - Ryan Dahl - JSConf EU")

But the actual question is, how critical those problems are and do those problems have to be addressed by a brand new runtime. Let's focus on a few core features that Deno claims to be the primary deal breakers. (*This article is going to be highly opinionated, so please feel free to share your comments and feedback.*)

## Secure Runtime

Deno is a secure runtime. By which they mean, Deno does not allow access to the disk, network, environment, or creating subprocess. To access any of these resources, it needs to be explicitly called out. Below command run an application allowing it to access the internet.

`deno run --allow-net index.js`

Also below command allows running application with disk write access.

`deno run --allow-write index.js`

Although it seems to be bulletproof initially, a simple option like `-A` in the command would give all access to the application, and the developer's laziness might lead to usage of this option heavily.

I also believe the application's security relies on the application developer rather than the runtime. Of course, the runtime also has to provide a secure environment, but not by blocking the resources. I've used several languages like Rust, GoLang, C++, and none of them provide an option like this. By blocking these resources by default, Deno is trying to run all the applications in a sandbox mode. 

So the right tag line would be 
> Deno - sandbox runtime for Javascript and Typescript. 
 
 But if that is the real motivation, then Docker is the technology that is trying to provide the same experience for years. If I don't trust an application that I downloaded from the internet, I would rather run it in a docker container to experiment with it. So basically this feature wouldn't be a great reason, why NodeJS users might want to switch to Deno.

## No more package manager

![Node Modules](/assets/blog/2020-05-30-why-you-should-not-care-about-deno/node_modules.png "Node Modules")

Deno does not have a built-in package manager. Deno tries to simulate the same package management experience from a browser. For example, if you want to use a particular piece of Javascript code, you refer that code link in a script tag. And browser downloads that code and cache it and use it for further access. So basically browser applications do not have a `package.json` or a `node_modules` folder (the biggest enemy of NodeJS users).

Similarly, Deno's way of importing a Javascript (or Typescript) dependency looks something like this.

```javascript
import { Application } from 'https://deno.land/x/oak/mod.ts';
import { serve } from "https://deno.land/std@0.50.0/http/server.ts";
```

Deno allows you to distribute your library in a single file and this file can be hosted anywhere on the internet and import into your application like above. Deno downloads the dependencies when running it for the first time and keep it somewhere in your machine. (yes it still keep those files somewhere, you just don't see it). If you want to re-download those dependencies again, invoke the `deno run` command with `--reload` flag. 

Deno is not the first runtime to take this approach. Golang initially came up with the same approach without a package manager. The problem with this approach is managing different versions of your dependencies and upgrading/downgrading the dependencies would be a nightmare. It is a well-known fact, that Golang was heavily criticized for this package management approach and later it came up with go modules to address that. So Deno would also come up with some workarounds for dependency management or some external library (like NPM 😊) to manage that. So users have to wait for that or... stick to NodeJS.

## Built-in typescript support

It is a good thing that Deno supports Typescript off the shelf without any need for a compiler. Someone who wants to learn typescript and don't want to spend time configuring the compiler for typescript, Deno is the right playground. But for production-grade applications, this is not a great deal - people would worry less about the compiler configuration.

## Conclusion

In the 25 minutes of Ryan Dahl video, he explains the mistakes he made in NodeJS and wants to resolve those in this new runtime. It is the basic tendency of developers, when bugs get piled up, instead of fixing it, we always prefer to build something new that does the same thing to feel fresh. I am not saying, Deno is not going to have any impact on the developer's community. But it needs more time to get more mature. I don't see a solid reason, why people should prefer Deno over NodeJS at this moment. And the biggest downside is that existing NodeJS applications cannot be run in Deno, since Deno is not just an upgrade to NodeJS - it is a whole new ecosystem. Will Deno makes it way through Javascript developers? Time will tell.




