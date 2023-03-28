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

## 5. user_operations

## Description

This directory contains setters and getters for userdata and weekly data. THis is an example of it's usage:

### Setter

```bash
pdir/scripts/week_score/set_w_score.sh pdir user0 00 11.1
```

### Getter

```bash
pdir/scripts/week_score/get_w_score.sh pdir user0 00
```

All setters and getters have the same pattern, where the arguments are:

``` bash
<root directory> <username> <week (if processing weekly data)> <data (if setting data)>
```


:::warning

The getters **do not** check if the file exists, and will just return an empty line if it does. It only checks if the parent directories exist.

The setters have similar behavior. If it's parent directories exist, it will **blindly overwrite the file**

:::

