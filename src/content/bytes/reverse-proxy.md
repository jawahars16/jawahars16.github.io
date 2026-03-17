---
title: "What is Reverse Proxy?"
image: "/assets/bytes/reverse-proxy.png"
---
**What is Proxy in first place?**

Let's take a simple client server communication. Proxy server helps to hide the identity of client. Client sends request to proxy and proxy forwards it to server. With proxy, the server has no idea about the actual client. 


**Okay, now what is Reverse Proxy?**

Of course, Its the exact reverse of the above definition. Consider from an application developer perspective. You have a web server running and clients can reach out out to your web-server. You want to hide the identities of your web server to the clients. So you introduce a proxy server. Clients will now have no information about the web servers. Though that's the primary purpose of reverse proxy, there are lot of other stuff they do in addition.

- Load balancing
- Caching
- SSL Encryption
- Protect from attacks

Some common servers that acts as reverse proxies - Nginx, Varnish, HAProxy and traefik.
