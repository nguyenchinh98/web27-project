import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import $ from  "jquery";
import _ from "lodash";
import "../css/global.css";
import "../css/item.css";
import { addToCart } from "./utils";
import "./backtop.js";
import { products1, products2, products3 } from "./db";



$(function(){
    const url = new URL(this.location.href);
    const id = Number(url.searchParams.get("id"));

    const product = _.find(products1, {id});
    const productItemTemplate = $("#productItem").html();
    const template = _.template(productItemTemplate);
    const dom = $(template(product));
    $(".item-product").append(dom)
});

$(function(){
    const url = new URL(this.location.href);
    const id = Number(url.searchParams.get("id"));

    const product2 = _.find(products2, { id });
    const productItemTemplate2 = $("#productItem").html();
    const template2 = _.template(productItemTemplate2);
    const dom2 = $(template2(product2));
    $(".item-product").append(dom2);
});

$(function () {
  const url = new URL(this.location.href);
  const id = Number(url.searchParams.get("id"));

  const product3 = _.find(products3, { id });
  const productItemTemplate3 = $("#productItem").html();
  const template3 = _.template(productItemTemplate3);
  const dom3 = $(template3(product3));
  $(".item-product").append(dom3);
});










