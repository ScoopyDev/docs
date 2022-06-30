"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[906],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return f}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(r),f=i,m=p["".concat(s,".").concat(f)]||p[f]||u[f]||a;return r?n.createElement(m,o(o({ref:t},d),{},{components:r})):n.createElement(m,o({ref:t},d))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2744:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),o=["components"],l={},s="How to make a Dedicated Server",c={unversionedId:"install-server",id:"install-server",isDocsHomePage:!1,title:"How to make a Dedicated Server",description:"Getting Started",source:"@site/docs/install-server.md",sourceDirName:".",slug:"/install-server",permalink:"/install-server",editUrl:"https://github.com/h1-mod/website/tree/docs/edit/docs/install-server.md",tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Unlock everything",permalink:"/unlockall"},next:{title:"Port Forwarding",permalink:"/port-forwarding"}},d=[{value:"Getting Started",id:"getting-started",children:[{value:"Prerequisites",id:"prerequisites",children:[],level:3},{value:"Installation",id:"installation",children:[],level:3}],level:2}],u={toc:d};function p(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-make-a-dedicated-server"},"How to make a Dedicated Server"),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"A step-by-step guide on setting up a Dedicated Server for H1-Mod.\nAt the current point in time, the dedicated server can be run on Windows only. (Dedicated Server CPU compatibility is undergoing upgrades, as some older Xeon processors have issues with the MWR binary)"),(0,a.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The server requires a static ip address."),(0,a.kt)("li",{parentName:"ul"},"The server requires port forwarding. A tutorial can be found ",(0,a.kt)("a",{parentName:"li",href:"port-forwarding"},"here"),"."),(0,a.kt)("li",{parentName:"ul"},"The server requires some redists which can be easily installed via this ",(0,a.kt)("a",{parentName:"li",href:"https://git.io/redists"},"Redist Installer"))),(0,a.kt)("h3",{id:"installation"},"Installation"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Download and install ",(0,a.kt)("a",{parentName:"li",href:"https://h1.gg/h1_dedicated_server_full.torrent"},"h1_dedicated_server_full.torrent"),"."),(0,a.kt)("li",{parentName:"ol"},"Download and install the latest H1-Mod release from ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/h1-mod/h1-mod/releases/latest"},"here"),"."),(0,a.kt)("li",{parentName:"ol"},"Drop the latest H1-Mod release in your ",(0,a.kt)("inlineCode",{parentName:"li"},"h1_dedicated_server_full")," directory."),(0,a.kt)("li",{parentName:"ol"},"Download the H1-Mod dedicated server config directly from ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/FragsAreUs/h1-mod-server-config/archive/refs/heads/main.zip"},"here"),"."),(0,a.kt)("li",{parentName:"ol"},"Extract the ",(0,a.kt)("inlineCode",{parentName:"li"},"H1-Mod Server Config")," to your ",(0,a.kt)("inlineCode",{parentName:"li"},"h1_dedicated_server_full")," directory."),(0,a.kt)("li",{parentName:"ol"},"Modify your server config file through the ",(0,a.kt)("inlineCode",{parentName:"li"},"main/server.cfg"),"."),(0,a.kt)("li",{parentName:"ol"},"Run ",(0,a.kt)("inlineCode",{parentName:"li"},"server.bat")," and Enjoy!")))}p.isMDXComponent=!0}}]);