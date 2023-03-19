---
sidebar_position: 3
---

# Directory Structure

## Available Directories

The baseline structure of the repository code should look like this
```
docs/
pdir/
.gitignore
LICENSE
README.md
```

The docs direcotry is used for containing all explanation/documentation in the form of TXT files. In the docs directory it contains:
```
docs/
  |-additional.txt
  |-branch.txt
  |-deploy.txt
```

The pdir directory is the main working directory where all the scripts and input as well as output files will be stored. Inside pdir there shoud be
```
pdir/
  |-input/
    |-...
  |-output/
    |-...
  |-scripts/
    |-...
  |-README.md
  |-config.txt
  |-script.sh
```