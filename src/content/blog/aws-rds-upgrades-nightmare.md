---
title: "AWS RDS Upgrades - Every enginner's nightmare"
date: "2023-02-12"
description: "Upgrading a database is the stuff that nightmares are made of, especially when it comes to Amazon Web Services (AWS) Relational Database Service (RDS). It's like trying to change a tire on a car that's driving down the highway at 100 miles per hour!"
tags: ["AWS", "Databases"]
heroImage: "/assets/blog/2023-02-12-aws-rds-upgrades-nightmare/hero.png"
---

Upgrading a database is the stuff that nightmares are made of, especially when it comes to Amazon Web Services (AWS) Relational Database Service (RDS). It's like trying to change a tire on a car that's driving down the highway at 100 miles per hour! AWS RDS provides managed relational databases as a service, making it easier for businesses to set up, operate, and scale their databases in the cloud. But upgrading these databases to newer versions or modifying configuration settings can be a real hair-puller, causing downtime, data loss, and compatibility issues, making it an engineer's nightmare. In this topic, we'll explore the various aspects of upgrading an AWS RDS database, the common challenges faced, and best practices for a successful upgrade. So, grab a cup of coffee, sit back, and prepare to laugh (or cry) at the silly things that can go wrong during an RDS upgrade.

## Minor version upgrade

Okay, let's talk about minor version upgrades in AWS RDS.

A minor version upgrade just means upgrading your database engine to a newer patch version within the same major version. For example, you're currently running Amazon RDS for MySQL 5.7.23 and you want to upgrade to 5.7.24. This type of upgrade is generally considered the safer option because it's just a small update to the database engine and AWS has already done their testing before releasing it.

But still, even minor version upgrades can give you a headache if you're not careful. That's why it's important to test everything thoroughly in a non-production environment before rolling it out to your live database.
Upgrading is super easy, you can do it through the AWS Management Console, the AWS RDS API, or the AWS CLI. AWS RDS takes care of all the heavy lifting, like creating snapshots and spinning up a new instance with the updated version.

So, to keep things running smoothly, it's a good idea to keep your database engines up to date with the latest minor versions. But always make sure to plan your upgrade properly to avoid any unexpected downtime or data loss.

### Auto minor version upgrade

Auto minor version upgrades allow you to automatically upgrade your database engine to the latest patch version within the same major version. This can be a time-saver, as you don't have to manually initiate the upgrade every time a new patch version is released.
However, it's important to keep in mind that just because the upgrade is automated, doesn't mean you can neglect testing it in a non-production environment first. Compatibility issues or unexpected problems can still arise, even with auto upgrades.

Auto minor version upgrades are currently supported by the following database engines in AWS RDS:
Amazon Aurora
Amazon RDS for MySQL
Amazon RDS for PostgreSQL
Amazon RDS for MariaDB

It's important to note that the availability of auto minor version upgrades may vary depending on the specific version and edition of the database engine you are using. It's always a good idea to check the AWS RDS documentation or reach out to AWS support to confirm the availability of auto minor version upgrades for your specific RDS instance.

[AWS Documentation](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Upgrading.html#USER_UpgradeDBInstance.Upgrading.AutoMinorVersionUpgrades)

## Major version upgrade

Alright, let's talk about major version upgrades in AWS RDS in a lighthearted way.
So, you've been happily running Amazon RDS for MySQL 5.7 for a while now, but it's time to upgrade to the latest and greatest version, MySQL 8.0. This is what we call a "major version upgrade."

Now, I know what you're thinking, "Upgrading sounds like a blast! Can't wait to spend my weekend watching database logs and holding my breath every time I hit the refresh button!" And you're not wrong, major version upgrades can be a real nail-biter.

The good news is, AWS RDS makes the process as smooth as possible, taking care of the heavy lifting for you and creating snapshots along the way. But it's still important to thoroughly test the upgrade in a non-production environment first, just to make sure everything works as expected.

So, why bother with a major version upgrade in the first place? Well, new versions often come with new features, improved performance, and increased security. Plus, it's always fun to have the latest technology, right?

In conclusion, while major version upgrades in AWS RDS can be a bit nerve-wracking, they are worth it in the end for the benefits they bring. And who knows, you might even have a little fun in the process! (Okay, maybe not, but you'll have the satisfaction of knowing your database is up-to-date and running smoothly.)

## Blue Green Deployment

Let's talk about blue-green deployment in AWS RDS, in a relaxed and informal manner.
So, you've got a database running in AWS RDS and you want to deploy an update, but you don't want to take any chances with downtime or disruptions. That's where blue-green deployment comes in.

In a blue-green deployment, you create two identical environments, one labeled "blue" and one labeled "green." The "blue" environment is your current live database, while the "green" environment is the updated version of your database.
Once the "green" environment is up and running, you switch all traffic over to it, making it the new live environment. If anything goes wrong, you can quickly switch back to the "blue" environment, which is still running the previous version of your database.

This approach allows you to test the updated version of your database in a live environment before making it the primary one, reducing the risk of downtime or disruptions. It also makes rolling back to a previous version easier, if needed.
In summary, blue-green deployment is a smart and safe way to deploy updates to your database in AWS RDS, allowing you to minimize the risk of downtime or disruptions and ensuring a smooth and seamless transition.

> Currently, blue/green deployments are supported only for RDS for MariaDB and RDS for MySQL.

[AWS Documentation](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/blue-green-deployments.html)

## Database Migration Services (DMS)

Let's talk about using AWS Database Migration Service (DMS) for major version upgrades.

So, you've got an old and creaky database that needs a major upgrade, but you don't want to go through the hassle of manually migrating all the data. Enter AWS DMS to the rescue!

AWS DMS is a fully managed service that makes it easy to migrate your databases from one version to another, including major version upgrades. Whether you're moving from MySQL 5.7 to 8.0, or Oracle 11g to 19c, AWS DMS has you covered.

The process is pretty straightforward. You set up a replication instance, create a source and target endpoint, and let AWS DMS handle the rest. It'll take care of the data migration, ongoing replication, and even schema conversion if needed. And the best part? You don't have to worry about any downtime. AWS DMS uses a continuous data replication technique, so your source database can stay up and running during the migration, with minimal disruption to your applications.

## Conclusion

Well folks, we've come to the end of our discussion about AWS RDS upgrades, the stuff that keeps engineers up at night (or at least close to it!). But let's not forget to end on a light note.

Upgrading your RDS instances can be a daunting task, but with the right tools and strategies in place, it doesn't have to be a total nightmare. Whether you're using blue-green deployments, AWS DMS, or some other approach, the key is to plan ahead, test thoroughly, and always have a backup plan in case things go south.

And, who knows, with the right attitude and a little bit of humor, you might even start to enjoy the upgrade process (or at least look back and laugh about it later!). So, let's raise a glass to the brave engineers out there who tackle RDS upgrades head-on, and to a future filled with smooth and successful database upgrades. Cheers!


