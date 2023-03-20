"use strict";(self.webpackChunkgame_pencil_engine_docs=self.webpackChunkgame_pencil_engine_docs||[]).push([[5382],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>d});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,d=u["".concat(p,".").concat(m)]||u[m]||g[m]||i;return t?r.createElement(d,o(o({ref:n},l),{},{components:t})):r.createElement(d,o({ref:n},l))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2160:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const i={sidebar_position:8},o="The GPE Namespace",s={unversionedId:"gpe-namespace",id:"gpe-namespace",title:"The GPE Namespace",description:"GPE Namespace code definition",source:"@site/docs/gpe-namespace.md",sourceDirName:".",slug:"/gpe-namespace",permalink:"/docs/gpe-namespace",draft:!1,editUrl:"https://github.com/pawbyte/gpe-docs/edit/main/docs/gpe-namespace.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Building from Source",permalink:"/docs/building"},next:{title:"building-linux",permalink:"/docs/building-linux"}},p={},c=[{value:"What is a namespace?",id:"what-is-a-namespace",level:2},{value:"Using gpe namespace in your projects",id:"using-gpe-namespace-in-your-projects",level:2},{value:"What happens without the gpe namespace?",id:"what-happens-without-the-gpe-namespace",level:2}],l={toc:c},u="wrapper";function g(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"the-gpe-namespace"},"The GPE Namespace"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://olddocs.gamepencil.net/wp-content/uploads/sites/6/2021/03/image_2021-03-06_093032.png",alt:"GPE Namespace code definition"})),(0,a.kt)("h2",{id:"what-is-a-namespace"},"What is a namespace?"),(0,a.kt)("p",null,"Namespaces in languages like C++ allow you to group functions, objects and classes under a specific named umbrella."),(0,a.kt)("p",null,'Most people familiar with C++ have used the Standard "std" namespace. I.E when one wants to use a string they use std::string instead of string to clarify the umbrella string is under.'),(0,a.kt)("h2",{id:"using-gpe-namespace-in-your-projects"},"Using gpe namespace in your projects"),(0,a.kt)("p",null,'After including "gpe/gpe.h" you will be able to make calls and include the gpe namespace within your code. ',(0,a.kt)("strong",{parentName:"p"},'To access gpe\'s classes, objects and functions simple type "gpe::" and then your variable, code or class you wish to use.')," With Game Pencil being open source, it is crucial to be careful that you don't delete or alter objects meant to be left alone or unchanged."),(0,a.kt)("p",null,"To explain how our variables, functions and classes are separated into the gpe namespace let's try an example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'#include "gpe/gpe.h"\n#include <string>\n#include <iostream>\n\nint main( int argc, char* args[] )\n{\n    //Initialize the settings\n    gpe::init_settings(argc, args , "Test","test","game_errors.txt" );\n\n    //Initialize the base objects of gpe\n    if( gpe::init_core_engine(argc, args,"game_errors.txt" ) == false )\n    {\n        gpe::error_log->report("Unable to properly initialize gpe_core_engine!\\n");\n        return 0;\n    }\n    else\n    {\n        gpe::error_log("Program started succesfully");\n\n    }\n\n   gpe::quit_engine();\n   gpe::quit_core_engin();\n\n    return 1;\n}\n')),(0,a.kt)("p",null,'You should see"Program started successfully" in your game_errors.txt file if you included gpe correctly.'),(0,a.kt)("h2",{id:"what-happens-without-the-gpe-namespace"},"What happens without the gpe namespace?"),(0,a.kt)("p",null,'The following program "should not compile"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'#include "gpe/gpe.h"\n#include <string>\n#include <iostream>\n\nint main( int argc, char* args[] )\n{\n    //Initialize the settings\n    gpe::init_settings(argc, args , "Test","test","game_errors.txt" );\n\n    //Initialize the base objects of gpe\n    if( init_core_engine(argc, args,"game_errors.txt" ) == false )\n    {\n        error_log->report("Unable to properly initialize gpe_core_engine!\\n");\n        return 0;\n    }\n    else\n    {\n        error_log("Program started succesfully");\n\n    }\n\n   quit_engine();\n   quit_core_engin();\n\n    return 1;\n}\n')),(0,a.kt)("p",null,"In CodeBlocks, I'm met with these error codes:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://olddocs.gamepencil.net/wp-content/uploads/sites/6/2021/03/image_2021-03-06_111945.png",alt:"Codeblocks error screenshot"})),(0,a.kt)("p",null,"As you can see these functions are undeclared as they are only specified within the gpe namespace. This clears up your code from any potential redeclarations of the same functions."))}g.isMDXComponent=!0}}]);