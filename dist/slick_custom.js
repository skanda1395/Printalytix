$(".center").slick({
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  centerMode: true,
  centerPadding: "60px",
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        dots: true,
        arrows: false,
        centerMode: true,
        centerPadding: "5px",
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        dots: true,
        arrows: false,
        centerMode: true,
        centerPadding: "5px",
        slidesToShow: 1,
      },
    },
  ],
});
