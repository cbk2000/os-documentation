"use strict";(self.webpackChunkcbk_2000=self.webpackChunkcbk_2000||[]).push([[8422],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>b});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,b=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(b,l(l({ref:t},s),{},{components:r})):n.createElement(b,l({ref:t},s))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},874:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:4},l="Deploying the TARBALL",i={unversionedId:"development/deploy",id:"development/deploy",title:"Deploying the TARBALL",description:"The main program, will be encapsulated inside a TARBALL that will be deployed to Github Pages. Here is the tutorial of which.",source:"@site/docs/development/deploy.md",sourceDirName:"development",slug:"/development/deploy",permalink:"/os-documentation/docs/development/deploy",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/development/deploy.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Directory Structure",permalink:"/os-documentation/docs/development/directory-structure"},next:{title:"Tutorial",permalink:"/os-documentation/docs/development/tutorial"}},p={},c=[],s={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deploying-the-tarball"},"Deploying the TARBALL"),(0,o.kt)("p",null,"The main program, will be encapsulated inside a ",(0,o.kt)("strong",{parentName:"p"},"TARBALL")," that will be deployed to ",(0,o.kt)("strong",{parentName:"p"},"Github Pages"),". Here is the tutorial of which."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a new branch called tarball using the following command in your terminal:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git checkout -b tarball-deploy\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Add the tarball into the branch and then stage the changes")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'git add .\ngit commit -m "<commit message>"\n')),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Push the changes to your GitHub repository using the following command:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git push origin tarball\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Once the push is complete, navigate to the Settings page of your GitHub repository.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Scroll down to the "GitHub Pages" section and select the tarball branch as the source.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Save the changes, and your tarball file should now be available at "))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://cbk2000.github.io/cbk03/<tarball-file>\n")))}d.isMDXComponent=!0}}]);