$(function(){

  const header = $('.header');
  const introHeight = $('.intro').innerHeight();
  let scrollOffset = $(window).scrollTop();


{ //  FIXED HEADER
  checkScroll(scrollOffset);

  $(window).on('scroll',function(){
    scrollOffset = $(this).scrollTop();
    checkScroll(scrollOffset)  - 30;
  });

  function checkScroll(scrollOffset){
    if(scrollOffset >= introHeight){
      header.addClass('fixed');
    }else{
      header.removeClass('fixed');
    }
  }
} //  FIXED HEADER!>



{ // MENU NAV TOGGLE
  $('.nav-toggle').on('click', function(event){
    event.preventDefault();
    $('.nav').toggleClass('active');
    $('.nav-toggle').toggleClass('active');
  });
} // MENU NAV TOGGLE!>



{ // SMOOTH SCROLL
  $('[data-scroll]').on('click', function(event){
    event.preventDefault();
    const blockId = $(this).data('scroll');
    const blockOffset = $(blockId).offset().top;

    $('.nav a').removeClass('active');
    $(this).addClass('active');




    $('html, body').animate({
      scrollTop: blockOffset,
    }, 500);
    $('.nav').removeClass('active');
    $('.nav-toggle').removeClass('active');

  });

} // SMOOTH SCROLL!>



{ // COLLAPS

  $("[data-collapse]").on("click", function(event) {
      event.preventDefault();

      let blockId = $(this).data('collapse');

      $(this).toggleClass("active");
  });

} // COLLAPS!>

var mySwiper = new Swiper('.swiper-container', {
  navigation: {
  nextEl: '.reviews_btn_next',
  prevEl: '.reviews_btn_prev',
  },
    speed: 400,
    spaceBetween: 100,
});






});
