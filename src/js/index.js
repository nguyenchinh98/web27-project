
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick.min.js";
import $ from "jquery";
import "../css/index.css";
import "../css/global.css";

$(document).ready(function () {
  $(".list-blog").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1500,
    draggable: false,
    infinite: true,
    prevArrow: `<button type='button' class='slick-prev pull-left'><i class="bi bi-arrow-left"></i></button>`,
    nextArrow: `<button type='button' class='slick-next pull-right'><i class="bi bi-arrow-right"></i></button>`,
    dots: true,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          arrows: false,
          draggable: true,
        
        },
      },
    ],
  });
});
