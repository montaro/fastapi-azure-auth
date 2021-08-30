"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[474],{3905:function(e,t,n){n.d(t,{kt:function(){return d}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(n),k=i,m=d["".concat(l,".").concat(k)]||d[k]||c[k]||o;return n?a.createElement(m,r(r({ref:t},u),{},{components:n})):a.createElement(m,r({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,r[1]=p;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9357:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=["components"],p={title:"AAD Authorization",sidebar_position:1},l=void 0,s={unversionedId:"single-tenant/azure_setup",id:"single-tenant/azure_setup",isDocsHomePage:!1,title:"AAD Authorization",description:"For Azure AD to work for both our backend and through our OpenAPI (swagger) documentation, we'll need to do create",source:"@site/docs/single-tenant/azure_setup.mdx",sourceDirName:"single-tenant",slug:"/single-tenant/azure_setup",permalink:"/single-tenant/azure_setup",editUrl:"https://github.com/Intility/FastAPI-Azure-Auth/edit/main/docs/docs/single-tenant/azure_setup.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"AAD Authorization",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/installation"},next:{title:"FastAPI configuration",permalink:"/single-tenant/fastapi_configuration"}},c=[{value:"Backend API",id:"backend-api",children:[{value:"Step 1 - Create app registration",id:"step-1---create-app-registration",children:[]},{value:"Step 2 - Change token version to <code>v2</code>",id:"step-2---change-token-version-to-v2",children:[]},{value:"Step 3 - Note down your application IDs",id:"step-3---note-down-your-application-ids",children:[]},{value:"Step 4 - Add an application scope",id:"step-4---add-an-application-scope",children:[]}]},{value:"OpenAPI Documentation",id:"openapi-documentation",children:[{value:"Step 1 - Create app registration",id:"step-1---create-app-registration-1",children:[]},{value:"Step 2 - Change token version to <code>v2</code>",id:"step-2---change-token-version-to-v2-1",children:[]},{value:"Step 3 - Note down your application IDs",id:"step-3---note-down-your-application-ids-1",children:[]},{value:"Step 4 - Allow OpenAPI to talk to the Backend",id:"step-4---allow-openapi-to-talk-to-the-backend",children:[]}]}],u={toc:c};function d(e){var t=e.components,p=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},u,p,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"For Azure AD to work for both our backend and through our OpenAPI (swagger) documentation, we'll need to do create\ntwo application registrations."),(0,o.kt)("p",null,"We'll start with the API."),(0,o.kt)("h2",{id:"backend-api"},"Backend API"),(0,o.kt)("h3",{id:"step-1---create-app-registration"},"Step 1 - Create app registration"),(0,o.kt)("p",null,"Head over to\n",(0,o.kt)("a",{parentName:"p",href:"https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RegisteredApps"},"Azure -> Azure Active Directory -> App registrations"),",\nand create a new registration."),(0,o.kt)("p",null,"Select a fitting name for your project, this name will be presented to the user during consent."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Supported account types"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"Single tenant")," -  If you want to create a multi-tenant application, you\nshould head over to the ",(0,o.kt)("a",{parentName:"li",href:"/multi-tenant/azure_setup"},"multi-tenant documentation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Redirect URI"),": Choose ",(0,o.kt)("inlineCode",{parentName:"li"},"Web")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost:8000")," as a value")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"1_application_registration",src:n(5563).Z})),(0,o.kt)("p",null,"Press ",(0,o.kt)("strong",{parentName:"p"},"Register")),(0,o.kt)("h3",{id:"step-2---change-token-version-to-v2"},"Step 2 - Change token version to ",(0,o.kt)("inlineCode",{parentName:"h3"},"v2")),(0,o.kt)("p",null,"First we'll change the token version to version 2. In the left menu bar, click ",(0,o.kt)("inlineCode",{parentName:"p"},"Manifest")," and find the line\nthat says ",(0,o.kt)("inlineCode",{parentName:"p"},"accessTokenAcceptedVersion"),". Change it's value from ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"2"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"2_manifest",src:n(3161).Z})),(0,o.kt)("p",null,"Press ",(0,o.kt)("strong",{parentName:"p"},"Save")),(0,o.kt)("p",null,"(This change can take some time to happen, which is why we do this first.)"),(0,o.kt)("h3",{id:"step-3---note-down-your-application-ids"},"Step 3 - Note down your application IDs"),(0,o.kt)("p",null,"Go back to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Overview"),", found in the left menu."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"3_overview",src:n(3677).Z})),(0,o.kt)("p",null,"Copy the ",(0,o.kt)("inlineCode",{parentName:"p"},"Application (Client) ID")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Directory (tenant) ID"),", we'll need these for later. I like to use ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," files to\nstore variables like these:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=".env"',title:'".env"'},"APP_CLIENT_ID=\nTENANT_ID=\n")),(0,o.kt)("h3",{id:"step-4---add-an-application-scope"},"Step 4 - Add an application scope"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to ",(0,o.kt)("strong",{parentName:"li"},"Expose an API")," in the left menu bar under your app registration."),(0,o.kt)("li",{parentName:"ol"},"Press ",(0,o.kt)("strong",{parentName:"li"},"+ Add a scope")),(0,o.kt)("li",{parentName:"ol"},"Press ",(0,o.kt)("strong",{parentName:"li"},"Save and continue"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"4_add_scope",src:n(5866).Z})),(0,o.kt)("p",null,"Add a scope named ",(0,o.kt)("inlineCode",{parentName:"p"},"user_impersonation"),", that can be consented by ",(0,o.kt)("inlineCode",{parentName:"p"},"Admins and users"),".\n",(0,o.kt)("img",{alt:"5_add_scope_props",src:n(1582).Z})),(0,o.kt)("p",null,"You can use the following descriptions:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Access API as user\nAllows the app to access the API as the user.\n\nAccess API as you\nAllows the app to acces the API as you.\n")),(0,o.kt)("h2",{id:"openapi-documentation"},"OpenAPI Documentation"),(0,o.kt)("p",null,"Our OpenAPI documentation will use a flow called ",(0,o.kt)("inlineCode",{parentName:"p"},"Authorization Code Grant Flow, with Proof Key for Code Exchange"),".\nIt's a flow that allow a user of a Single-Page Application safely log in, consent to permissions and fetch an ",(0,o.kt)("inlineCode",{parentName:"p"},"access_token"),"\nin the ",(0,o.kt)("inlineCode",{parentName:"p"},"JWT")," format. When the user then click ",(0,o.kt)("inlineCode",{parentName:"p"},"Try out")," on the APIs, the ",(0,o.kt)("inlineCode",{parentName:"p"},"access_token")," is attached to the header as a ",(0,o.kt)("inlineCode",{parentName:"p"},"Bearer ")," token.\nThis is the token the backend will validate."),(0,o.kt)("p",null,"So, let's set it up!"),(0,o.kt)("h3",{id:"step-1---create-app-registration-1"},"Step 1 - Create app registration"),(0,o.kt)("p",null,"Just like in the previous chapter, we have to create an application registration for our OpenAPI."),(0,o.kt)("p",null,"Head over to\n",(0,o.kt)("a",{parentName:"p",href:"https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RegisteredApps"},"Azure -> Azure Active Directory -> App registrations"),",\nand create a new registration."),(0,o.kt)("p",null,"Use the same name, but with ",(0,o.kt)("inlineCode",{parentName:"p"},"- OpenAPI")," appended to it."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Supported account types"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"Single tenant")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Redirect URI"),": Choose ",(0,o.kt)("inlineCode",{parentName:"li"},"Single-Page Application (SPA)")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost:8000/oauth2-redirect")," as a value")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"6_application_registration_openapi",src:n(4316).Z})),(0,o.kt)("p",null,"Press ",(0,o.kt)("strong",{parentName:"p"},"Register")),(0,o.kt)("h3",{id:"step-2---change-token-version-to-v2-1"},"Step 2 - Change token version to ",(0,o.kt)("inlineCode",{parentName:"h3"},"v2")),(0,o.kt)("p",null,"Like last time, we'll change the token version to version 2. In the left menu bar, click ",(0,o.kt)("inlineCode",{parentName:"p"},"Manifest")," and find the line\nthat says ",(0,o.kt)("inlineCode",{parentName:"p"},"accessTokenAcceptedVersion"),". Change it's value from ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"2"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"3_manifest",src:n(3161).Z})),(0,o.kt)("p",null,"Press ",(0,o.kt)("strong",{parentName:"p"},"Save")),(0,o.kt)("h3",{id:"step-3---note-down-your-application-ids-1"},"Step 3 - Note down your application IDs"),(0,o.kt)("p",null,"Go back to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Overview"),", found in the left menu."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"7_overview_openapi",src:n(6482).Z})),(0,o.kt)("p",null,"Copy the ",(0,o.kt)("inlineCode",{parentName:"p"},"Application (Client) ID")," and save it as your ",(0,o.kt)("inlineCode",{parentName:"p"},"OPENAPI_CLIENT_ID"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=".env" {3}',title:'".env"',"{3}":!0},"APP_CLIENT_ID=\nTENANT_ID=\nOPENAPI_CLIENT_ID=\n")),(0,o.kt)("h3",{id:"step-4---allow-openapi-to-talk-to-the-backend"},"Step 4 - Allow OpenAPI to talk to the Backend"),(0,o.kt)("p",null,"To allow OpenAPI to talk to the Backend API, you need to add API permissions to the OpenAPI app registration.\nIn the left menu, go to ",(0,o.kt)("strong",{parentName:"p"},"API Permissions")," and ",(0,o.kt)("strong",{parentName:"p"},"Add a permission"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"8_api_permissions",src:n(8249).Z})),(0,o.kt)("p",null,"Select the ",(0,o.kt)("inlineCode",{parentName:"p"},"user_impersonation")," scope, and press ",(0,o.kt)("strong",{parentName:"p"},"Add a permission"),"."),(0,o.kt)("p",null,"Your view should now look something like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"9_api_permissions_finish",src:n(3056).Z})),(0,o.kt)("p",null,"That's it! Next step is to configure the FastAPI application."))}d.isMDXComponent=!0},5563:function(e,t,n){t.Z=n.p+"assets/images/1_application_registration-dbe17b55f16286390e5cdcafeb7650a9.png"},3161:function(e,t,n){t.Z=n.p+"assets/images/2_manifest-1b8787c29ab4f1141631adc9b0e1f6da.png"},3677:function(e,t,n){t.Z=n.p+"assets/images/3_overview-645be70b19834d6652531701c5589761.png"},5866:function(e,t,n){t.Z=n.p+"assets/images/4_add_scope-b92ca374688a71c50520829f7141e39c.png"},1582:function(e,t,n){t.Z=n.p+"assets/images/5_add_scope_props-5102f17459906ae9347cf18bc2d89b74.png"},4316:function(e,t,n){t.Z=n.p+"assets/images/6_application_registration_openapi-ce91c522a3b2e19f85b410b500aa714d.png"},6482:function(e,t,n){t.Z=n.p+"assets/images/7_overview_openapi-01564c0cdbcd18d11059037f96e177e6.png"},8249:function(e,t,n){t.Z=n.p+"assets/images/8_api_permissions-fe3b2a5164249990612a022c10bdcca5.png"},3056:function(e,t,n){t.Z=n.p+"assets/images/9_api_permissions_finish-48d03b99688420c25d45a2bb31569f34.png"}}]);