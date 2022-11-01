$(document).ready(function () {
  AOS.init();

  var swiper = new Swiper(".mySwiper", {
    loop: true,
    effect: "fade",
    autoplay: {
      delay: 2500,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var ww = $(window).width();
  media();

  function media() {
    if (ww >= 1200) {
      //풀페이지 플러그인
      new fullpage("#wrap", {
        anchors: [
          "firstPage",
          "secondPage",
          "3rdPage",
          "4rdPage",
          "5rdPage",
          "6rdPage",
        ],
        scrollBar: true,
      });

      //서브메뉴박스
      $(".menu li").mouseenter(function () {
        var result = $(this).attr("data-alt");

        $(".sub-menu").removeClass("active");

        $(`#${result}`).addClass("active");

        $(".sub-menu-box").stop().slideDown().addClass("active");
      });
      //서브메뉴박스에서 마우스리브되야 메뉴가 없어짐
      $(".sub-menu-box").mouseleave(function () {
        $(this).stop().slideUp().removeClass("active");
      });

      $(".inner-gallery").mouseenter(function () {
        var ch = $(this).attr("data-image");
        $(".fade-gallery-photo").css({
          "background-image": `url(${ch})`,
        });
      });

      $(".inner-gallery").mouseleave(function () {
        $(".fade-gallery-photo").css({
          "background-image": "",
        });
      });
    } else {
      $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
          $(".header-area").addClass("active");
          $(".header-logo").addClass("active");
        } else {
          $(".header-area").removeClass("active");
          $(".header-logo").removeClass("active");
        }
      });

      $("#hamburger").click(function () {
        $(this).toggleClass("active");
        $("nav").toggleClass("active");
      });
    }

    $(window).resize(function () {
      ww = $(window).width();
      media();
    });
  }
});
