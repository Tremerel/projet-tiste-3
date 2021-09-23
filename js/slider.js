const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    centeredSlides: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      dynamicBullets: true,
    },

    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });