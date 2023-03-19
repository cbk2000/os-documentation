---
sidebar_position: 4
---

# Tutorial

Here we will show you how to use the cbk03 command-line based program.

All the following steps assumes that:
1. You have followed the guide from [Getting Started](http://localhost:3000/os-documentation/docs/development/getting-started).
2. You are in a **linux** environment (Ubuntu, Debian, Arch, Endeavour, Kali, etc).
3. You have **bash** installed in your system.
4. You have **git** installed in your system
5. you have the repository **cloned** and **ready to use**
6. you are **in** the **cbk03** repository directory on your local

## 1. Input directory check

Before we start running the script, it is important to note that the files in the input directory on the repository **IS** and **ALWAYS WILL BE** a dummy data. Thus if you are planning to run the script with a different data please make sure that you have the data replace the dummy data on your local.

To check the input directory and list the files in it, you can use
```
cd pdir
cd input
ls -al
```

The current input directory should contain files such as
1. dataUser/
2. 00READ.ME
3. SCORET.txt
4. dataUser.tar.xz
5. infoSIAK.txt
6. mapNPM.txt

**IMPORTANT:** These files are the default names that has been agreed upon, thus any changes to these file names will require the user to also modify the **config.txt** found in the **pdir** directory.

## 2. Config

Once you have finish with the input directory, you can now move to back to the pdir directory by using
```
cd ..
ls -al
```

You should notice that the output of the **ls -al** command should show you a filename called **config.txt**

In this file, all filenames and changable variables are stored, thus this file is very sensitive and **DO NOT CHANGE THE FORMAT!**

You can alter the file using any text editor
example:
1. vim
```
vi config.txt
```

2. nano
```
nano config.txt
```

P.S: We **WILL NOT** provide tutorial on how to use these text editors, please find it yourself

## 3. Main Script
Once you're done with config.txt, we can now move on to the star of the show, **script.sh**. This script file is the main controller of the program, in order to launch/try the program itself you can run
```
bash script.sh
```
**WARNING: DO NOT RUN THIS IF YOU AREN'T SURE WITH YOUR CONFIG/FILES**

it should directly run its tasked based on the given config at config.txt.

Once the script is finished, you should be able to see the ouput at the output directory.

## 4. Output directory
The output directory by default is located in the pdir directory, 