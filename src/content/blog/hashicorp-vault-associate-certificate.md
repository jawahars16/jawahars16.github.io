---
title: "Hashicorp Vault Associate Certification"
date: "2022-04-10"
description: "I successfully completed the requirements to be recognized as a Hashicorp Vault Associate."
tags: ["Security", "Vault"]
heroImage: "/assets/blog/2022-04-10-hashicorp-vault-associate-certificate/hero.png"
---

On April 3, 2022, I successfully completed the requirements to be recognized as a Hashicorp Vault Associate. 

[Badge issued in Credly](https://www.credly.com/badges/4894e7d2-ca76-48e6-b40a-f1205131a82f/public_url)

For the last 3 months, I have been pairing with Hashicorp developers to setup production grade Vault clusters for an enterprise client. Though I had some knowledge and experience on secret management prior to this, there was a lot of learning especially in the last 3 months. Vault is one of the much sophisticated product (yes Hashicorp has other products like Terraform, Packer, Vagrant, Consul, etc) released by Hashicorp, especially for secret management.

After practicing Vault for 3 months, I decided to take the certification. I learnt a lot during the pairing session with Hashicorp and of course who can teach you better than the actual product owners. 😀 But I still went through the [study guide](https://learn.hashicorp.com/tutorials/vault/associate-study) proposed by Hashicorp for this certification. 

Study guide mostly point to their own documentation and concept overview sections in learn.hashicorp.com. Their documentation itself is a great source to clear this certification. They also have some [sample questions](https://learn.hashicorp.com/tutorials/vault/associate-questions?in=vault/associate-cert) for those who want to understand the format of the questions.

I have drafted few tips to prepare for the certification exam based on my experience,

- There are very few scenario based questions, but it is still challenging to answer without practice. Just reading the documentation and getting a theoretical understanding is not enough. 

- Vault has both open source and enterprise version. You can use the open source version and spin out a local vault development environment within seconds. Below command creates a single server local dev environment. (This is only for dev environment and should not be used for production.)

```
> vault server -dev
```

### Secret Engines

- The core feature of Vault is secret engines and that is the reason why you use Vault. It is important to be aware of all the secret engines supported by Vault. No need to memorize, but should have a high level of knowledge of those.

- Vault secret engines can be categorized into three - store, generate and encrypt. Vault KV can be used to store secrets. And there are few secret engines which can be used to generate credentials dynamically (like database, ssh, etc). Vault transit engine can be used to encrypt data.

- Understand the differences between two versions (KV and KV V2). Practice KV secret engine a lot. Practice all the following activities in KV until you get comfortable.
    - Writing a secret
    - Retrieving a secret
    - Delete/Destroy a secret
    - Rollback a secret
    - List secrets
    - Undelete a secret
    - Patch a secret

- Try practicing at least a few dynamic secret engines. I recommend to try a database secret engine (postgres, mysql, etc). See how vault creates credentials for those databases and how it manage rotation, revoke, etc.

- Have a very good understanding on leases. All dynamic secrets have a lease associated with them. Understand what you <u>can and cannot</u> do with a lease ID. I got a question like this - <u>Someone accidentally deleted a secret in database. Now how do you revoke the lease associated to that?</u> Make sure you practice all these scenarios.

- Transit engine is an interesting one. You can definitely expect questions from it. Practice how to encrypt/decrypt data, how to rotate the encryption key, exporting the key, rewrap, etc. Keep in mind Vault never store encrypted data.

### Auth method

- This is another important feature of Vault. Vault provides a seamless way to authenticate, though your applications run in multiple environments like cloud, on-prem, etc. Vault supports multiple authentication methods. Make sure you are ware of all those auth methods.

- Practice few auth methods especially userpass, github and approle. Have a good understanding of other methods as well. Understand which methods are <u>used for human, and which for machines</u>.

- Get a detailed understanding of how tokens work. Tokens are the primary method of authentication. No matter which auth method you use, you are going to get a token at the end. 

- Some key things that need to be well understood,
    - Difference between ttl and max-ttl.
    - Revoke and Renew a token.
    - Periodic tokens
    - Orphan tokens
    - Batch and Service tokens - when to use what.

### Policies

- Every token is associated with one or more policies. Policies define what activities you can perform on particular resource within vault.

- Resources like (secret engine, auth method, etc) are separated as mount paths. Have a good understanding on how the paths are structured and how to define it in policies.

- How to use wildcards in policy paths to allow permissions on multiple paths.

- In the exam, you might be given a policy and ask to choose all the valid statements. The statements define what permissions you will get with that policy.

### Others

- Understand the architecture of Vault - encryption barrier, storage backends (what storage backends support HA and what not), cluster replication, etc.

- Know the difference between Performance Replica and Disater Recovery replica.

- Make sure you can perform activities through CLI, API and UI. There were some questions based on the Vault Web UI screenshots.

---

The exam only supports online proctoring. That was a little challenging for me. I took other certification exams like GCP, Azure in Test centers, which was more comfortable. But with Hashicorp exams, there are no options except online. You need to have a clear desk, quiet room and a good internet connection. 

Online proctor might ask you to show the room in a 360 degree view. Make sure to use a personal laptop to avoid any MDM or firewall issues, which usually happens if you use office laptops. The exam was 1 hour long with 57 questions. At the end of the exam, you will know whether you pass or fail. But there is no clear information on the passing score. With good hands-on practice and good understanding of vault concepts, this certification is not a difficult one to pass.

Good luck. 👍



