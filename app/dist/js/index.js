!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o(o.s=6)}([function(e,t){function o(){var e=document.getElementsByClassName("fadeUp");if(e)for(var t=window.innerHeight>768?200:40,o=window.pageYOffset,n=window.innerHeight,r=0;r<e.length;r++){var i=o+e[r].getBoundingClientRect().top;o+n-t>i?e[r].classList.add("is-show"):o+n<i&&e[r].classList.remove("is-show")}}o(),window.addEventListener("scroll",o)},function(e,t){const o=document.querySelector(".menu__toggler"),n=document.querySelector(".menu");o.addEventListener("click",()=>{o.classList.toggle("active"),n.classList.toggle("active")}),$(window).scroll((function(){$(window).scrollTop()>20?($("#CvBtn1").addClass("none"),$("#CvBtn2").removeClass("none")):($("#CvBtn1").removeClass("none"),$("#CvBtn2").addClass("none"))}))},function(e,t){const o=(e,t=300)=>"none"===window.getComputedStyle(e).display?((e,t=300)=>{e.classList.add("is-open"),e.style.removeProperty("display");let o=window.getComputedStyle(e).display;"none"===o&&(o="block"),e.style.display=o;let n=e.offsetHeight;e.style.overflow="hidden",e.style.height=0,e.style.paddingTop=0,e.style.paddingBottom=0,e.style.marginTop=0,e.style.marginBottom=0,e.offsetHeight,e.style.transitionProperty="height, margin, padding",e.style.transitionDuration=t+"ms",e.style.transitionTimingFunction="ease",e.style.height=n+"px",e.style.removeProperty("padding-top"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-bottom"),setTimeout(()=>{e.style.removeProperty("height"),e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property"),e.style.removeProperty("transition-timing-function")},t)})(e,t):((e,t=300)=>{e.style.height=e.offsetHeight+"px",e.offsetHeight,e.style.transitionProperty="height, margin, padding",e.style.transitionDuration=t+"ms",e.style.transitionTimingFunction="ease",e.style.overflow="hidden",e.style.height=0,e.style.paddingTop=0,e.style.paddingBottom=0,e.style.marginTop=0,e.style.marginBottom=0,setTimeout(()=>{e.style.display="none",e.style.removeProperty("height"),e.style.removeProperty("padding-top"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-bottom"),e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property"),e.style.removeProperty("transition-timing-function"),e.classList.remove("is-open")},t)})(e,t),n=document.querySelectorAll(".js-accordion");Array.prototype.slice.call(n).forEach(e=>{const t=e.querySelectorAll(".js-accordion-trigger");Array.prototype.slice.call(t).forEach(e=>{e.addEventListener("click",()=>{e.classList.toggle("is-active");const t=e.querySelector(".accordion__content");o(t)})})})},function(e,t){for(var o=document.querySelectorAll(".slideConts"),n=[],r=[],i=window.pageYOffset,s=window.innerHeight,l=0;l<o.length;l++)n.push(o[l].getBoundingClientRect());for(l=0;l<n.length;l++)r.push(n[l].top+i);window.addEventListener("resize",(function(){s=window.innerHeight})),window.addEventListener("scroll",(function(){i=window.pageYOffset;for(var e=0;e<o.length;e++)i>r[e]-s+100?o[e].classList.add("show"):o[e].classList.remove("show")})),$(window).on("load",(function(){$(".block").addClass("active")}))},function(e,t){new Swiper(".index__creator__content__container",{loop:!0,centeredSlides:!0,speed:800,autoplay:{delay:5e3},breakpoints:{321:{slidesPerView:3},640:{slidesPerView:4,spaceBetween:40},960:{slidesPerView:8,spaceBetween:40}}});$((function(){var e;$(window).on("load resize",(function(){if($(window).width()<=960){if(e)return;e=new Swiper(".index__flow__container",{speed:800,autoplay:{delay:5e3},loop:!0,pagination:{el:".swiper-pagination",type:"bullets",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev",hideOnClick:!0},scrollbar:{el:".swiper-scrollbar"}})}else e&&(e.destroy(),e=void 0)}))}))},function(e,t){$(window).on("load",(function(){$("#splash").delay(1500).fadeOut("slow"),$("#splash_logo").delay(1200).fadeOut("slow")}))},function(e,t,o){"use strict";o.r(t);o(2),o(3),o(0),o(4),o(1),o(5)}]);