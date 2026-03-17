---
title: "Fallacies of distributed computing"
image: "/assets/bytes/fallacies.gif"
---
These are the 8 false assumptions that programmers or architects make while designing distributed systems.

**1.Network is reliable**

Networks are complex, dynamic and often unpredictable. Many reasons could lead to a network failure or network-related issues.


**2.Latency is zero**

Latency is primarily constrained by distance and the speed of light. Of course, there’s nothing we can do about the latter. Even in theoretically perfect network conditions, packets cannot exceed the speed of light.

**3.Bandwidth is infinite**

Latency is the speed at which data travels from point A to point B, bandwidth refers to how much data can be transferred from one place to another in a certain timeframe. Imagine it as the size of the pipe in which the water flows. The bigger the pipe the more the bandwidth.

**4.Network is secure**

The only truly secure system is one that is powered off, cast in a block of concrete and sealed in a lead-lined room with armed guards — and even then I have my doubts. - Gene Spafford

**5.Topology doesn't change**

In a distributed system, network topology changes all the time. Sometimes, it’s for accidental reasons or due to issues, such as a server crashing. Other times it’s deliberate — we add, upgrade, or remove servers.

**6.There is one administrator**

When you engineer your system, you should make it easy (well, as easy as possible) for different administrators to manage it. You also need to think about the system's resiliency and make sure it's not impacted by different people interacting with it.

**7.Transport cost is zero**

Just as latency isn’t zero, transporting data from one point to another has an attached cost, which is not at all negligible.

**8.Network is homogeneous**

Not even your home network is homogenous. It’s enough to have just two devices with different configurations (e.g., laptops or mobile devices) and using different transport protocols, and your network is heterogeneous.
