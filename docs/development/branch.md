---
sidebar_position: 2
---

# Branch System

## Branch System

In CBK2000 Group, there are 4 main branches that are used mainly in each repository, namely:
```
master
or
main

development
or
dev

release
hotfix
```

## Master/Main Branch

The master or main branch is the main branch of the production in which the most updated code and currently deployed code is located. This branch MUST BE PROTECTED at all cost from direct pushes. The only way in order to access this branch is through a pull request that is done through the development branch. In order to save building time, this branch is only to be updated on major updates or on a hotfix scenario where a fix must be done.

### Pull Request Tutorial

In order to create a pull request first make sure your are in the branch that is ahead in commit from the branch that is going to be pushed to. 

![branch check](/img/branch/prbranch.jpg)

![branch check 2](/img/branch/prbranch2.jpg)

A pull request can be done through these buttons, however the top button isn't always there thus it is more reliable to remember the button through the contribute dropdown section.

![pull request](/img/branch/pr.jpg)

Once the button is pressed, A menu will appear. The first thing to do is to check which branch is going to be the source and which branch is going to be the target. In the example below, the source branch is dev while the target branch is master.

![pull request 2](/img/branch/pr2.jpg)

Once that is in check, now check the status of the pull request, if it is available to merge than you can safely create the pull request, but if there is any conflicts/problem that causes the status to be not green / not able to merge than solve the problem in your local machine first before proceeding. Usually a quick
```
git pull origin <target_branch>
```
should give you an idea on what is the problem (usually a merge conflict). Once the conflict/problem is finished, you can push it back to the source branch and check if the status has turned green.

![pull request 3](/img/branch/pr3.jpg)

Next up, for best practice, please write down a header title to summarize on what is the pull request is about and a short description below it to support the title if any other developers need to know what udpate has been done.

![pull request 4](/img/branch/pr4.jpg)

Once all of that is completed, you are free to click on the ```Create pull request``` button

![pull request 5](/img/branch/pr5.jpg)

After that, you should be displayed with a menu where in the menu there should be a ```Merge pull request``` button close to this

![pull request 6](/img/branch/pr6.jpg)

#### WARNING: DO NOT CLICK IT YET

For best practice, please contact your fellow developers for a code review to make sure there isn't a problem hiding in plain sight that you might've missed. Once your fellow developers have approved your pull request, ONLY AND ONLY THEN you can click the button.

## Development/Dev Branch

In this branch, there 2 ways you/your team can approach it. 
1. One way is to stack up all developments there with direct push to the development branch available 
2. Second way is for every developer could create their own branch with their respective development branches/features that are developed and create a system close to the master branch is to the development branch (protect the branch from direct push).

This branch is created in order to prevent occasional pushes to the master/main branch for small changes thus saving up on workflows and down time for the deployment. For better practice, it is best to also have a release branch in order to do final checks on the update that wants to be pushed to master/main.

### Usage on local
In your local machine you could use the command
```
git checkout -b "<name_of_development branch>"
```
in order to directly pull from the remote repository or if it hasn't existed yet, create one.

## Release Branch

Once the dev branch has accumulated enough changes and features and has been tested and deemed stable, a release branch is created from the dev branch. This is where final testing and bug fixes are done before the code is released to the public. Once all testing is complete, the release branch is merged into the master/main branch.

### Create a release branch
In your local machine, first make sure that you are on the latest dev branch
```
git checkout dev
git pull origin dev
```

Next you can now create the release branch
```
git checkout -b "<name_of_release_branch>"
```

Once the version is deemed stable, you can now create a pull request to master/main from the release branch.

## Hotfix Branch

The hotfix branch is used for urgent bug fixes that need to be deployed immediately. It is created from the main branch and is used to isolate the fix from the rest of the code until it has been tested and approved. Once the fix is approved, it can be merged back into the main branch and/or the release branch as needed.

### Create a hotfix branch

To create a hotfix branch in your local machine you can use
```
git checkout -b "<name_of_hotfix_branch>"
```