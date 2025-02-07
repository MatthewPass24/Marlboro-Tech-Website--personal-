var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  $(document).ready(function() {

    $(".image").hover(
      function () {
        $(this).find(".image__overlay").stop().fadeTo(500, 1); // Fade in overlay
        $(this).find(".image__overlay > *").stop().animate({ top: "0px", opacity: 1 }, 500); // Move text up
      },
      function () {
        $(this).find(".image__overlay").stop().fadeTo(500, 0); // Fade out overlay
        $(this).find(".image__overlay > *").stop().animate({ top: "50px", opacity: 0 }, 500); // Move text down
      }
    );
});