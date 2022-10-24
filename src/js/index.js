import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.min.js";
import $ from "jquery";
import _ from "lodash";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick.min.js";

import "../css/global.css";
import "../css/index.css";
import "./backtop.js";

import { products1, products2, products3 } from "./db";
import { addToCart } from "./utils"


$(function () {
  const productTemplate = $("#product").html();
  const product = _.template(productTemplate); // compile

  $(".product-list1").append(
    _.map(products1, (p) => {
      const dom = $(product(p));
      dom.find(".btn-cart").on("click", p, addToCart);
      return dom;
  }));

   $(".product-list2").append(
     _.map(products2, (p) => {
       const dom = $(product(p));
       dom.find(".btn-cart").on("click", p, addToCart);
       return dom;
     })
   );

    $(".product-list3").append(
      _.map(products3, (p) => {
        const dom = $(product(p));
        dom.find(".btn-cart").on("click", p, addToCart);
        return dom;
      })
    );
});





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
