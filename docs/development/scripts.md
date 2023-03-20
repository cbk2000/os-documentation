---
sidebar_position: 6
---

# Scripts

Here will be the documentation of each script in the scripts directory

## 1. input_check.sh
### Description
This is a script to generate input files if they haven't existed yet in order to prevent crashing the script on upcomming processes

### Purpose


### Dependencies


## 2. user_data_array.sh
### Description
### Purpose
### Dependencies

## 3. weekly_data_array.sh
### Description
### Purpose
### Dependencies

## 4. init_scoret.sh
### Description
### Purpose
### Dependencies

## 5. input_scoret.sh
### **Description**

`input_scoret.sh` is a Bash script that generates or updates the `SCORET.txt` file for a course based on student IDs, weekly scores, and midterm/final scores.


### **Purpose**

The purpose of this script is to automate the process of generating or updating the `SCORET.txt` file for a course. It reads the necessary data from input files and student directories, calculates the total scores for each student, and generates a formatted text file that can be used for grading and other purposes.


### **Dependencies**

This script has the following dependencies:



* Bash shell
* `grep`, `awk`, `sort`, `uniq`, `readarray`, `cut`, and `sed` commands, which are included in most Unix-based operating systems.
* Input files containing a list of student IDs and a mapping of student IDs to GitHub account names.
* Student data directories containing subdirectories named DW00 to DW11, and files named `06UTS` and `07UAS` for midterm and final scores.