(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"7oih":function(e,t,n){"use strict";var r=n("dI71"),o=n("q1tI"),a=n.n(o),i=n("TJpk"),u=n.n(i),c=n("Wbzz");n("kpl1"),n("obyI");function l(){return a.a.createElement("footer",{id:"footer"},a.a.createElement("ul",{className:"copyright"},a.a.createElement("li",null,"Created with 💜 by ",a.a.createElement("b",null,"Ezgi Elouzeh")," | 2021"),a.a.createElement("p",null,"Built using ",a.a.createElement("a",{href:"https://www.gatsbyjs.com/",target:"_blank"},"Gatsby"))))}function s(e){var t=e.onMenuToggle,n=void 0===t?function(){}:t;return a.a.createElement("nav",{id:"nav"},a.a.createElement("ul",null,a.a.createElement("li",{className:"special"},a.a.createElement("a",{href:"#menu",onClick:function(e){e.preventDefault(),n()},className:"menuToggle"},a.a.createElement("span",null,"Menu")),a.a.createElement("div",{id:"menu"},a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement(c.Link,{to:"/"},"Home")),a.a.createElement("li",null,a.a.createElement(c.Link,{to:"/Resume"},"Resume")),a.a.createElement("li",null,a.a.createElement(c.Link,{to:"/#three"},"Skills")),a.a.createElement("li",null,a.a.createElement(c.Link,{to:"/#two"},"Projects")),a.a.createElement("li",null,a.a.createElement(c.Link,{to:"/#cta"},"Contact"))),a.a.createElement("a",{className:"close",onClick:function(e){e.preventDefault(),n()},href:"#menu"},"")))))}function T(e){var t=e.fullMenu,n=Object(o.useState)(!1),r=n[0],i=n[1];return a.a.createElement("header",{id:"header",className:t?"":"alt"},a.a.createElement("h1",null,a.a.createElement(c.Link,{to:"/"},"Ezgi Elouzeh")),a.a.createElement("div",{className:r?"is-menu-visible":" "},a.a.createElement(s,{onMenuToggle:function(){return i(!r)}})))}var f=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={isPreloaded:!0},n}Object(r.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;this.timeoutId=setTimeout((function(){e.setState({isPreloaded:!1})}),100)},n.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},n.render=function(){var e=this.props,t=e.children,n=e.fullMenu,r=this.state.isPreloaded;return a.a.createElement(c.StaticQuery,{query:"3649515864",render:function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(u.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Spectral"},{name:"keywords",content:"site, web"}]},a.a.createElement("html",{lang:"en"})),a.a.createElement("div",{className:r?"landing main-body is-preload":"landing main-body"},a.a.createElement("div",{id:"page-wrapper"},a.a.createElement(T,{fullMenu:n}),t,a.a.createElement(l,null))))}})},t}(o.Component);t.a=f},"8+s/":function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var o=n("q1tI"),a=r(o),i=r(n("Gytx"));function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,s=[];function T(){l=e(s.map((function(e){return e.props}))),f.canUseDOM?t(l):n&&(l=n(l))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return l},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,s=[],e};var u=o.prototype;return u.shouldComponentUpdate=function(e){return!i(e,this.props)},u.componentWillMount=function(){s.push(this),T()},u.componentDidUpdate=function(){T()},u.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),T()},u.render=function(){return a.createElement(r,this.props)},o}(o.Component);return u(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),u(f,"canUseDOM",c),f}}},Gytx:function(e,t){e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(t),c=0;c<a.length;c++){var l=a[c];if(!u(l))return!1;var s=e[l],T=t[l];if(!1===(o=n?n.call(r,s,T,l):void 0)||void 0===o&&s!==T)return!1}return!0}},TJpk:function(e,t,n){t.__esModule=!0,t.Helmet=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=T(n("q1tI")),i=T(n("17x9")),u=T(n("8+s/")),c=T(n("bmMU")),l=n("v1p5"),s=n("hFT/");function T(e){return e&&e.__esModule?e:{default:e}}function f(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function E(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var d,m,A,h=(0,u.default)(l.reducePropsToState,l.handleClientStateChange,l.mapStateOnServer)((function(){return null})),y=(d=h,A=m=function(e){function t(){return E(this,t),p(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,c.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case s.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,o=e.arrayTypeChildren,a=e.newChildProps,i=e.nestedChildren;return r({},o,((t={})[n.type]=[].concat(o[n.type]||[],[r({},a,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,o=e.child,a=e.newProps,i=e.newChildProps,u=e.nestedChildren;switch(o.type){case s.TAG_NAMES.TITLE:return r({},a,((t={})[o.type]=u,t.titleAttributes=r({},i),t));case s.TAG_NAMES.BODY:return r({},a,{bodyAttributes:r({},i)});case s.TAG_NAMES.HTML:return r({},a,{htmlAttributes:r({},i)})}return r({},a,((n={})[o.type]=r({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=r({},t);return Object.keys(e).forEach((function(t){var o;n=r({},n,((o={})[t]=e[t],o))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return a.default.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,a=o.children,i=f(o,["children"]),u=(0,l.convertReactPropstoHtmlAttributes)(i);switch(n.warnOnInvalidChildren(e,a),e.type){case s.TAG_NAMES.LINK:case s.TAG_NAMES.META:case s.TAG_NAMES.NOSCRIPT:case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:u,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:u,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=f(e,["children"]),o=r({},n);return t&&(o=this.mapChildrenToProps(t,o)),a.default.createElement(d,o)},o(t,null,[{key:"canUseDOM",set:function(e){d.canUseDOM=e}}]),t}(a.default.Component),m.propTypes={base:i.default.object,bodyAttributes:i.default.object,children:i.default.oneOfType([i.default.arrayOf(i.default.node),i.default.node]),defaultTitle:i.default.string,defer:i.default.bool,encodeSpecialCharacters:i.default.bool,htmlAttributes:i.default.object,link:i.default.arrayOf(i.default.object),meta:i.default.arrayOf(i.default.object),noscript:i.default.arrayOf(i.default.object),onChangeClientState:i.default.func,script:i.default.arrayOf(i.default.object),style:i.default.arrayOf(i.default.object),title:i.default.string,titleAttributes:i.default.object,titleTemplate:i.default.string},m.defaultProps={defer:!0,encodeSpecialCharacters:!0},m.peek=d.peek,m.rewind=function(){var e=d.rewind();return e||(e=(0,l.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},A);y.renderStatic=y.rewind,t.Helmet=y,t.default=y},bmMU:function(e,t,n){"use strict";var r=Array.isArray,o=Object.keys,a=Object.prototype.hasOwnProperty,i="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var u,c,l,s=r(t),T=r(n);if(s&&T){if((c=t.length)!=n.length)return!1;for(u=c;0!=u--;)if(!e(t[u],n[u]))return!1;return!0}if(s!=T)return!1;var f=t instanceof Date,E=n instanceof Date;if(f!=E)return!1;if(f&&E)return t.getTime()==n.getTime();var p=t instanceof RegExp,d=n instanceof RegExp;if(p!=d)return!1;if(p&&d)return t.toString()==n.toString();var m=o(t);if((c=m.length)!==o(n).length)return!1;for(u=c;0!=u--;)if(!a.call(n,m[u]))return!1;if(i&&t instanceof Element&&n instanceof Element)return t===n;for(u=c;0!=u--;)if(!("_owner"===(l=m[u])&&t.$$typeof||e(t[l],n[l])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},"hFT/":function(e,t,n){n("E9XD"),t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var r=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},o=(t.VALID_TAG_NAMES=Object.keys(r).map((function(e){return r[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(o).reduce((function(e,t){return e[o[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[r.NOSCRIPT,r.SCRIPT,r.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},kpl1:function(e,t,n){},obyI:function(e,t){e.exports={siteTitle:"Ezgi Elouzeh",manifestName:"Spectral",manifestShortName:"Landing",manifestStartUrl:"/",manifestBackgroundColor:"#663399",manifestThemeColor:"#663399",manifestDisplay:"standalone",manifestIcon:"src/assets/img/website-icon.png",pathPrefix:"/gatsby-starter-spectral/",heading:"Ezgi Elouzeh",subHeading:"Fullstack Engineer",socialLinks:[{style:"brands",icon:"fa-github",name:"Github",url:"https://github.com/ezgielouzeh"},{style:"brands",icon:"fa-twitter",name:"Twitter",url:"https://twitter.com/EElouzeh"},{style:"solid",icon:"fa-envelope",name:"Email",url:"mailto:ezgisirip@gmail.com"}],projects:{courses:[{style:"brands fa-2x",icon:"fa-github",name:"Github",url:"https://github.com/Dragonair-Dream-Team/4course-capstone"},{style:"brands",icon:"fa-link",name:"Link",url:"https://twitter.com/EElouzeh"}],plantter:[{style:"brands",icon:"fa-github",name:"Github",url:"https://github.com/N7-Normandy/Grace-Plantter"},{style:"brands",icon:"fa-link",name:"Link",url:"https://twitter.com/EElouzeh"}],portfolio:[{style:"brands",icon:"fa-github",name:"Github",url:"https://github.com/ezgielouzeh/portfolio-website"},{style:"brands",icon:"fa-link",name:"Link",url:"https://twitter.com/EElouzeh"}],ditchionary:[{style:"brands",icon:"fa-github",name:"Github",url:"https://github.com/ezgielouzeh/ditchionary"},{style:"brands",icon:"fa-link",name:"Link",url:"https://twitter.com/EElouzeh"}]}}},v1p5:function(e,t,n){(function(e){n("E9XD"),t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=c(n("q1tI")),i=c(n("YVoz")),u=n("hFT/");function c(e){return e&&e.__esModule?e:{default:e}}var l,s=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},T=function(e){var t=m(e,u.TAG_NAMES.TITLE),n=m(e,u.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,(function(){return t}));var r=m(e,u.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},f=function(e){return m(e,u.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},E=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return o({},e,t)}),{})},p=function(e,t){return t.filter((function(e){return void 0!==e[u.TAG_NAMES.BASE]})).map((function(e){return e[u.TAG_NAMES.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o].toLowerCase();if(-1!==e.indexOf(a)&&n[a])return t.concat(n)}return t}),[])},d=function(e,t,n){var o={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&b("Helmet: "+e+' should be of type "Array". Instead found type "'+r(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var r={};n.filter((function(e){for(var n=void 0,a=Object.keys(e),i=0;i<a.length;i++){var c=a[i],l=c.toLowerCase();-1===t.indexOf(l)||n===u.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||l===u.TAG_PROPERTIES.REL&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(c)||c!==u.TAG_PROPERTIES.INNER_HTML&&c!==u.TAG_PROPERTIES.CSS_TEXT&&c!==u.TAG_PROPERTIES.ITEM_PROP||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return o[n]||(o[n]={}),r[n]||(r[n]={}),!o[n][s]&&(r[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(r),c=0;c<a.length;c++){var l=a[c],s=(0,i.default)({},o[l],r[l]);o[l]=s}return e}),[]).reverse()},m=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},A=(l=Date.now(),function(e){var t=Date.now();t-l>16?(l=t,e(t)):setTimeout((function(){A(e)}),0)}),h=function(e){return clearTimeout(e)},y="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||A:e.requestAnimationFrame||A,S="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||h:e.cancelAnimationFrame||h,b=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},_=null,g=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,s=e.scriptTags,T=e.styleTags,f=e.title,E=e.titleAttributes;R(u.TAG_NAMES.BODY,r),R(u.TAG_NAMES.HTML,o),P(f,E);var p={baseTag:M(u.TAG_NAMES.BASE,n),linkTags:M(u.TAG_NAMES.LINK,a),metaTags:M(u.TAG_NAMES.META,i),noscriptTags:M(u.TAG_NAMES.NOSCRIPT,c),scriptTags:M(u.TAG_NAMES.SCRIPT,s),styleTags:M(u.TAG_NAMES.STYLE,T)},d={},m={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(d[e]=n),r.length&&(m[e]=p[e].oldTags)})),t&&t(),l(e,d,m)},v=function(e){return Array.isArray(e)?e.join(""):e},P=function(e,t){void 0!==e&&document.title!==e&&(document.title=v(e)),R(u.TAG_NAMES.TITLE,t)},R=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(u.HELMET_ATTRIBUTE),o=r?r.split(","):[],a=[].concat(o),i=Object.keys(t),c=0;c<i.length;c++){var l=i[c],s=t[l]||"";n.getAttribute(l)!==s&&n.setAttribute(l,s),-1===o.indexOf(l)&&o.push(l);var T=a.indexOf(l);-1!==T&&a.splice(T,1)}for(var f=a.length-1;f>=0;f--)n.removeAttribute(a[f]);o.length===a.length?n.removeAttribute(u.HELMET_ATTRIBUTE):n.getAttribute(u.HELMET_ATTRIBUTE)!==i.join(",")&&n.setAttribute(u.HELMET_ATTRIBUTE,i.join(","))}},M=function(e,t){var n=document.head||document.querySelector(u.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+u.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),a=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===u.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===u.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(u.HELMET_ATTRIBUTE,"true"),o.some((function(e,t){return i=t,n.isEqualNode(e)}))?o.splice(i,1):a.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:a}},O=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},C=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[u.REACT_TAG_MAP[n]||n]=e[n],t}),t)},I=function(e,t,n){switch(e){case u.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[u.HELMET_ATTRIBUTE]=!0,o=C(n,r),[a.default.createElement(u.TAG_NAMES.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=O(n),a=v(t);return o?"<"+e+" "+u.HELMET_ATTRIBUTE+'="true" '+o+">"+s(a,r)+"</"+e+">":"<"+e+" "+u.HELMET_ATTRIBUTE+'="true">'+s(a,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case u.ATTRIBUTE_NAMES.BODY:case u.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return C(t)},toString:function(){return O(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[u.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach((function(e){var n=u.REACT_TAG_MAP[e]||e;if(n===u.TAG_PROPERTIES.INNER_HTML||n===u.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),a.default.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===u.TAG_PROPERTIES.INNER_HTML||e===u.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+s(r[t],n)+'"';return e?e+" "+o:o}),""),a=r.innerHTML||r.cssText||"",i=-1===u.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+u.HELMET_ATTRIBUTE+'="true" '+o+(i?"/>":">"+a+"</"+e+">")}),"")}(e,t,n)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[u.HTML_TAG_MAP[n]||n]=e[n],t}),t)},t.handleClientStateChange=function(e){_&&S(_),e.defer?_=y((function(){g(e,(function(){_=null}))})):(g(e),_=null)},t.mapStateOnServer=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.scriptTags,s=e.styleTags,T=e.title,f=void 0===T?"":T,E=e.titleAttributes;return{base:I(u.TAG_NAMES.BASE,t,r),bodyAttributes:I(u.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:I(u.ATTRIBUTE_NAMES.HTML,o,r),link:I(u.TAG_NAMES.LINK,a,r),meta:I(u.TAG_NAMES.META,i,r),noscript:I(u.TAG_NAMES.NOSCRIPT,c,r),script:I(u.TAG_NAMES.SCRIPT,l,r),style:I(u.TAG_NAMES.STYLE,s,r),title:I(u.TAG_NAMES.TITLE,{title:f,titleAttributes:E},r)}},t.reducePropsToState=function(e){return{baseTag:p([u.TAG_PROPERTIES.HREF],e),bodyAttributes:E(u.ATTRIBUTE_NAMES.BODY,e),defer:m(e,u.HELMET_PROPS.DEFER),encode:m(e,u.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:E(u.ATTRIBUTE_NAMES.HTML,e),linkTags:d(u.TAG_NAMES.LINK,[u.TAG_PROPERTIES.REL,u.TAG_PROPERTIES.HREF],e),metaTags:d(u.TAG_NAMES.META,[u.TAG_PROPERTIES.NAME,u.TAG_PROPERTIES.CHARSET,u.TAG_PROPERTIES.HTTPEQUIV,u.TAG_PROPERTIES.PROPERTY,u.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:d(u.TAG_NAMES.NOSCRIPT,[u.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:f(e),scriptTags:d(u.TAG_NAMES.SCRIPT,[u.TAG_PROPERTIES.SRC,u.TAG_PROPERTIES.INNER_HTML],e),styleTags:d(u.TAG_NAMES.STYLE,[u.TAG_PROPERTIES.CSS_TEXT],e),title:T(e),titleAttributes:E(u.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=y,t.warn=b}).call(this,n("yLpj"))}}]);
//# sourceMappingURL=c8f92a76d565066d341360692a4ecb86dceaf1c6-b777e05291cf9012db34.js.map