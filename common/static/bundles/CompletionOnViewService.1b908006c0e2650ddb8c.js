(()=>{"use strict";var e={20428:e=>{e.exports=window.jQuery}},t={};function i(n){var o=t[n];if(void 0!==o)return o.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,i),r.exports}i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};(()=>{function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,a(n.key),n)}}function r(e,t,i){return t&&o(e.prototype,t),i&&o(e,i),Object.defineProperty(e,"prototype",{writable:!1}),e}function a(t){var i=function(t,i){if("object"!=e(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,i||"default");if("object"!=e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===i?String:Number)(t)}(t,"string");return"symbol"==e(i)?i:i+""}function s(e,t){var i=0;return function(){var n=Date.now();i+t<n&&(i=n,e())}}i.r(n),i.d(n,{markBlocksCompletedOnViewIfNeeded:()=>f});var l=function(){return r((function e(i,n,o){t(this,e),this.el=i,this.viewedAfterMs=n,this.callback=o,this.topSeen=!1,this.bottomSeen=!1,this.seenForMs=0,this.becameVisibleAt=void 0,this.hasBeenViewed=!1}),[{key:"getBoundingRect",value:function(){return this.el.getBoundingClientRect()}},{key:"handleVisible",value:function(){var e=this;this.becameVisibleAt||(this.becameVisibleAt=Date.now(),setTimeout((function(){e.checkIfViewed()}),this.viewedAfterMs-this.seenForMs))}},{key:"handleNotVisible",value:function(){this.becameVisibleAt&&(this.seenForMs=Date.now()-this.becameVisibleAt),this.becameVisibleAt=void 0}},{key:"markTopSeen",value:function(){this.topSeen=!0,this.checkIfViewed()}},{key:"markBottomSeen",value:function(){this.bottomSeen=!0,this.checkIfViewed()}},{key:"getTotalTimeSeen",value:function(){return this.becameVisibleAt?this.seenForMs+(Date.now()-this.becameVisibleAt):this.seenForMs}},{key:"areViewedCriteriaMet",value:function(){return this.topSeen&&this.bottomSeen&&this.getTotalTimeSeen()>=this.viewedAfterMs}},{key:"checkIfViewed",value:function(){this.hasBeenViewed||this.areViewedCriteriaMet()&&(this.hasBeenViewed=!0,this.callback(this.el,{elementHasBeenViewed:this.hasBeenViewed}))}}])}(),u=function(){return r((function e(){t(this,e),this.elementViewings=new Set,this.handlers=[],this.registerDomHandlers()}),[{key:"addElement",value:function(e,t){var i=this;this.elementViewings.add(new l(e,t,(function(e,t){return i.callHandlers(e,t)}))),this.updateVisible()}},{key:"addHandler",value:function(e){this.handlers.push(e)}},{key:"updateVisible",value:function(){this.elementViewings.forEach((function(e){if(!e.hasBeenViewed){var t=Date.now(),i=e.getBoundingRect(),n=!1;i.top>0&&i.top<window.innerHeight&&(e.markTopSeen(t),n=!0),i.bottom>0&&i.bottom<window.innerHeight&&(e.markBottomSeen(t),n=!0),i.top<0&&i.bottom>window.innerHeight&&(n=!0),n?e.handleVisible(t):e.handleNotVisible(t)}}))}},{key:"registerDomHandlers",value:function(){var e=this;window.onscroll=s((function(){return e.updateVisible()}),100),window.onresize=s((function(){return e.updateVisible()}),100),this.updateVisible()}},{key:"callHandlers",value:function(e,t){this.handlers.forEach((function(i){i(e,t)}))}}])}(),c=i(20428),d=new Set;function f(e,t){var i=c(t).find(".xblock-student_view[data-mark-completed-on-view-after-delay]").get();if(i.length>0){var n=new u;i.forEach((function(e){var t=parseInt(e.dataset.markCompletedOnViewAfterDelay,10);t>=0&&n.addElement(e,t)})),n.addHandler((function(t,i){var n=t.dataset.usageId;n&&!d.has(n)&&i.elementHasBeenViewed&&c.ajax({type:"POST",url:e.handlerUrl(t,"publish_completion"),data:JSON.stringify({completion:1})}).then((function(){d.add(n),t.dataset.markCompletedOnViewAfterDelay=0}))}))}}})();var o=window;for(var r in n)o[r]=n[r];n.__esModule&&Object.defineProperty(o,"__esModule",{value:!0})})();