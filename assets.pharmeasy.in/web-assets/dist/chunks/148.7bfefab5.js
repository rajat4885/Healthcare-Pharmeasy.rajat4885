(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[148],{"/4QA":function(e,t,n){"use strict";function r(e){return void 0!==e&&"function"==typeof e.then}function i(){var e=this._super.apply(this,arguments),t=arguments[arguments.length-1];return"function"==typeof t&&r(e)&&e.then((function(e){return t(null,e)}),(function(e){return t(e)})),e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if("function"==typeof e.mixin){var t={};this.methods.forEach((function(n){"function"==typeof e[n]&&(t[n]=i)})),e.mixin(t)}},e.exports=t.default},"5+gK":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=s;var r=o(n("T4bp")),i=o(n("kdCj"));function o(e){return e&&e.__esModule?e:{default:e}}function s(){return(0,r.default)(i.default.apply(void 0,arguments))}s.version="2.0.1",e.exports=t.default},"5Yh3":function(e,t,n){"use strict";e.exports=function(e){function t(e){for(var t=0,n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n),t|=0;return r.colors[Math.abs(t)%r.colors.length]}function r(e){var n;function s(){if(s.enabled){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];var o=s,u=Number(new Date),a=u-(n||u);o.diff=a,o.prev=n,o.curr=u,n=u,t[0]=r.coerce(t[0]),"string"!=typeof t[0]&&t.unshift("%O");var c=0;t[0]=t[0].replace(/%([a-zA-Z%])/g,(function(e,n){if("%%"===e)return e;c++;var i=r.formatters[n];if("function"==typeof i){var s=t[c];e=i.call(o,s),t.splice(c,1),c--}return e})),r.formatArgs.call(o,t);var f=o.log||r.log;f.apply(o,t)}}return s.namespace=e,s.enabled=r.enabled(e),s.useColors=r.useColors(),s.color=t(e),s.destroy=i,s.extend=o,"function"==typeof r.init&&r.init(s),r.instances.push(s),s}function i(){var e=r.instances.indexOf(this);return-1!==e&&(r.instances.splice(e,1),!0)}function o(e,t){return r(this.namespace+(void 0===t?":":t)+e)}return r.debug=r,r.default=r,r.coerce=function(e){if(e instanceof Error)return e.stack||e.message;return e},r.disable=function(){r.enable("")},r.enable=function(e){var t;r.save(e),r.names=[],r.skips=[];var n=("string"==typeof e?e:"").split(/[\s,]+/),i=n.length;for(t=0;t<i;t++)n[t]&&("-"===(e=n[t].replace(/\*/g,".*?"))[0]?r.skips.push(new RegExp("^"+e.substr(1)+"$")):r.names.push(new RegExp("^"+e+"$")));for(t=0;t<r.instances.length;t++){var o=r.instances[t];o.enabled=r.enabled(o.namespace)}},r.enabled=function(e){if("*"===e[e.length-1])return!0;var t,n;for(t=0,n=r.skips.length;t<n;t++)if(r.skips[t].test(e))return!1;for(t=0,n=r.names.length;t<n;t++)if(r.names[t].test(e))return!0;return!1},r.humanize=n("FGiv"),Object.keys(e).forEach((function(t){r[t]=e[t]})),r.instances=[],r.names=[],r.skips=[],r.formatters={},r.selectColor=t,r.enable(r.load()),r}},"6gcc":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if("function"==typeof e.mixin){var t={};this.methods.forEach((function(n){"function"==typeof e[n]&&(t[n]=function(){return this._super.apply(this,(0,r.getArguments)(n,arguments))})})),e.mixin(t)}};var r=n("daey");e.exports=t.default},T4bp:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return r.default.mixin(i.default,e),e.init(),e};var r=o(n("bLBa")),i=o(n("oszu"));function o(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},TsJM:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s(n("GQeE"));t.default=function(e){var t=this,n="function"==typeof e.on&&"function"==typeof e.emit,s=e._rubberDuck=i.default.emitter(e);"function"!=typeof e.mixin||n||e.mixin(o.EventEmitter.prototype),e._serviceEvents=Array.isArray(e.events)?e.events.slice():[],s.on("error",(function(t){e.emit("serviceError",t[0])})),(0,r.default)(a).forEach((function(n){var r,i=a[n],o=-1!==e._serviceEvents.indexOf(i);if("function"==typeof e[n]&&!o){var c="after"+((r=n).charAt(0).toUpperCase()+r.substring(1));e._serviceEvents.push(i),s.punch(n,-1),s.on(c,(function(r,o){if(r[0])e.emit("serviceError",r[0]);else{var s=u(n,"after",o),a=Array.isArray(r[1])?r[1]:[r[1]];s.app=t,a.forEach((function(t){return e.emit(i,t,s)}))}}))}}))};var i=s(n("Y9JX")),o=n("fiWp");function s(e){return e&&e.__esModule?e:{default:e}}var u=n("daey").hooks.hookObject,a={create:"created",update:"updated",remove:"removed",patch:"patched"};e.exports=t.default},WeBc:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i=n("rfXi"),o=(r=i)&&r.__esModule?r:{default:r};t.default=function(){var e=[n("/4QA"),n("TsJM"),n("6gcc")];return e.push=function(){var e=[this.length-1,0].concat((0,o.default)(arguments));return this.splice.apply(this,e),this.length},e},e.exports=t.default},e9oK:function(e,t,n){"use strict";(function(r){function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}t.log=function(){var e;return"object"===("undefined"==typeof console?"undefined":i(console))&&console.log&&(e=console).log.apply(e,arguments)},t.formatArgs=function(t){if(t[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+t[0]+(this.useColors?"%c ":" ")+"+"+e.exports.humanize(this.diff),!this.useColors)return;var n="color: "+this.color;t.splice(1,0,n,"color: inherit");var r=0,i=0;t[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(r++,"%c"===e&&(i=r))})),t.splice(i,0,n)},t.save=function(e){try{e?t.storage.setItem("debug",e):t.storage.removeItem("debug")}catch(e){}},t.load=function(){var e;try{e=t.storage.getItem("debug")}catch(e){}!e&&void 0!==r&&"env"in r&&(e=r.env.DEBUG);return e},t.useColors=function(){if("undefined"!=typeof window&&window.process&&("renderer"===window.process.type||window.process.__nwjs))return!0;if("undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage=function(){try{return localStorage}catch(e){}}(),t.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],e.exports=n("5Yh3")(t),e.exports.formatters.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}}}).call(this,n("8oxB"))},"j+g2":function(e,t,n){e.exports=n("5+gK")},kdCj:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e={settings:{},get:function(e){return this.settings[e]},set:function(e,t){return this.settings[e]=t,this},disable:function(e){return this.settings[e]=!1,this},disabled:function(e){return!this.settings[e]},enable:function(e){return this.settings[e]=!0,this},enabled:function(e){return!!this.settings[e]},use:function(){throw new Error("Middleware functions can not be used in the Feathers client")},listen:function(){return{}}};return s.default.mixin(i.EventEmitter.prototype,e),e};var r,i=n("fiWp"),o=n("bLBa"),s=(r=o)&&r.__esModule?r:{default:r};e.exports=t.default},oszu:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=f(n("GQeE")),i=f(n("rfXi")),o=f(n("P2sY")),s=f(n("e9oK")),u=n("daey"),a=f(n("bLBa")),c=f(n("WeBc"));function f(e){return e&&e.__esModule?e:{default:e}}var l=(0,s.default)("feathers:application"),d=["find","get","create","update","patch","remove"],p=a.default.extend({create:null});t.default={init:function(){(0,o.default)(this,{methods:d,mixins:(0,c.default)(),services:{},providers:[],_setup:!1})},service:function(e,t){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e=(0,u.stripSlashes)(e),!t){var i=this.services[e];return void 0===i&&"function"==typeof this.defaultService?this.service(e,this.defaultService(e),r):i}var o=p.extend(t);return l("Registering new service at `"+e+"`"),this.mixins.forEach((function(e){return e.call(n,o)})),"function"==typeof o._setup&&o._setup(this,e),this.providers.forEach((function(t){return t.call(n,e,o,r)})),this._isSetup&&"function"==typeof o.setup&&(l("Setting up service for `"+e+"`"),o.setup(this,e)),this.services[e]=o},use:function(e){var t=void 0,n=(0,i.default)(arguments).slice(1).reduce((function(e,n){if("function"==typeof n)e[t?"after":"before"].push(n);else{if(t)throw new Error("invalid arg passed to app.use");t=n}return e}),{before:[],after:[]}),r=function(e){return e.some((function(e){return t&&"function"==typeof t[e]}))};return r(["handle","set"])||!r(this.methods.concat("setup"))?this._super.apply(this,arguments):(this.service(e,t,{middleware:n}),this)},setup:function(){var e=this;return(0,r.default)(this.services).forEach((function(t){var n=e.services[t];l("Setting up service for `"+t+"`"),"function"==typeof n.setup&&n.setup(e,t)})),this._isSetup=!0,this},configure:function(e){return e.call(this),this},listen:function(){var e=this._super.apply(this,arguments);return this.setup(e),l("Feathers application listening"),e}},e.exports=t.default}}]);