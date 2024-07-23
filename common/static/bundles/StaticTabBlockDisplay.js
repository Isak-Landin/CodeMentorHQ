/*! For license information please see StaticTabBlockDisplay.js.LICENSE.txt */
(()=>{var t={29500:function(t,e,n){var i,o,r,s,a,u,p,l,c,d,h,f,v,g,m,y,b,E,x,w,P;function _(t){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_(t)}!function(o){var r=Array.prototype.slice;function s(){}w=[n(20428)],i=function(t){if(t){var e="undefined"==typeof console?s:function(t){console.error(t)};return t.bridget=function(n,i){!function(e){e.prototype.option||(e.prototype.option=function(e){t.isPlainObject(e)&&(this.options=t.extend(!0,this.options,e))})}(i),function(n,i){t.fn[n]=function(o){if("string"==typeof o){for(var s=r.call(arguments,1),a=0,u=this.length;a<u;a++){var p=this[a],l=t.data(p,n);if(l)if(t.isFunction(l[o])&&"_"!==o.charAt(0)){var c=l[o].apply(l,s);if(void 0!==c)return c}else e("no such method '"+o+"' for "+n+" instance");else e("cannot call methods on "+n+" prior to initialization; attempted to call '"+o+"'")}return this}return this.each((function(){var e=t.data(this,n);e?(e.option(o),e._init()):(e=new i(this,o),t.data(this,n,e))}))}}(n,i)},t.bridget}},void 0===(P="function"==typeof i?i.apply(e,w):i)||(t.exports=P)}(window),function(t){function e(t){return new RegExp("(^|\\s+)"+t+"(\\s+|$)")}var i,a,u;function p(t,e){(i(t,e)?u:a)(t,e)}"classList"in document.documentElement?(i=function(t,e){return t.classList.contains(e)},a=function(t,e){t.classList.add(e)},u=function(t,e){t.classList.remove(e)}):(i=function(t,n){return e(n).test(t.className)},a=function(t,e){i(t,e)||(t.className=t.className+" "+e)},u=function(t,n){t.className=t.className.replace(e(n)," ")}),"function"==typeof(r={hasClass:i,addClass:a,removeClass:u,toggleClass:p,has:i,add:a,remove:u,toggle:p})?(s={id:"classie/classie",exports:{},loaded:!1},o=r.call(s.exports,n,s.exports,s),s.loaded=!0,void 0===o&&(o=s.exports)):o=r}(window),function(t){var e="Webkit Moz ms Ms O".split(" "),n=document.documentElement.style;function i(t){if(t){if("string"==typeof n[t])return t;var i;t=t.charAt(0).toUpperCase()+t.slice(1);for(var o=0,r=e.length;o<r;o++)if(i=e[o]+t,"string"==typeof n[i])return i}}void 0!==(a=function(){return i}.apply(u={},w=[]))||(a=u)}(window),function(t,e){function n(t){var e=parseFloat(t);return-1===t.indexOf("%")&&!isNaN(e)&&e}var i="undefined"==typeof console?function(){}:function(t){console.error(t)},o=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];p=[a],l=function(e){var r,s,a,u=!1;function p(e,n){if(t.getComputedStyle||-1===n.indexOf("%"))return n;var i=e.style,o=i.left,r=e.runtimeStyle,s=r&&r.left;return s&&(r.left=e.currentStyle.left),i.left=n,n=i.pixelLeft,i.left=o,s&&(r.left=s),n}return function(l){if(function(){if(!u){u=!0;var o,p=t.getComputedStyle;if(o=p?function(t){return p(t,null)}:function(t){return t.currentStyle},r=function(t){var e=o(t);return e||i("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),e},s=e("boxSizing")){var l=document.createElement("div");l.style.width="200px",l.style.padding="1px 2px 3px 4px",l.style.borderStyle="solid",l.style.borderWidth="1px 2px 3px 4px",l.style[s]="border-box";var c=document.body||document.documentElement;c.appendChild(l);var d=r(l);a=200===n(d.width),c.removeChild(l)}}}(),"string"==typeof l&&(l=document.querySelector(l)),l&&"object"===_(l)&&l.nodeType){var c=r(l);if("none"===c.display)return function(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0,n=o.length;e<n;e++)t[o[e]]=0;return t}();var d={};d.width=l.offsetWidth,d.height=l.offsetHeight;for(var h=d.isBorderBox=!(!s||!c[s]||"border-box"!==c[s]),f=0,v=o.length;f<v;f++){var g=o[f],m=c[g];m=p(l,m);var y=parseFloat(m);d[g]=isNaN(y)?0:y}var b=d.paddingLeft+d.paddingRight,E=d.paddingTop+d.paddingBottom,x=d.marginLeft+d.marginRight,w=d.marginTop+d.marginBottom,P=d.borderLeftWidth+d.borderRightWidth,S=d.borderTopWidth+d.borderBottomWidth,M=h&&a,L=n(c.width);!1!==L&&(d.width=L+(M?0:b+P));var D=n(c.height);return!1!==D&&(d.height=D+(M?0:E+S)),d.innerWidth=d.width-(b+P),d.innerHeight=d.height-(E+S),d.outerWidth=d.width+x,d.outerHeight=d.height+w,d}}},"function"==typeof l?void 0===(d=l.apply(c={},p))&&(d=c):d=l}(window),function(t){var e=document.documentElement,i=function(){};function o(e){var n=t.event;return n.target=n.target||n.srcElement||e,n}e.addEventListener?i=function(t,e,n){t.addEventListener(e,n,!1)}:e.attachEvent&&(i=function(t,e,n){t[e+n]=n.handleEvent?function(){var e=o(t);n.handleEvent.call(n,e)}:function(){var e=o(t);n.call(t,e)},t.attachEvent("on"+e,t[e+n])});var r=function(){};e.removeEventListener?r=function(t,e,n){t.removeEventListener(e,n,!1)}:e.detachEvent&&(r=function(t,e,n){t.detachEvent("on"+e,t[e+n]);try{delete t[e+n]}catch(i){t[e+n]=void 0}}),"function"==typeof(f={bind:i,unbind:r})?(v={id:"eventie/eventie",exports:{},loaded:!1},h=f.call(v.exports,n,v.exports,v),v.loaded=!0,void 0===h&&(h=v.exports)):h=f}(window),function(){function t(){}var e=t.prototype,n=this,i=n.EventEmitter;function o(t,e){for(var n=t.length;n--;)if(t[n].listener===e)return n;return-1}function r(t){return function(){return this[t].apply(this,arguments)}}e.getListeners=function(t){var e,n,i=this._getEvents();if(t instanceof RegExp)for(n in e={},i)i.hasOwnProperty(n)&&t.test(n)&&(e[n]=i[n]);else e=i[t]||(i[t]=[]);return e},e.flattenListeners=function(t){var e,n=[];for(e=0;e<t.length;e+=1)n.push(t[e].listener);return n},e.getListenersAsObject=function(t){var e,n=this.getListeners(t);return n instanceof Array&&((e={})[t]=n),e||n},e.addListener=function(t,e){var n,i=this.getListenersAsObject(t),r="object"===_(e);for(n in i)i.hasOwnProperty(n)&&-1===o(i[n],e)&&i[n].push(r?e:{listener:e,once:!1});return this},e.on=r("addListener"),e.addOnceListener=function(t,e){return this.addListener(t,{listener:e,once:!0})},e.once=r("addOnceListener"),e.defineEvent=function(t){return this.getListeners(t),this},e.defineEvents=function(t){for(var e=0;e<t.length;e+=1)this.defineEvent(t[e]);return this},e.removeListener=function(t,e){var n,i,r=this.getListenersAsObject(t);for(i in r)r.hasOwnProperty(i)&&-1!==(n=o(r[i],e))&&r[i].splice(n,1);return this},e.off=r("removeListener"),e.addListeners=function(t,e){return this.manipulateListeners(!1,t,e)},e.removeListeners=function(t,e){return this.manipulateListeners(!0,t,e)},e.manipulateListeners=function(t,e,n){var i,o,r=t?this.removeListener:this.addListener,s=t?this.removeListeners:this.addListeners;if("object"!==_(e)||e instanceof RegExp)for(i=n.length;i--;)r.call(this,e,n[i]);else for(i in e)e.hasOwnProperty(i)&&(o=e[i])&&("function"==typeof o?r.call(this,i,o):s.call(this,i,o));return this},e.removeEvent=function(t){var e,n=_(t),i=this._getEvents();if("string"===n)delete i[t];else if(t instanceof RegExp)for(e in i)i.hasOwnProperty(e)&&t.test(e)&&delete i[e];else delete this._events;return this},e.removeAllListeners=r("removeEvent"),e.emitEvent=function(t,e){var n,i,o,r=this.getListenersAsObject(t);for(o in r)if(r.hasOwnProperty(o))for(i=r[o].length;i--;)!0===(n=r[o][i]).once&&this.removeListener(t,n.listener),n.listener.apply(this,e||[])===this._getOnceReturnValue()&&this.removeListener(t,n.listener);return this},e.trigger=r("emitEvent"),e.emit=function(t){var e=Array.prototype.slice.call(arguments,1);return this.emitEvent(t,e)},e.setOnceReturnValue=function(t){return this._onceReturnValue=t,this},e._getOnceReturnValue=function(){return!this.hasOwnProperty("_onceReturnValue")||this._onceReturnValue},e._getEvents=function(){return this._events||(this._events={})},t.noConflict=function(){return n.EventEmitter=i,t},void 0!==(g=function(){return t}.apply(m={},w=[]))||(g=m)}.call(this),function(t,e){y=function(e,n){return function(t,e,n){function i(){}function o(){}o.prototype=new e,o.prototype.bindStartEvent=function(t){this._bindStartEvent(t,!0)},o.prototype.unbindStartEvent=function(t){this._bindStartEvent(t,!1)},o.prototype._bindStartEvent=function(e,i){var o=(i=void 0===i||!!i)?"bind":"unbind";t.navigator.pointerEnabled?n[o](e,"pointerdown",this):t.navigator.msPointerEnabled?n[o](e,"MSPointerDown",this):(n[o](e,"mousedown",this),n[o](e,"touchstart",this))},o.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},o.prototype.getTouch=function(t){for(var e=0,n=t.length;e<n;e++){var i=t[e];if(i.identifier==this.pointerIdentifier)return i}},o.prototype.onmousedown=function(t){var e=t.button;e&&0!==e&&1!==e||this._pointerDown(t,t)},o.prototype.ontouchstart=function(t){this._pointerDown(t,t.changedTouches[0])},o.prototype.onMSPointerDown=o.prototype.onpointerdown=function(t){this._pointerDown(t,t)},o.prototype._pointerDown=function(t,e){this.isPointerDown||(this.isPointerDown=!0,this.pointerIdentifier=void 0!==e.pointerId?e.pointerId:e.identifier,this.pointerDown(t,e))},o.prototype.pointerDown=function(t,e){this._bindPostStartEvents(t),this.emitEvent("pointerDown",[t,e])};var r={mousedown:["mousemove","mouseup"],touchstart:["touchmove","touchend","touchcancel"],pointerdown:["pointermove","pointerup","pointercancel"],MSPointerDown:["MSPointerMove","MSPointerUp","MSPointerCancel"]};return o.prototype._bindPostStartEvents=function(e){if(e){for(var i=r[e.type],o=e.preventDefault?t:document,s=0,a=i.length;s<a;s++){var u=i[s];n.bind(o,u,this)}this._boundPointerEvents={events:i,node:o}}},o.prototype._unbindPostStartEvents=function(){var t=this._boundPointerEvents;if(t&&t.events){for(var e=0,i=t.events.length;e<i;e++){var o=t.events[e];n.unbind(t.node,o,this)}delete this._boundPointerEvents}},o.prototype.onmousemove=function(t){this._pointerMove(t,t)},o.prototype.onMSPointerMove=o.prototype.onpointermove=function(t){t.pointerId==this.pointerIdentifier&&this._pointerMove(t,t)},o.prototype.ontouchmove=function(t){var e=this.getTouch(t.changedTouches);e&&this._pointerMove(t,e)},o.prototype._pointerMove=function(t,e){this.pointerMove(t,e)},o.prototype.pointerMove=function(t,e){this.emitEvent("pointerMove",[t,e])},o.prototype.onmouseup=function(t){this._pointerUp(t,t)},o.prototype.onMSPointerUp=o.prototype.onpointerup=function(t){t.pointerId==this.pointerIdentifier&&this._pointerUp(t,t)},o.prototype.ontouchend=function(t){var e=this.getTouch(t.changedTouches);e&&this._pointerUp(t,e)},o.prototype._pointerUp=function(t,e){this._pointerDone(),this.pointerUp(t,e)},o.prototype.pointerUp=function(t,e){this.emitEvent("pointerUp",[t,e])},o.prototype._pointerDone=function(){this.isPointerDown=!1,delete this.pointerIdentifier,this._unbindPostStartEvents(),this.pointerDone()},o.prototype.pointerDone=i,o.prototype.onMSPointerCancel=o.prototype.onpointercancel=function(t){t.pointerId==this.pointerIdentifier&&this._pointerCancel(t,t)},o.prototype.ontouchcancel=function(t){var e=this.getTouch(t.changedTouches);e&&this._pointerCancel(t,e)},o.prototype._pointerCancel=function(t,e){this._pointerDone(),this.pointerCancel(t,e)},o.prototype.pointerCancel=function(t,e){this.emitEvent("pointerCancel",[t,e])},o.getPointerPoint=function(t){return{x:void 0!==t.pageX?t.pageX:t.clientX,y:void 0!==t.pageY?t.pageY:t.clientY}},o}(t,e,n)}.apply(b={},w=[g,h]),void 0!==y||(y=b)}(window),function(t,e){E=function(e,n){return function(t,e,n){function i(){}function o(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function r(t){for(;t!=document.body;)if("A"==(t=t.parentNode).nodeName)return t}function s(){}s.prototype=new n,s.prototype.bindHandles=function(){this._bindHandles(!0)},s.prototype.unbindHandles=function(){this._bindHandles(!1)};var a=t.navigator;function u(){return!1}s.prototype._bindHandles=function(t){var n;t=void 0===t||!!t,n=a.pointerEnabled?function(e){e.style.touchAction=t?"none":""}:a.msPointerEnabled?function(e){e.style.msTouchAction=t?"none":""}:function(){t&&p(s)};for(var i=t?"bind":"unbind",o=0,r=this.handles.length;o<r;o++){var s=this.handles[o];this._bindStartEvent(s,t),n(s),e[i](s,"click",this)}};var p="attachEvent"in document.documentElement?function(t){"IMG"==t.nodeName&&(t.ondragstart=u);for(var e=t.querySelectorAll("img"),n=0,i=e.length;n<i;n++){e[n].ondragstart=u}}:i,l=s.allowTouchstartNodes={INPUT:!0,A:!0,BUTTON:!0,SELECT:!0};return s.prototype.pointerDown=function(t,e){this._dragPointerDown(t,e);var n=document.activeElement;n&&n.blur&&n.blur(),this._bindPostStartEvents(t),this.emitEvent("pointerDown",[t,e])},s.prototype._dragPointerDown=function(t,e){this.pointerDownPoint=n.getPointerPoint(e);var i=t.target.nodeName;"touchstart"==t.type&&(l[i]||r(t.target))||"SELECT"==i||o(t)},s.prototype.pointerMove=function(t,e){var n=this._dragPointerMove(t,e);this.emitEvent("pointerMove",[t,e,n]),this._dragMove(t,e,n)},s.prototype._dragPointerMove=function(t,e){var i=n.getPointerPoint(e),o={x:i.x-this.pointerDownPoint.x,y:i.y-this.pointerDownPoint.y};return!this.isDragging&&this.hasDragStarted(o)&&this._dragStart(t,e),o},s.prototype.hasDragStarted=function(t){return Math.abs(t.x)>3||Math.abs(t.y)>3},s.prototype.pointerUp=function(t,e){this.emitEvent("pointerUp",[t,e]),this._dragPointerUp(t,e)},s.prototype._dragPointerUp=function(t,e){this.isDragging?this._dragEnd(t,e):this._staticClick(t,e)},s.prototype._dragStart=function(t,e){this.isDragging=!0,this.dragStartPoint=s.getPointerPoint(e),this.isPreventingClicks=!0,this.dragStart(t,e)},s.prototype.dragStart=function(t,e){this.emitEvent("dragStart",[t,e])},s.prototype._dragMove=function(t,e,n){this.isDragging&&this.dragMove(t,e,n)},s.prototype.dragMove=function(t,e,n){this.emitEvent("dragMove",[t,e,n])},s.prototype._dragEnd=function(t,e){this.isDragging=!1;var n=this;setTimeout((function(){delete n.isPreventingClicks})),this.dragEnd(t,e)},s.prototype.dragEnd=function(t,e){this.emitEvent("dragEnd",[t,e])},s.prototype.onclick=function(t){this.isPreventingClicks&&o(t)},s.prototype._staticClick=function(t,e){"INPUT"==t.target.nodeName&&"text"==t.target.type&&t.target.focus(),this.staticClick(t,e)},s.prototype.staticClick=function(t,e){this.emitEvent("staticClick",[t,e])},s.getPointerPoint=function(t){return{x:void 0!==t.pageX?t.pageX:t.clientX,y:void 0!==t.pageY?t.pageY:t.clientY}},s.getPointerPoint=n.getPointerPoint,s}(t,e,n)}.apply(x={},w=[h,y]),void 0!==E||(E=x)}(window),function(n,i){P=function(t,e,i,o){return function(t,e,n,i,o){var r=t.document;function s(){}function a(t,e){for(var n in e)t[n]=e[n];return t}for(var u,p=r.defaultView,l=p&&p.getComputedStyle?function(t){return p.getComputedStyle(t,null)}:function(t){return t.currentStyle},c="object"==("undefined"==typeof HTMLElement?"undefined":_(HTMLElement))?function(t){return t instanceof HTMLElement}:function(t){return t&&"object"==_(t)&&1==t.nodeType&&"string"==typeof t.nodeName},d=0,h="webkit moz ms o".split(" "),f=t.requestAnimationFrame,v=t.cancelAnimationFrame,g=0;g<h.length&&(!f||!v);g++)u=h[g],f=f||t[u+"RequestAnimationFrame"],v=v||t[u+"CancelAnimationFrame"]||t[u+"CancelRequestAnimationFrame"];f&&v||(f=function(e){var n=(new Date).getTime(),i=Math.max(0,16-(n-d)),o=t.setTimeout((function(){e(n+i)}),i);return d=n+i,o},v=function(e){t.clearTimeout(e)});var m=n("transform"),y=!!n("perspective"),b=t.jQuery;function E(t,e){this.element="string"==typeof t?r.querySelector(t):t,b&&(this.$element=b(this.element)),this.options=a({},this.constructor.defaults),this.option(e),this._create()}function x(t,e,n){return n=n||"round",e?Math[n](t/e)*e:t}a(E.prototype,o.prototype),E.defaults={},E.prototype.option=function(t){a(this.options,t)},E.prototype._create=function(){this.position={},this._getPosition(),this.startPoint={x:0,y:0},this.dragPoint={x:0,y:0},this.startPosition=a({},this.position);var t=l(this.element);"relative"!=t.position&&"absolute"!=t.position&&(this.element.style.position="relative"),this.enable(),this.setHandles()},E.prototype.setHandles=function(){this.handles=this.options.handle?this.element.querySelectorAll(this.options.handle):[this.element],this.bindHandles()},E.prototype.dispatchEvent=function(e,n,i){var o=[n].concat(i);this.emitEvent(e,o);var r=t.jQuery;if(r&&this.$element)if(n){var s=r.Event(n);s.type=e,this.$element.trigger(s,i)}else this.$element.trigger(e,i)},E.prototype._getPosition=function(){var t=l(this.element),e=parseInt(t.left,10),n=parseInt(t.top,10);this.position.x=isNaN(e)?0:e,this.position.y=isNaN(n)?0:n,this._addTransformPosition(t)},E.prototype._addTransformPosition=function(t){if(m){var e=t[m];if(0===e.indexOf("matrix")){var n=e.split(","),i=0===e.indexOf("matrix3d")?12:4,o=parseInt(n[i],10),r=parseInt(n[i+1],10);this.position.x+=o,this.position.y+=r}}},E.prototype.pointerDown=function(t,n){this._dragPointerDown(t,n);var i=r.activeElement;i&&i.blur&&i.blur(),this._bindPostStartEvents(t),e.add(this.element,"is-pointer-down"),this.dispatchEvent("pointerDown",t,[n])},E.prototype.pointerMove=function(t,e){var n=this._dragPointerMove(t,e);this.dispatchEvent("pointerMove",t,[e,n]),this._dragMove(t,e,n)},E.prototype.dragStart=function(t,n){this.isEnabled&&(this._getPosition(),this.measureContainment(),this.startPosition.x=this.position.x,this.startPosition.y=this.position.y,this.setLeftTop(),this.dragPoint.x=0,this.dragPoint.y=0,this.isDragging=!0,e.add(this.element,"is-dragging"),this.dispatchEvent("dragStart",t,[n]),this.animate())},E.prototype.measureContainment=function(){var t=this.options.containment;if(t){this.size=i(this.element);var e=this.element.getBoundingClientRect(),n=c(t)?t:"string"==typeof t?r.querySelector(t):this.element.parentNode;this.containerSize=i(n);var o=n.getBoundingClientRect();this.relativeStartPosition={x:e.left-o.left,y:e.top-o.top}}},E.prototype.dragMove=function(t,e,n){if(this.isEnabled){var i=n.x,o=n.y,r=this.options.grid,s=r&&r[0],a=r&&r[1];i=x(i,s),o=x(o,a),i=this.containDrag("x",i,s),o=this.containDrag("y",o,a),i="y"==this.options.axis?0:i,o="x"==this.options.axis?0:o,this.position.x=this.startPosition.x+i,this.position.y=this.startPosition.y+o,this.dragPoint.x=i,this.dragPoint.y=o,this.dispatchEvent("dragMove",t,[e,n])}},E.prototype.containDrag=function(t,e,n){if(!this.options.containment)return e;var i="x"==t?"width":"height",o=this.relativeStartPosition[t],r=x(-o,n,"ceil"),s=this.containerSize[i]-o-this.size[i];return s=x(s,n,"floor"),Math.min(s,Math.max(r,e))},E.prototype.pointerUp=function(t,n){e.remove(this.element,"is-pointer-down"),this.dispatchEvent("pointerUp",t,[n]),this._dragPointerUp(t,n)},E.prototype.dragEnd=function(t,n){this.isEnabled&&(this.isDragging=!1,m&&(this.element.style[m]="",this.setLeftTop()),e.remove(this.element,"is-dragging"),this.dispatchEvent("dragEnd",t,[n]))},E.prototype.animate=function(){if(this.isDragging){this.positionDrag();var t=this;f((function(){t.animate()}))}};var w=y?function(t,e){return"translate3d( "+t+"px, "+e+"px, 0)"}:function(t,e){return"translate( "+t+"px, "+e+"px)"};E.prototype.setLeftTop=function(){this.element.style.left=this.position.x+"px",this.element.style.top=this.position.y+"px"},E.prototype.positionDrag=m?function(){this.element.style[m]=w(this.dragPoint.x,this.dragPoint.y)}:E.prototype.setLeftTop,E.prototype.staticClick=function(t,e){this.dispatchEvent("staticClick",t,[e])},E.prototype.enable=function(){this.isEnabled=!0},E.prototype.disable=function(){this.isEnabled=!1,this.isDragging&&this.dragEnd()},E.prototype.destroy=function(){this.disable(),m&&(this.element.style[m]=""),this.element.style.left="",this.element.style.top="",this.element.style.position="",this.unbindHandles(),this.$element&&this.$element.removeData("draggabilly")},E.prototype._init=s,b&&b.bridget&&b.bridget("draggabilly",E);return E}(n,t,e,i,o)}.apply(e,w=[o,a,d,E]),void 0===P||(t.exports=P)}(window)},23844:function(t,e,n){var i,o;(function(r){"use strict";i=[n(95891),n(20428),n(2648)],o=function(t,e,n){var i,o,r,s,a,u,p,l;function c(t){this.text=t}return c.prototype.valueOf=function(){return this.text},c.prototype.toString=function(){return this.text},r=function(e,i){var r=n.interpolate(o(e).toString(),t.mapObject(i,o));return a(r)},s=function(){var t,e="",n=arguments.length;for(t=0;t<n;t+=1)e+=o(arguments[t]);return a(e)},u=function(e,o){return function(r){var s=t.extend({HtmlUtils:i,StringUtils:n},r||{});return a(t.template(e,o)(s))}},p=function(t,n){return e(t).html(o(n).toString())},l=function(t,n){return e(t).prepend(o(n).toString())},i={append:function(t,n){return e(t).append(o(n).toString())},ensureHtml:o=function(e){return e instanceof c?e:a(t.escape(e))},HTML:a=function(t){return new c(t)},HtmlSnippet:c,interpolateHtml:r,joinHtml:s,prepend:l,setHtml:p,template:u}}.apply(e,i),void 0===o||(t.exports=o)}).call(this,n.amdD)},2648:function(t,e,n){var i;(function(n){"use strict";void 0===(i=function(){return{interpolate:function(t,e){return t.replace(/{\w+}/g,(function(t){var n=t.slice(1,-1);return String(e[n])}))}}}.apply(e,[]))||(t.exports=i)}).call(this,n.amdD)},44158:(t,e,n)=>{var i=n(95891),o=n(20428);(function(){(function(){"use strict";var t,e={};e.Descriptor=((t=function(t){this.element=t,this.update=i.bind(this.update,this)}).prototype.onUpdate=function(t){this.callbacks||(this.callbacks=[]),this.callbacks.push(t)},t.prototype.update=function(){var t,e;t=this.save(),(e=this.callbacks).length,o.each(e,(function(e,n){n(t)}))},t.prototype.save=function(){return{}},t),this.XBlockToXModuleShim=function(t,e,n){var i,r;if(n&&(i=n["xmodule-type"]),i||(i=o(e).data("type")),"None"!==i)try{return r=new window[i](e,t),o(e).hasClass("xmodule_edit")&&o(document).trigger("XModule.loaded.edit",[e,r]),o(e).hasClass("xmodule_display")&&o(document).trigger("XModule.loaded.display",[e,r]),r}catch(t){console.error("Unable to load "+i+": "+t.message)}},this.XModule=e}).call(this)}).call(window),t.exports=window.XModule},65405:(t,e,n)=>{var i=n(20428),o=n(23844);(function(){(function(t){"use strict";return void(this.Collapsible={setCollapsibles:function(t){'<a href="#" class="full full-top">See full output</a>','<a href="#" class="full full-bottom">See full output</a>',t.find(".longform").hide(),t.find(".shortform").append('<a href="#" class="full full-top">See full output</a>','<a href="#" class="full full-bottom">See full output</a>'),t.find(".shortform-custom").each((function(t,e){var n,r;r=i(e).data("open-text"),n=i(e).data("close-text"),o.append(i(e),o.joinHtml(o.HTML("<a href='#' class='full-custom'>"),gettext(r),o.HTML("</a>"))),i(e).find(".full-custom").click((function(t){Collapsible.toggleFull(t,r,n)}))})),t.find(".collapsible header + section").hide(),t.find(".full").click((function(t){Collapsible.toggleFull(t,"See full output","Hide output")})),t.find(".collapsible header a").click(Collapsible.toggleHint)},toggleFull:function(t,e,n){var o,r,s;t.preventDefault(),(s=i(t.target).parent()).siblings().slideToggle(),s.parent().toggleClass("open"),r=i(t.target).text()===e?n:e;o=i(t.target).hasClass("full")?s.find(".full"):i(t.target);o.text(r)},toggleHint:function(t){t.preventDefault(),i(t.target).parent().siblings().slideToggle(),i(t.target).parent().parent().toggleClass("open")}})}).call(this)}).call(window)},10781:(t,e,n)=>{var i=n(20428);(function(){(function(){this.HTMLModule=function(){function t(t){this.element=t,this.el=i(this.element),JavascriptLoader.executeModuleScripts(this.el),Collapsible.setCollapsibles(this.el),"undefined"!=typeof MathJax&&null!==MathJax&&MathJax.Hub.Queue(["Typeset",MathJax.Hub,this.el[0]]),"undefined"!=typeof setupFullScreenModal&&null!==setupFullScreenModal&&setupFullScreenModal()}return t.prototype.$=function(t){return i(t,this.el)},t}()}).call(this)}).call(window)},33045:(t,e,n)=>{n(20428),n(95891);(function(){}).call(window)},31570:(t,e,n)=>{var i=n(20428);(function(){(function(){"use strict";this.JavascriptLoader=function(){function t(){}return t.executeModuleScripts=function(t,e){var n,o,r,s,a;return e||(e=null),0===(a=t.find(".script_placeholder")).length?(null!==e&&e(),[]):(o=function(){var t,e,n;for(n=[],t=1,e=a.length;e>=1?t<=e:t>=e;e>=1?++t:--t)n.push(!1);return n}(),n=!1,r=function(t){return function(){var i,r,s;for(i=!0,o[t]=!0,r=0,s=o.length;r<s;r++)if(!o[r]){i=!1;break}if(i&&!n&&(n=!0,null!==e))return e()}},s={},a.each((function(t,e){var n,o;return(o=i(e).attr("data-src"))in s?r(t)():(s[o]=!0,(n=document.createElement("script")).setAttribute("src",o),n.setAttribute("type","text/javascript"),n.onload=r(t),i("head")[0].appendChild(n)),i(e).remove()})))},t}()}).call(this)}).call(window)},95891:t=>{"use strict";t.exports=window._},20428:t=>{"use strict";t.exports=window.jQuery}},e={};function n(i){var o=e[i];if(void 0!==o)return o.exports;var r=e[i]={exports:{}};return t[i].call(r.exports,r,r.exports,n),r.exports}n.amdD=function(){throw new Error("define cannot be used indirect")},n(44158),n(10781),n(31570),n(65405),n(33045);var i=n(29500),o=window;for(var r in i)o[r]=i[r];i.__esModule&&Object.defineProperty(o,"__esModule",{value:!0})})();