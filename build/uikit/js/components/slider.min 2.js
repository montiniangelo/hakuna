/*! UIkit 2.27.5 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
!function(t){var e;window.UIkit2&&(e=t(UIkit2)),"function"==typeof define&&define.amd&&define("uikit-slider",["uikit"],function(){return e||t(UIkit2)})}(function(t){"use strict";var e,i,s,n,a={};return t.component("slider",{defaults:{center:!1,threshold:10,infinite:!0,autoplay:!1,autoplayInterval:7e3,pauseOnHover:!0,activecls:"uk-active"},boot:function(){t.ready(function(e){setTimeout(function(){t.$("[data-uk-slider]",e).each(function(){var e=t.$(this);e.data("slider")||t.slider(e,t.Utils.options(e.attr("data-uk-slider")))})},0)})},init:function(){var o=this;this.container=this.element.find(".uk-slider"),this.focus=0,t.$win.on("resize load",t.Utils.debounce(function(){o.update(!0)},100)),this.on("click.uk.slider","[data-uk-slider-item]",function(e){e.preventDefault();var i=t.$(this).attr("data-uk-slider-item");if(o.focus!=i)switch(o.stop(),i){case"next":case"previous":o["next"==i?"next":"previous"]();break;default:o.updateFocus(parseInt(i,10))}}),this.container.on({"touchstart mousedown":function(h){h.originalEvent&&h.originalEvent.touches&&(h=h.originalEvent.touches[0]),h.button&&2==h.button||!o.active||(o.stop(),s=t.$(h.target).is("a")?t.$(h.target):t.$(h.target).parents("a:first"),n=!1,s.length&&s.one("click",function(t){n&&t.preventDefault()}),i=function(t){n=!0,e=o,a={touchx:parseInt(t.pageX,10),dir:1,focus:o.focus,base:o.options.center?"center":"area"},t.originalEvent&&t.originalEvent.touches&&(t=t.originalEvent.touches[0]),e.element.data({"pointer-start":{x:parseInt(t.pageX,10),y:parseInt(t.pageY,10)},"pointer-pos-start":o.pos}),o.container.addClass("uk-drag"),i=!1},i.x=parseInt(h.pageX,10),i.threshold=o.options.threshold)},mouseenter:function(){o.options.pauseOnHover&&(o.hovering=!0)},mouseleave:function(){o.hovering=!1}}),this.update(!0),this.on("display.uk.check",function(){o.element.is(":visible")&&o.update(!0)}),this.element.find("a,img").attr("draggable","false"),this.options.autoplay&&this.start(),t.domObserve(this.element,function(){o.element.children(":not([data-slider-slide])").length&&o.update(!0)})},update:function(e){var i,s,n,a,o=this,h=0,r=0;return this.items=this.container.children().filter(":visible"),this.vp=this.element[0].getBoundingClientRect().width,this.container.css({"min-width":"","min-height":""}),this.items.each(function(e){i=t.$(this).attr("data-slider-slide",e),a=i.css({left:"",width:""})[0].getBoundingClientRect(),s=a.width,n=i.width(),r=Math.max(r,a.height),i.css({left:h,width:s}).data({idx:e,left:h,width:s,cwidth:n,area:h+s,center:h-(o.vp/2-n/2)}),h+=s}),this.container.css({"min-width":h,"min-height":r}),this.options.infinite&&(h<=2*this.vp||this.items.length<5)&&!this.itemsResized?(this.container.children().each(function(t){o.container.append(o.items.eq(t).clone(!0).attr("id",""))}).each(function(t){o.container.append(o.items.eq(t).clone(!0).attr("id",""))}),this.itemsResized=!0,this.update()):(this.cw=h,this.pos=0,this.active=h>=this.vp,this.container.css({"-ms-transform":"","-webkit-transform":"",transform:""}),e&&this.updateFocus(this.focus),void 0)},updatePos:function(t){this.pos=t,this.container.css({"-ms-transform":"translateX("+t+"px)","-webkit-transform":"translateX("+t+"px)",transform:"translateX("+t+"px)"})},updateFocus:function(e,i){if(this.active){i=i||(e>this.focus?1:-1);var s,n,a=this.items.eq(e);if(this.options.infinite&&this.infinite(e,i),this.options.center)this.updatePos(-1*a.data("center")),this.items.filter("."+this.options.activecls).removeClass(this.options.activecls),a.addClass(this.options.activecls);else if(this.options.infinite)this.updatePos(-1*a.data("left"));else{for(s=0,n=e;n<this.items.length;n++)s+=this.items.eq(n).data("width");if(s>this.vp)this.updatePos(-1*a.data("left"));else if(1==i){for(s=0,n=this.items.length-1;n>=0;n--){if(s+=this.items.eq(n).data("width"),s==this.vp){e=n;break}if(s>this.vp){e=n<this.items.length-1?n+1:n;break}}s>this.vp?this.updatePos(-1*(this.container.width()-this.vp)):this.updatePos(-1*this.items.eq(e).data("left"))}}var o=this.items.eq(e).data("left");this.items.removeClass("uk-slide-before uk-slide-after").each(function(i){i!==e&&t.$(this).addClass(t.$(this).data("left")<o?"uk-slide-before":"uk-slide-after")}),this.focus=e,this.trigger("focusitem.uk.slider",[e,this.items.eq(e),this])}},next:function(){var t=this.items[this.focus+1]?this.focus+1:this.options.infinite?0:this.focus;this.updateFocus(t,1)},previous:function(){var t=this.items[this.focus-1]?this.focus-1:this.options.infinite?this.items[this.focus-1]?this.items-1:this.items.length-1:this.focus;this.updateFocus(t,-1)},start:function(){this.stop();var t=this;this.interval=setInterval(function(){t.hovering||t.next()},this.options.autoplayInterval)},stop:function(){this.interval&&clearInterval(this.interval)},infinite:function(t,e){var i,s=this,n=this.items.eq(t),a=t,o=[],h=0;if(1==e){for(i=0;i<this.items.length&&(a!=t&&(h+=this.items.eq(a).data("width"),o.push(this.items.eq(a))),!(h>this.vp));i++)a=a+1==this.items.length?0:a+1;o.length&&o.forEach(function(t){var e=n.data("area");t.css({left:e}).data({left:e,area:e+t.data("width"),center:e-(s.vp/2-t.data("cwidth")/2)}),n=t})}else{for(i=this.items.length-1;i>-1&&(h+=this.items.eq(a).data("width"),a!=t&&o.push(this.items.eq(a)),!(h>this.vp));i--)a=a-1==-1?this.items.length-1:a-1;o.length&&o.forEach(function(t){var e=n.data("left")-t.data("width");t.css({left:e}).data({left:e,area:e+t.data("width"),center:e-(s.vp/2-t.data("cwidth")/2)}),n=t})}}}),t.$doc.on("mousemove.uk.slider touchmove.uk.slider",function(t){if(t.originalEvent&&t.originalEvent.touches&&(t=t.originalEvent.touches[0]),i&&Math.abs(t.pageX-i.x)>i.threshold&&(window.getSelection().toString()?e=i=!1:i(t)),e){var s,n,o,h,r,c,d,u,f,l;if(t.clientX||t.clientY?s=t.clientX:(t.pageX||t.pageY)&&(s=t.pageX-document.body.scrollLeft-document.documentElement.scrollLeft),r=a.focus,n=s-e.element.data("pointer-start").x,o=e.element.data("pointer-pos-start")+n,h=s>e.element.data("pointer-start").x?-1:1,c=e.items.eq(a.focus),1==h)for(d=c.data("left")+Math.abs(n),u=0,f=a.focus;u<e.items.length;u++){if(l=e.items.eq(f),f!=a.focus&&l.data("left")<d&&l.data("area")>d){r=f;break}f=f+1==e.items.length?0:f+1}else for(d=c.data("left")-Math.abs(n),u=0,f=a.focus;u<e.items.length;u++){if(l=e.items.eq(f),f!=a.focus&&l.data("area")<=c.data("left")&&l.data("center")<d){r=f;break}f=f-1==-1?e.items.length-1:f-1}e.options.infinite&&r!=a._focus&&e.infinite(r,h),e.updatePos(o),a.dir=h,a._focus=r,a.touchx=parseInt(t.pageX,10),a.diff=d}}),t.$doc.on("mouseup.uk.slider touchend.uk.slider",function(){if(e){e.container.removeClass("uk-drag"),e.items.eq(a.focus);var t,s,n,o=!1;if(1==a.dir){for(s=0,n=a.focus;s<e.items.length;s++){if(t=e.items.eq(n),n!=a.focus&&t.data("left")>a.diff){o=n;break}n=n+1==e.items.length?0:n+1}e.options.infinite||o||(o=e.items.length)}else{for(s=0,n=a.focus;s<e.items.length;s++){if(t=e.items.eq(n),n!=a.focus&&t.data("left")<a.diff){o=n;break}n=n-1==-1?e.items.length-1:n-1}e.options.infinite||o||(o=0)}e.updateFocus(o!==!1?o:a._focus)}e=i=!1}),t.slider});