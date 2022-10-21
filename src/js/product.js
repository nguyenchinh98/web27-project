import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import $ from "jquery";
import _ from "lodash";
import "../css/global.css";
import "../css/product.css";
import "./backtop.js";
// import { addToCart } from "./utils";
import {products} from "./db"

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

  $(".product-list").append(
    _.map(products, (p) => {
      const dom = $(product(p));
      dom.find(".btn-cart").on("click", p, addToCart);
      return dom;
    })
  );
});
