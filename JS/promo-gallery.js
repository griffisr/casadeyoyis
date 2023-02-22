var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    autoplay: {
      delay: 650000000,
      disableOnInteraction: false
    },
    loop: true
});

$(".swiper-container").hover(function(){
     galleryTop.swiper.stopAutoplay();
}, function(){
     galleryTop.swiper.startAutoplay();
});
