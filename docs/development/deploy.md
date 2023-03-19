---
sidebar_position: 4
---

# Deploying the TARBALL

The main program, will be encapsulated inside a **TARBALL** that will be deployed to **Github Pages**. Here is the tutorial of which.

1. Create a new branch called tarball using the following command in your terminal:
```
git checkout -b tarball-deploy
```

2. Add the tarball into the branch and then stage the changes
```
git add .
git commit -m "<commit message>"
``` 

3. Push the changes to your GitHub repository using the following command:
```
git push origin tarball
```

4. Once the push is complete, navigate to the Settings page of your GitHub repository.

5. Scroll down to the "GitHub Pages" section and select the tarball branch as the source.

6. Save the changes, and your tarball file should now be available at 
```
https://cbk2000.github.io/cbk03/<tarball-file>
```