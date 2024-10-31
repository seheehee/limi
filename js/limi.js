$(function () {

  /* 메뉴버튼x로변경 */
  document.querySelector('.btn_menu').addEventListener('click', function() {
    this.classList.toggle('active');
});


       /* 메인메뉴슬라이드 */
    var swiper = new Swiper(".ilmi_visual", {
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
    });

    /* best메뉴슬라이드 */
    var swiper = new Swiper(".menu_area", {
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });
    
    /* 헤더영역픽스 */
 /*    $(document).ready(function() {
        var $header = $('.header');
        var scrollThreshold = 100;

        $(window).on('scroll', function() {
            var scrollTop = $(this).scrollTop();


            if (scrollTop >= scrollThreshold) {
                $header.addClass('fixed');
            } else {
                $header.removeClass('fixed');
            }
        });
    });
 */

     /* 푸터 페밀리사이트메뉴 */
     let $btnFam = $('.f_right > .f_family > button')
     let $subFam = $('.f_right > .f_family > ul')
 
     $btnFam.on('click', function () {
         $subFam.slideToggle(400);
     });

    
    })


