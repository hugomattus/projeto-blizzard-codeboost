"use strict";var slideThumbail=new Swiper(".slide-thumbnail",{slidesPerView:5,direction:"vertical",spaceBetween:20,watchSlideProgress:!0,breakpoints:{320:{direction:"horizontal"},777:{direction:"vertical"}}}),progressSlide=document.querySelector(".js-progress"),slideHero=new Swiper(".slide-principal",{effect:"fade",thumbs:{swiper:slideThumbail},autoplay:{delay:5e3,disableOnInteraction:!1},on:{init:function(){progressSlide.classList.remove("animate"),progressSlide.classList.remove("active"),progressSlide.classList.add("animate"),progressSlide.classList.add("active")},slideChangeTransitionStart:function(){progressSlide.classList.remove("animate"),progressSlide.classList.remove("active"),progressSlide.classList.add("active")},slideChangeTransitionEnd:function(){progressSlide.classList.add("animate")}}}),allFilters=document.querySelectorAll(".js-nav-games li a"),tabPane=document.querySelectorAll(".tab-pane-games"),btnOpenModal=(allFilters.forEach(function(t,n){t.addEventListener("click",function(e){e.preventDefault(),allFilters.forEach(function(e){e.classList.remove("active")}),tabPane.forEach(function(e){e.classList.remove("active")}),tabPane[n].classList.add("active"),t.classList.add("active")})}),document.querySelector(".js-open-modal")),btnCloseModal=document.querySelector(".js-close"),btnMenu=(btnOpenModal.addEventListener("click",function(e){e.preventDefault(),document.documentElement.classList.add("show-modal")}),btnCloseModal.addEventListener("click",function(){document.documentElement.classList.remove("show-modal")}),document.querySelectorAll(".js-btn-menu")),menuSite=document.querySelectorAll(".js-menu"),btnMenuMobile=(btnMenu.forEach(function(t,n){t.addEventListener("click",function(e){e.preventDefault(),menuSite.forEach(function(e){e.classList.remove("active"),e.addEventListener("mouseleave",function(){e.classList.remove("active"),btnMenu.forEach(function(e){e.classList.remove("active")})})}),btnMenu.forEach(function(e){e.classList.remove("active")}),t.classList.add("active"),menuSite[n].classList.add("active")})}),document.getElementById("js-btn-menu-mobile")),overlayMenu=document.querySelector(".js-overlay");function openMenuMobile(){document.documentElement.classList.toggle("menu-opened")}overlayMenu.addEventListener("click",openMenuMobile),btnMenuMobile.addEventListener("click",openMenuMobile);var btnOpenModalMobile=document.getElementById("open-modal-mobile"),btnCloseModalMobile=document.querySelector(".modal-mobile-close");btnOpenModalMobile.addEventListener("click",function(e){e.preventDefault(),document.documentElement.classList.add("show-modal-mobile")}),btnCloseModal.addEventListener("click",function(){document.documentElement.classList.remove("show-modal-mobile")});