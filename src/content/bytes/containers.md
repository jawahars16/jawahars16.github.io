---
title: "Basic Principles for operating containers"
image: "/assets/bytes/containers.png"
---
**Stateless**

Never keep state inside the containers.  That make the containers less flexible and hard to scale. 


**Immutable**

Don't try to change anything on a running container. If you want to apply a patch, create a new container.

**Externalise Configuration**

Never keep configuration inside the container, that limit the usage of same image in multiple environments.

**Expose Health**

Always expose health endpoints. Make sure the underlying platform can understand when your container is ready to accept traffic.

**No Privilege**

A privileged container has access to all resources in host, bypassing almost all the security features. Never run a container in privilege mode unless it is really really necessary.

`$> docker run --privileged -d -p 8080:8080 golang`
