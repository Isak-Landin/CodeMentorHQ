(()=>{"use strict";var e={20428:e=>{e.exports=window.jQuery}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};(()=>{r.r(o),r.d(o,{UnenrollmentFactory:()=>b});const e=window.Backbone;var t=r.n(e),n=r(20428);function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},s.apply(this,arguments)}function l(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,u(o.key),o)}}function u(e){var t=function(e,t){if("object"!=i(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=i(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==i(t)?t:t+""}function a(e,t,r){return t=d(t),function(e,t){if(t&&("object"===i(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,c()?Reflect.construct(t,r||[],d(e).constructor):t.apply(e,r))}function c(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(c=function(){return!!e})()}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}var f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);return a(this,t,[s({},{el:".unenroll-modal"},e)])}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(t,e),r=t,o=[{key:"handleTrigger",value:function(e){this.$previouslyFocusedElement=e}},{key:"switchToSlideOne",value:function(){for(var e=document.querySelector(".options"),t=e.children.length-1;t>=0;t-=1)e.appendChild(e.children[Math.trunc(Math.random()*t)]);this.$(".inner-wrapper header").hide(),this.$("#unenroll_form").hide(),this.$(".slide1").removeClass("hidden"),window.trapFocusForAccessibleModal&&window.trapFocusForAccessibleModal(this.$previouslyFocusedElement,window.focusableElementsString,this.closeButtonSelector,this.modalId,this.mainPageSelector)}},{key:"switchToSlideTwo",value:function(){var e=this.$(".reasons_survey input[name='reason']:checked").attr("val"),t=n("#unenroll_course_id").val()+n("#unenroll_course_number").val();"Other"===e&&(e=this.$(".other_text").val()),e&&window.analytics.track("unenrollment_reason.selected",{category:"user-engagement",label:e,displayName:"v1",course_id:t}),this.$(".slide1").addClass("hidden"),this.$(".survey_course_name").text(this.$("#unenroll_course_name").text()),this.$(".slide2").removeClass("hidden"),this.$(".reasons_survey .return_to_dashboard").attr("href",this.urls.dashboard),this.$(".reasons_survey .browse_courses").attr("href",this.urls.browseCourses),window.trapFocusForAccessibleModal&&window.trapFocusForAccessibleModal(this.$previouslyFocusedElement,window.focusableElementsString,this.closeButtonSelector,this.modalId,this.mainPageSelector)}},{key:"unenrollComplete",value:function(e,t){200===t.status?this.isEdx?(this.switchToSlideOne(),this.$(".reasons_survey:first .submit_reasons").click(this.switchToSlideTwo.bind(this))):location.href=this.urls.dashboard:400===t.status?n("#unenroll_error").text(t.responseText).stop().css("display","block"):403===t.status?location.href="".concat(this.urls.signInUser,"?course_id=").concat(encodeURIComponent(n("#unenroll_course_id").val()),"&enrollment_action=unenroll"):n("#unenroll_error").text(gettext("Unable to determine whether we should give you a refund because of System Error. Please try again later.")).stop().css("display","block")}},{key:"startSubmit",value:function(){this.$(".submit").prop("disabled",!0)}},{key:"initialize",value:function(e){var t=this;this.urls=e.urls,this.isEdx=e.isEdx,this.closeButtonSelector=".unenroll-modal .close-modal",this.$closeButton=n(this.closeButtonSelector),this.modalId="#".concat(this.$el.attr("id")),this.mainPageSelector="#dashboard-main",this.triggerSelector=".action-unenroll",n(this.triggerSelector).each((function(e,r){n(r).on("click",t.handleTrigger.bind(n(r)))})),this.$(".submit .submit-button").on("click",this.startSubmit.bind(this)),n("#unenroll_form").on("ajax:complete",this.unenrollComplete.bind(this))}}],o&&l(r.prototype,o),i&&l(r,i),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,o,i}(t().View);const p=f;function b(e){return new p(e)}})();var n=window;for(var i in o)n[i]=o[i];o.__esModule&&Object.defineProperty(n,"__esModule",{value:!0})})();