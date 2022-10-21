import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.min.js";
import $ from "jquery";
import _ from "lodash";
import "../css/global.css";
import "../css/cart.css";
import "./backtop.js";

import { products1 } from "./db";

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const deleteItem = (event) => {
  if (confirm("Chắc chắn xóa không?")) {
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