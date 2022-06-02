/*! For license information please see bundle.js.LICENSE.txt */
(()=>{"use strict";var t={426:(t,n,e)=>{e.d(n,{Z:()=>c});var r=e(81),o=e.n(r),i=e(645),a=e.n(i)()(o());a.push([t.id,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;700&display=swap);"]),a.push([t.id,"* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody,\nhtml {\n  height: 100%;\n  width: 100%;\n  color: rgb(24, 40, 58);\n  background-color: lightblue;\n  font-family: 'Montserrat', sans-serif;\n}\n\n.container {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.bottom {\n  height: 100%;\n}\n\n.search-area {\n  background-color: lightcoral;\n  width: 100%;\n  min-height: 50px;\n  padding: 10px;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  margin: 0 auto;\n  box-shadow: 1px 6px 2px rgb(101, 145, 101);\n}\n\np {\n  font-size: 1.2em;\n}\n\ninput {\n  width: 200px;\n  padding: 4px 10px;\n  margin-right: 20px;\n  border-style: none;\n  border-radius: 5px;\n}\n\nbutton {\n  padding: 5px 15px;\n  border-style: none;\n  border-radius: 5px;\n}\n\n#weather-display {\n  background-color: rgba(255, 160, 122, 0.629);\n  min-height: 250px;\n  max-width: 400px;\n  margin: 40px auto;\n  padding: 20px;\n  box-shadow: 5px 10px 20px gray;\n  display: flex;\n  justify-content: space-between;\n}\n\n.right-side {\n  align-self: center;\n}\n\ndiv,\nul,\np {\n  animation: fadeIn 4s;\n}\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n#adv-info {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n}\n\nli {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\n\n#temp {\n  font-size: 60px;\n}\n\n#location::first-letter {\n  text-transform: capitalize;\n}\n\n#location {\n  font-size: 30px;\n}\n\n.day-display {\n  background-color: lightgrey;\n  width: 130px;\n  height: auto;\n  padding: 10px;\n  box-shadow: 5px 10px 20px gray;\n}\n\n.seven-day {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n\n  justify-content: space-around;\n}\n\n@media screen and (max-height: 500px) {\n  .bottom {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n  }\n\n  #weather-display {\n    max-height: 80%;\n    /* margin: auto; */\n    margin-left: 20px;\n  }\n  .day-display {\n    height: 80%;\n    min-height: 300px;\n    margin-right: 10px;\n  }\n  .seven-day {\n    flex-wrap: nowrap;\n    margin-right: 20px;\n    margin-left: 20px;\n  }\n}\n\n@media screen and (max-width: 500px) {\n  html,\n  body {\n    background-color: lightseagreen;\n  }\n\n  .seven-day {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .day-display {\n    width: 300px;\n    width: 80%;\n    margin: 5px 0 0;\n    text-align: center;\n  }\n\n  #weather-display {\n    max-width: 80%;\n  }\n}\n\n.icon {\n  left: 155px;\n  bottom: 160px;\n}\n\n.today-icon {\n  position: relative;\n  height: 120px;\n  bottom: 20px;\n}\n",""]);const c=a},645:t=>{t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e="",r=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),r&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=t(n),r&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(t,e,r,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<t.length;l++){var u=[].concat(t[l]);r&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),e&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=e):u[2]=e),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),n.push(u))}},n}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var n=[];function e(t){for(var e=-1,r=0;r<n.length;r++)if(n[r].identifier===t){e=r;break}return e}function r(t,r){for(var i={},a=[],c=0;c<t.length;c++){var s=t[c],l=r.base?s[0]+r.base:s[0],u=i[l]||0,p="".concat(l," ").concat(u);i[l]=u+1;var d=e(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)n[d].references++,n[d].updater(f);else{var h=o(f,r);r.byIndex=c,n.splice(c,0,{identifier:p,updater:h,references:1})}a.push(p)}return a}function o(t,n){var e=n.domAPI(n);return e.update(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap&&n.supports===t.supports&&n.layer===t.layer)return;e.update(t=n)}else e.remove()}}t.exports=function(t,o){var i=r(t=t||[],o=o||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var c=e(i[a]);n[c].references--}for(var s=r(t,o),l=0;l<i.length;l++){var u=e(i[l]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}i=s}}},569:t=>{var n={};t.exports=function(t,e){var r=function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},216:t=>{t.exports=function(t){var n=document.createElement("style");return t.setAttributes(n,t.attributes),t.insert(n,t.options),n}},565:(t,n,e)=>{t.exports=function(t){var n=e.nc;n&&t.setAttribute("nonce",n)}},795:t=>{t.exports=function(t){var n=t.insertStyleElement(t);return{update:function(e){!function(t,n,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,t,n.options)}(n,t,e)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)}}}},589:t=>{t.exports=function(t,n){if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return t[r](i,i.exports,e),i.exports}e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),e.nc=void 0,(()=>{var t=e(379),n=e.n(t),r=e(795),o=e.n(r),i=e(569),a=e.n(i),c=e(565),s=e.n(c),l=e(216),u=e.n(l),p=e(589),d=e.n(p),f=e(426),h={};h.styleTagTransform=d(),h.setAttributes=s(),h.insert=a().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=u(),n()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;var m=document.querySelector(".search"),y=document.querySelector(".search-btn"),v=(document.getElementById("weather-display"),document.getElementById("location")),g=document.getElementById("temp"),x=document.getElementById("description"),w=(document.getElementById("info"),document.getElementById("adv-info")),b=document.querySelector(".seven-day"),L=document.querySelector(".left-side"),E=document.getElementById("humidity"),T=(document.getElementById("rain-chance"),document.getElementById("wind"));function k(t){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k(t)}function S(){S=function(){return t};var t={},n=Object.prototype,e=n.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",a=r.toStringTag||"@@toStringTag";function c(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{c({},"")}catch(t){c=function(t,n,e){return t[n]=e}}function s(t,n,e,r){var o=n&&n.prototype instanceof p?n:p,i=Object.create(o.prototype),a=new E(r||[]);return i._invoke=function(t,n,e){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return{value:void 0,done:!0}}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=w(a,e);if(c){if(c===u)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===r)throw r="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r="executing";var s=l(t,n,e);if("normal"===s.type){if(r=e.done?"completed":"suspendedYield",s.arg===u)continue;return{value:s.arg,done:e.done}}"throw"===s.type&&(r="completed",e.method="throw",e.arg=s.arg)}}}(t,e,a),i}function l(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var u={};function p(){}function d(){}function f(){}var h={};c(h,o,(function(){return this}));var m=Object.getPrototypeOf,y=m&&m(m(T([])));y&&y!==n&&e.call(y,o)&&(h=y);var v=f.prototype=p.prototype=Object.create(h);function g(t){["next","throw","return"].forEach((function(n){c(t,n,(function(t){return this._invoke(n,t)}))}))}function x(t,n){function r(o,i,a,c){var s=l(t[o],t,i);if("throw"!==s.type){var u=s.arg,p=u.value;return p&&"object"==k(p)&&e.call(p,"__await")?n.resolve(p.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):n.resolve(p).then((function(t){u.value=t,a(u)}),(function(t){return r("throw",t,a,c)}))}c(s.arg)}var o;this._invoke=function(t,e){function i(){return new n((function(n,o){r(t,e,n,o)}))}return o=o?o.then(i,i):i()}}function w(t,n){var e=t.iterator[n.method];if(void 0===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=void 0,w(t,n),"throw"===n.method))return u;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var r=l(e,t.iterator,n.arg);if("throw"===r.type)return n.method="throw",n.arg=r.arg,n.delegate=null,u;var o=r.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,u):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,u)}function b(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function L(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(b,this),this.reset(!0)}function T(t){if(t){var n=t[o];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function n(){for(;++r<t.length;)if(e.call(t,r))return n.value=t[r],n.done=!1,n;return n.value=void 0,n.done=!0,n};return i.next=i}}return{next:j}}function j(){return{value:void 0,done:!0}}return d.prototype=f,c(v,"constructor",f),c(f,"constructor",d),d.displayName=c(f,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===d||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,f):(t.__proto__=f,c(t,a,"GeneratorFunction")),t.prototype=Object.create(v),t},t.awrap=function(t){return{__await:t}},g(x.prototype),c(x.prototype,i,(function(){return this})),t.AsyncIterator=x,t.async=function(n,e,r,o,i){void 0===i&&(i=Promise);var a=new x(s(n,e,r,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},g(v),c(v,a,"Generator"),c(v,o,(function(){return this})),c(v,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var n=[];for(var e in t)n.push(e);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=T,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var n in this)"t"===n.charAt(0)&&e.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(e,r){return a.type="throw",a.arg=t,n.next=e,r&&(n.method="next",n.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=e.call(i,"catchLoc"),s=e.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,n){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=n,i?(this.method="next",this.next=i.finallyLoc,u):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),u},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),L(e),u}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;L(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:T(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=void 0),u}},t}function j(t,n,e,r,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void e(t)}c.done?n(s):Promise.resolve(s).then(r,o)}function M(t){return function(){var n=this,e=arguments;return new Promise((function(r,o){var i=t.apply(n,e);function a(t){j(i,r,o,a,c,"next",t)}function c(t){j(i,r,o,a,c,"throw",t)}a(void 0)}))}}function I(t){b.innerHTML="";for(var n=t.daily,e=1;e<n.length-1;e++){var r=n[e].weather[0].description,o=["Sun","Mon","Tue","Wed","Thur","Fri","Sat"][new Date(1e3*n[e].dt).getDay()],i="".concat(N(n[e].temp.min),"°F"),a="".concat(N(n[e].temp.max),"°F"),c=document.createElement("div");c.classList.add("day-display");var s=document.createElement("h2");s.innerHTML=o;var l=n[e].weather[0].icon,u=document.createElement("img");u.classList.add("icon"),u.src="http://openweathermap.org/img/wn/".concat(l,"@2x.png"),c.append(u);var p=document.createElement("p");p.innerHTML=r;var d=document.createElement("p");d.innerHTML=" min: ".concat(i);var f=document.createElement("p");f.innerHTML="max: ".concat(a),c.append(s),c.append(p),c.append(d),c.append(f),b.append(c)}}function _(t,n){console.log(n),console.log(t),console.log("asdfasdfasdf".concat(t));var e=t.replaceAll("+"," ").split(",",1);console.log(e),v.textContent=e;var r=N(n.current.temp)+"°F";g.innerHTML=r;var o=n.current.weather[0].description;x.innerHTML=o;var i=n.daily[0].temp.min;w.innerHTML+="<li> min: ".concat(N(i),"°F</li>");var a=n.daily[0].temp.max;w.innerHTML+="<li> max: ".concat(N(a),"°F</li>");var c=n.hourly[0].feels_like;w.innerHTML+="<li> feels like: ".concat(N(c),"°F</li>");var s=n.current.weather[0].icon,l=document.querySelector(".today-icon");console.log(s),l.src="http://openweathermap.org/img/wn/".concat(s,"@2x.png"),L.appendChild(l);var u=n.current.humidity;E.innerHTML="humidity: ".concat(u,"%");var p=2.237*n.current.wind_speed;T.innerHTML="wind speed: ".concat(p.toFixed(2)," mph")}function O(t,n,e){return C.apply(this,arguments)}function C(){return(C=M(S().mark((function t(n,e,r){var o,i,a;return S().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o="https://api.openweathermap.org/data/2.5/onecall?lat=".concat(e,"&lon=").concat(r,"&appid=").concat("95e4dc8196d9da275ac4f6db92770898"),t.prev=2,t.next=5,fetch(o);case 5:return i=t.sent,t.next=8,i.json();case 8:a=t.sent,_(n,a),I(a),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(2),console.log("error while looking for weather!",t.t0);case 16:case"end":return t.stop()}}),t,null,[[2,13]])})))).apply(this,arguments)}function F(t){return H.apply(this,arguments)}function H(){return(H=M(S().mark((function t(n){var e,r,o,i,a;return S().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="http://api.openweathermap.org/geo/1.0/direct?q=".concat(n,"&limit=9&appid=").concat("95e4dc8196d9da275ac4f6db92770898"),t.prev=2,t.next=5,fetch(e,{mode:"cors"});case 5:return r=t.sent,t.next=8,r.json();case 8:o=t.sent,i=o[0].lat,a=o[0].lon,O(n,i,a),t.next=18;break;case 14:t.prev=14,t.t0=t.catch(2),alert('enter city in this format: "city, state, country"'),console.log("error getting coordinates!!!!!",t.t0);case 18:case"end":return t.stop()}}),t,null,[[2,14]])})))).apply(this,arguments)}F("morristown, nj, usa");var N=function(t){return"".concat(Math.round(100*(1.8*(t-273)+32)/100))};y.addEventListener("click",(function(){var t;console.log("search clicked"),P(),t=m.value.replaceAll(" ","+"),console.log(t),F(t),m.value=""})),m.addEventListener("keyup",(function(t){t.preventDefault(),13===t.keyCode&&y.click()}));var P=function(){v.textContent="",g.textContent="",x.textContent="",w.textContent=""}})()})();