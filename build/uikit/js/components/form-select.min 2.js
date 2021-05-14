/*! UIkit 2.27.5 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
!function(t){var e;window.UIkit2&&(e=t(UIkit2)),"function"==typeof define&&define.amd&&define("uikit-form-select",["uikit"],function(){return e||t(UIkit2)})}(function(t){"use strict";return t.component("formSelect",{defaults:{target:">span:first",activeClass:"uk-active"},boot:function(){t.ready(function(e){t.$("[data-uk-form-select]",e).each(function(){var e=t.$(this);e.data("formSelect")||t.formSelect(e,t.Utils.options(e.attr("data-uk-form-select")))})})},init:function(){var t=this;this.target=this.find(this.options.target),this.select=this.find("select"),this.select.on({change:function(){var e=t.select[0],n=function(){try{"input"===t.options.target?t.target.val(e.options[e.selectedIndex].text):t.target.text(e.options[e.selectedIndex].text)}catch(s){}return t.element[t.select.val()?"addClass":"removeClass"](t.options.activeClass),n};return n()}(),focus:function(){t.target.addClass("uk-focus")},blur:function(){t.target.removeClass("uk-focus")},mouseenter:function(){t.target.addClass("uk-hover")},mouseleave:function(){t.target.removeClass("uk-hover")}}),this.element.data("formSelect",this)}}),t.formSelect});