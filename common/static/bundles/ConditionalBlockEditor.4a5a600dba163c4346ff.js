(()=>{var t={44158:(t,e,o)=>{var r=o(95891),n=o(20428);(function(){(function(){"use strict";var t,e={};e.Descriptor=((t=function(t){this.element=t,this.update=r.bind(this.update,this)}).prototype.onUpdate=function(t){this.callbacks||(this.callbacks=[]),this.callbacks.push(t)},t.prototype.update=function(){var t,e;t=this.save(),(e=this.callbacks).length,n.each(e,(function(e,o){o(t)}))},t.prototype.save=function(){return{}},t),this.XBlockToXModuleShim=function(t,e,o){var r,i;if(o&&(r=o["xmodule-type"]),r||(r=n(e).data("type")),"None"!==r)try{return i=new window[r](e,t),n(e).hasClass("xmodule_edit")&&n(document).trigger("XModule.loaded.edit",[e,i]),n(e).hasClass("xmodule_display")&&n(document).trigger("XModule.loaded.display",[e,i]),i}catch(t){console.error("Unable to load "+r+": "+t.message)}},this.XModule=e}).call(this)}).call(window),t.exports=window.XModule},17003:()=>{(function(){(function(){var t={}.hasOwnProperty;this.SequenceDescriptor=function(e){function o(){return o.__super__.constructor.apply(this,arguments)}return function(e,o){for(var r in o)t.call(o,r)&&(e[r]=o[r]);function n(){this.constructor=e}n.prototype=o.prototype,e.prototype=new n,e.__super__=o.prototype}(o,XModule.Descriptor),o}()}).call(this)}).call(window)},95891:t=>{"use strict";t.exports=window._},20428:t=>{"use strict";t.exports=window.jQuery}},e={};function o(r){var n=e[r];if(void 0!==n)return n.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,o),i.exports}o(44158);var r=o(17003),n=window;for(var i in r)n[i]=r[i];r.__esModule&&Object.defineProperty(n,"__esModule",{value:!0})})();