(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{143:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var o=n(162),r=n(163),c=(n(0),n(164)),a={title:"Configuring Google Authentication for React App (OIDC)",hide_title:!0,slug:"/how/sso/configure-oidc-react-google",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/how/sso/configure-oidc-react-google.md"},i={unversionedId:"docs/how/sso/configure-oidc-react-google",id:"docs/how/sso/configure-oidc-react-google",isDocsHomePage:!1,title:"Configuring Google Authentication for React App (OIDC)",description:"Configuring Google Authentication for React App (OIDC)",source:"@site/genDocs/docs/how/sso/configure-oidc-react-google.md",slug:"/how/sso/configure-oidc-react-google",permalink:"/docs/how/sso/configure-oidc-react-google",editUrl:"https://github.com/linkedin/datahub/blob/master/docs/how/sso/configure-oidc-react-google.md",version:"current",sidebar:"overviewSidebar",previous:{title:"OIDC Authentication in React",permalink:"/docs/how/configure-oidc-react"},next:{title:"Configuring Okta Authentication for React App (OIDC)",permalink:"/docs/how/sso/configure-oidc-react-okta"}},l=[{value:"Steps",id:"steps",children:[{value:"1. Create a project in the Google API Console",id:"1-create-a-project-in-the-google-api-console",children:[]},{value:"2. Create OAuth2.0 consent screen",id:"2-create-oauth20-consent-screen",children:[]},{value:"3. Configure client credentials",id:"3-configure-client-credentials",children:[]},{value:"4. Configure <code>datahub-frontend</code> to enable OIDC authentication",id:"4-configure-datahub-frontend-to-enable-oidc-authentication",children:[]},{value:"5. Restart <code>datahub-frontend-react</code> docker container",id:"5-restart-datahub-frontend-react-docker-container",children:[]}]},{value:"References",id:"references",children:[]}],u={rightToc:l};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(o.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"configuring-google-authentication-for-react-app-oidc"},"Configuring Google Authentication for React App (OIDC)"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Authored on 3/10/2021")),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"datahub-frontend")," server can be configured to authenticate users over OpenID Connect (OIDC). As such, it can be configured to delegate\nauthentication responsibility to identity providers like Google. "),Object(c.b)("p",null,"This guide will provide steps for configuring DataHub authentication using Google."),Object(c.b)("h2",{id:"steps"},"Steps"),Object(c.b)("h3",{id:"1-create-a-project-in-the-google-api-console"},"1. Create a project in the Google API Console"),Object(c.b)("p",null,"Using an account linked to your organization, navigate to the ",Object(c.b)("a",{parentName:"p",href:"https://console.developers.google.com/"},"Google API Console")," and select ",Object(c.b)("strong",{parentName:"p"},"New project"),".\nWithin this project, we will configure the OAuth2.0 screen and credentials. "),Object(c.b)("h3",{id:"2-create-oauth20-consent-screen"},"2. Create OAuth2.0 consent screen"),Object(c.b)("p",null,"a. Navigate to ",Object(c.b)("inlineCode",{parentName:"p"},"OAuth consent screen"),". This is where you'll configure the screen your users see when attempting to\nlog in to DataHub. "),Object(c.b)("p",null,"b. Select ",Object(c.b)("inlineCode",{parentName:"p"},"Internal")," (if you only want your company users to have access) and then click ",Object(c.b)("strong",{parentName:"p"},"Create"),".\nNote that in order to complete this step you should be logged into a Google account associated with your organization. "),Object(c.b)("p",null,"c. Fill out the details in the App Information & Domain sections. Make sure the 'Application Home Page' provided matches where DataHub is deployed\nat your organization. "),Object(c.b)("p",null,Object(c.b)("img",{alt:"google-setup-1",src:n(280).default})),Object(c.b)("p",null,"Once you've completed this, ",Object(c.b)("strong",{parentName:"p"},"Save & Continue"),". "),Object(c.b)("p",null,"d. Configure the scopes: Next, click ",Object(c.b)("strong",{parentName:"p"},"Add or Remove Scopes"),". Select the following scopes:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"- `.../auth/userinfo.email`\n- `.../auth/userinfo.profile`\n- `openid`\n")),Object(c.b)("p",null,"Once you've selected these, ",Object(c.b)("strong",{parentName:"p"},"Save & Continue"),". "),Object(c.b)("h3",{id:"3-configure-client-credentials"},"3. Configure client credentials"),Object(c.b)("p",null,"Now navigate to the ",Object(c.b)("strong",{parentName:"p"},"Credentials")," tab. This is where you'll obtain your client id & secret, as well as configure info\nlike the redirect URI used after a user is authenticated. "),Object(c.b)("p",null,"a. Click ",Object(c.b)("strong",{parentName:"p"},"Create Credentials")," & select ",Object(c.b)("inlineCode",{parentName:"p"},"OAuth client ID")," as the credential type."),Object(c.b)("p",null,"b. On the following screen, select ",Object(c.b)("inlineCode",{parentName:"p"},"Web application")," as your Application Type. "),Object(c.b)("p",null,"c. Add the domain where DataHub is hosted to your 'Authorized Javascript Origins'."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"https://your-datahub-domain.com\n")),Object(c.b)("p",null,"d. Add the domain where DataHub is hosted with the path ",Object(c.b)("inlineCode",{parentName:"p"},"/callback/oidc")," appended to 'Authorized Redirect URLs'. "),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"https://your-datahub-domain.com/callback/oidc\n")),Object(c.b)("p",null,"e. Click ",Object(c.b)("strong",{parentName:"p"},"Create")),Object(c.b)("p",null,"f. You will now receive a pair of values, a client id and a client secret. Bookmark these for the next step."),Object(c.b)("p",null,"At this point, you should be looking at a screen like the following:"),Object(c.b)("p",null,Object(c.b)("img",{alt:"google-setup-2",src:n(281).default})),Object(c.b)("p",null,"Success!"),Object(c.b)("h3",{id:"4-configure-datahub-frontend-to-enable-oidc-authentication"},"4. Configure ",Object(c.b)("inlineCode",{parentName:"h3"},"datahub-frontend")," to enable OIDC authentication"),Object(c.b)("p",null,"a. Open the file ",Object(c.b)("inlineCode",{parentName:"p"},"docker/datahub-frontend/env/docker.env")),Object(c.b)("p",null,"b. Add the following configuration values to the file: "),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"AUTH_OIDC_ENABLED=true\nAUTH_OIDC_CLIENT_ID=your-client-id\nAUTH_OIDC_CLIENT_SECRET=your-client-secret\nAUTH_OIDC_DISCOVERY_URI=https://accounts.google.com/.well-known/openid-configuration\nAUTH_OIDC_BASE_URL=your-datahub-url\nAUTH_OIDC_USER_NAME_CLAIM=email\nAUTH_OIDC_USER_NAME_CLAIM_REGEX=([^@]+)\n")),Object(c.b)("p",null,"Replacing the placeholders above with the client id & client secret received from Google in Step 3f.  "),Object(c.b)("h3",{id:"5-restart-datahub-frontend-react-docker-container"},"5. Restart ",Object(c.b)("inlineCode",{parentName:"h3"},"datahub-frontend-react")," docker container"),Object(c.b)("p",null,"Now, simply restart the ",Object(c.b)("inlineCode",{parentName:"p"},"datahub-frontend-react")," container to enable the integration. "),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"docker-compose -p datahub -f docker-compose.yml -f docker-compose.override.yml -f docker-compose.react.yml restart datahub-frontend-react\n")),Object(c.b)("p",null,"Navigate to your DataHub domain to see SSO in action. "),Object(c.b)("h2",{id:"references"},"References"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://developers.google.com/identity/protocols/oauth2/openid-connect"},"OpenID Connect in Google Identity"))))}s.isMDXComponent=!0},162:function(e,t,n){"use strict";function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return o}))},163:function(e,t,n){"use strict";function o(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,"a",(function(){return o}))},164:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var o=n(0),r=n.n(o);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),s=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=o,h=p["".concat(a,".").concat(d)]||p[d]||b[d]||c;return n?r.a.createElement(h,i(i({ref:t},u),{},{components:n})):r.a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<c;u++)a[u]=n[u];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},280:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/google-setup-1-25361c1198a75d1be746f5e40ff73f3b.png"},281:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/google-setup-2-699aeebb171a3ca62251e7dbb15d97e0.png"}}]);