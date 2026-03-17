---
title: "What is Service Discovery?"
image: "/assets/bytes/service-discovery.png"
---
Let’s say you build an application which talks to a backend server. What you need at the minimum to connect? An IP address and a Port. Right? Simple. But in reality an application is backed by multiple servers. So you have multiple IP and Ports.


I know what you're thinking. **Load Balancers !!!**

We can add all the IPs to the Load Balancer, so that it route traffic. But nowadays the servers and IPs are so dynamic. It keeps changing - crashing, scaling, deploying, restarting, etc... With all these changes, how the load balancer keeps track of the newly added and recently removed servers (IPs)? So we need a way to keep track of all the servers and their IPs. That's where Service Discovery comes in.

An agent runs in all servers  and report the status of containers/applications to a central registry. The registry keeps track of the addresses of all active servers. LB makes sure it takes the latest data from the registry before it routes the traffic.
