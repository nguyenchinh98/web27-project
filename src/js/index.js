import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick.min.js";
import $ from "jquery";
import _ from "lodash";
import "../css/global.css";
import "../css/index.css";
import "./backtop.js";

import { products1, products2, products3 } from "./db";
// import {addToCart} from "./utils";

const addToCart = (event) => {
  event.preventDefault();
  console.log(event.data);
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const item = _.find(cart, { product: event.data.id });
  if (item) {
    item.quantity += 1;
  } else {
    cart.push({
      product: event.data.id,
      quantity: 1,
    });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Thêm thành công sản phẩm vào giỏ hàng");
};

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

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const deleteItem = (event) => {
  if (confirm("Bạn chắc chắn muốn xóa sản phẩm này khỏi giỏ hàng")) {
    cart = _.filter(cart, (item) => item.product !== event.data.product.id);
    localStorage.setItem("cart", JSON.stringify(cart));
    event.target.closest(".item").remove();
  }
};

const increment = (event) => {
  const product = _.find(cart, { product: event.data.product.id });
  product.quantity += 1;
  const item = $(event.target.closest(".item"));
  item.find(".quantity").text(product.quantity);
  localStorage.setItem("cart", JSON.stringify(cart));
};

const decrement = (event) => {
  const product = _.find(cart, { product: event.data.product.id });
  if (product.quantity === 1) return;
  else product.quantity -= 1;
  const item = $(event.target.closest(".item"));
  item.find(".quantity").text(product.quantity);
  localStorage.setItem("cart", JSON.stringify(cart));
};

$(function () {
  const items = _.map(_.cloneDeep(cart), (item) => {
    item.product = _.find(products1, { id: item.product });
    return item;
  });

  $(".cart-list").prepend(
    _.map(items, (i) => {
      const itemTemplate = $("#item").html();
      const item = _.template(itemTemplate);
      const dom = $(item(i));
      dom.find(".btn-del").on("click", i, deleteItem);
      dom.find(".btn-up").on("click", i, increment);
      dom.find(".btn-down").on("click", i, decrement);
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
