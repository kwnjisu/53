$(function () {
    setTimeout(function () {
        $(".scroll-icon").removeClass("on");
    }, 3800);
    setInterval(function () {
        $(".scroll-icon").addClass("on");
        setTimeout(function () {
            $(".scroll-icon").removeClass("on");
        }, 3800);
    }, 4000);
});

//jquery for toggle dropdown menus
$(document).ready(function () {
    //toggle sub-menus
    $(".sub-btn").click(function () {
        $(this).next(".sub-menu").slideToggle();
    });

    //toggle more-menus
    $(".more-btn").click(function () {
        $(this).next(".more-menu").slideToggle();
    });
});

//javascript for the responsive navigation menu
var menu = document.querySelector(".menu");
var menuBtn = document.querySelector(".menu-btn");
var closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", () => {
    menu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    menu.classList.remove("active");
});

// 스크롤 탑
const scrollTopBtn = document.querySelector(".scrollToTop-btn");

scrollTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

//  scrollreveal
ScrollReveal({
    reset: true,
    distance: "30px",
    duration: 800,
    delay: 100,
  });
  
  ScrollReveal().reveal(".main-title,.main-content,#learn-more-1", { delay: 400, origin: "bottom", interval: 400 });
  ScrollReveal().reveal(".section-1-title,.section-1-content,.img-1,.img-2,.img-3", { delay: 400, origin: "bottom", interval: 200 });
  ScrollReveal().reveal(".section-2-title img", { delay: 400, origin: "bottom", interval: 100 });
  ScrollReveal().reveal(".main-title h4,.bn-description", { delay: 400, origin: "bottom", interval: 400 });
  ScrollReveal().reveal(".section-3-title h3,.footer-section .logo", { delay: 400, origin: "bottom"});
  