"use strict";function throttle(e,t){var n=Date.now();return function(){n+t-Date.now()<0&&(e(),n=Date.now())}}function callBack(){sections.forEach(function(e){(window.scrollY>=e.offsetTop-window.innerHeight/1.2||window.scrollY>=document.body.clientHeight-window.innerHeight)&&(e.classList.remove("disappear"),"IMG"==e.tagName&&e.classList.add("bounce-in"),"HR"==e.tagName&&e.classList.add("stretch-in"),window.removeEventListener("scroll",throttle,!1))})}var sections=document.querySelectorAll("section:not(#welcome):not(.section-break) *"),menuItems=document.querySelectorAll("#slideout-menu ul li"),hamby=document.querySelector("#hamburger-container label"),menuCheckBox=document.querySelector("#hamburger-container input[type=checkbox]");sections.forEach(function(e){e.offsetTop>=window.innerHeight&&e.classList.add("disappear"),window.addEventListener("scroll",throttle(callBack,50))}),menuItems.forEach(function(e){e.classList.add("slid-out")}),hamby.addEventListener("click",function(){var e=50,t=50;menuItems.forEach(function(e){setTimeout(function(){e.classList.contains("sliding-in")?e.classList.remove("sliding-in"):e.classList.add("sliding-in")},t),t+=50})});
//# sourceMappingURL=./scripts-min.js.map