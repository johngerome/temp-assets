function hasScrolled(){var e=$(this).scrollTop();Math.abs(lastScrollTop-e)<=delta||(e>navbarHeight?$("header").removeClass("nav-down").addClass("nav-up"):$("header").removeClass("nav-up").addClass("nav-down"),lastScrollTop=e)}function clearCurrent(){$(".tabs-menu a").removeClass("current")}!function(){function e(){for(var e=this;-1===e.className.indexOf("nav-menu");)"li"===e.tagName.toLowerCase()&&(-1!==e.className.indexOf("focus")?e.className=e.className.replace(" focus",""):e.className+=" focus"),e=e.parentElement}var t,n,a,r,i;if(t=document.getElementById("site-navigation"),t&&(n=t.getElementsByTagName("button")[0],"undefined"!=typeof n)){if(a=t.getElementsByTagName("ul")[0],"undefined"==typeof a)return void(n.style.display="none");a.setAttribute("aria-expanded","false"),-1===a.className.indexOf("nav-menu")&&(a.className+=" nav-menu"),n.onclick=function(){-1!==t.className.indexOf("toggled")?(t.className=t.className.replace(" toggled",""),n.setAttribute("aria-expanded","false"),a.setAttribute("aria-expanded","false")):(t.className+=" toggled",n.setAttribute("aria-expanded","true"),a.setAttribute("aria-expanded","true"))},r=a.getElementsByTagName("a"),i=a.getElementsByTagName("ul");for(var o=0,s=i.length;s>o;o++)i[o].parentNode.setAttribute("aria-haspopup","true");for(o=0,s=r.length;s>o;o++)r[o].addEventListener("focus",e,!0),r[o].addEventListener("blur",e,!0)}}();var didScroll,lastScrollTop=0,delta=5,navbarHeight=$("header").outerHeight();$(window).scroll(function(e){didScroll=!0}),setInterval(function(){didScroll&&(hasScrolled(),didScroll=!1)},250),function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t():e.transformicons=t()}(this||window,function(){"use strict";var e={},t="tcon-transform",n={transform:["click"],revert:["click"]},a=function(e){return"string"==typeof e?Array.prototype.slice.call(document.querySelectorAll(e)):"undefined"==typeof e||e instanceof Array?e:[e]},r=function(e){return"string"==typeof e?e.toLowerCase().split(" "):e},i=function(e,t,i){var s=(i?"remove":"add")+"EventListener",c=a(e),l=c.length,f={};for(var u in n)f[u]=t&&t[u]?r(t[u]):n[u];for(;l--;)for(var d in f)for(var m=f[d].length;m--;)c[l][s](f[d][m],o)},o=function(t){e.toggle(t.currentTarget)};return e.add=function(t,n){return i(t,n),e},e.remove=function(t,n){return i(t,n,!0),e},e.transform=function(n){return a(n).forEach(function(e){e.classList.add(t)}),e},e.revert=function(n){return a(n).forEach(function(e){e.classList.remove(t)}),e},e.toggle=function(n){return a(n).forEach(function(n){e[n.classList.contains(t)?"revert":"transform"](n)}),e},e}),transformicons.add(".tcon"),$(function(){$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=$(this.hash);if(e=e.length?e:$("[name="+this.hash.slice(1)+"]"),e.length)return $("html,body").animate({scrollTop:e.offset().top},1e3),!1}})}),$(document).ready(function(){$(".tabs-menu a").click(function(e){e.preventDefault(),clearCurrent(),$(this).addClass("current");var t=$(this).attr("href");$(".tab-content").not(t).css("display","none"),$(t).fadeIn()})}),function(e){e.jTab=function(t,n){var a={category:"tab-all",onFoo:function(){}},r=this;r.settings={};var i=e(t),t=t,o=".js-tab-menu a",s=".js-tab-item";r.init=function(){r.settings=e.extend({},a,n),r.click_menu()},r.click_menu=function(){var t=i.find(o);t.click(function(t){t.preventDefault(),c(),e(this).addClass("current"),r.hide_tab_item(),r.show_tab_item(e(this).attr("href"))})},r.hide_tab_item=function(){var e=i.find(s);e.css("display","none")},r.show_tab_item=function(e){var t=e.replace("#","");if("tab-all"==t)var n=i.find(s);else var n=i.find(s+'[data-tab-cat="'+t+'"]');n.fadeIn()};var c=function(e){i.find(o).removeClass("current")};r.init()},e.fn.jTab=function(t){return this.each(function(){if(void 0==e(this).data("jTab")){var n=new e.jTab(this,t);e(this).data("jTab",n)}})}}(jQuery),$('[data-tab="tab"]').jTab();