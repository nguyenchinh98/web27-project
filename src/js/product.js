import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import $ from "jquery";
import _ from "lodash";
import "../css/global.css";
import "../css/product.css";
import "./backtop.js";
import { addToCart } from "./utils";
import {products} from "./db"


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


let cart = JSON.parse(localStorage.getItem("cart")) || [];
$(function () {
  const items = _.map(_.cloneDeep(cart), (item) => {
    item.product = _.find(products, { id: item.product });

    return item;
  });

  $(".cart-list").prepend(
    _.map(items, (i) => {
      const itemTemplate = $("#item").html();
      const item = _.template(itemTemplate);
      const dom = $(item(i));
      return dom;
    })
  );
});
