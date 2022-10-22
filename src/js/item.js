import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import $ from  "jquery";
import _ from "lodash";
import "../css/global.css";
import "../css/item.css";
import "./backtop.js";
import { products1, products2, products3, products} from "./db";
import { addToCart} from "./utils";



$(function(){
    const url = new URL(this.location.href);
    const id = Number(url.searchParams.get("id"));

    const product = _.find(products1, {id});
    const productItemTemplate = $("#productItem").html();
    const template = _.template(productItemTemplate);
    const dom = $(template(product));
    dom.find(".btn-cart").on("click", product, addToCart);
    $(".item-product").append(dom)
});

$(function(){
    const url = new URL(this.location.href);
    const id = Number(url.searchParams.get("id"));

    const product2 = _.find(products2, { id });
    const productItemTemplate2 = $("#productItem").html();
    const template2 = _.template(productItemTemplate2);
    const dom2 = $(template2(product2));
    dom2.find(".btn-cart").on("click", product2, addToCart);
    $(".item-product").append(dom2);
});

$(function () {
  const url = new URL(this.location.href);
  const id = Number(url.searchParams.get("id"));

  const product3 = _.find(products3, { id });
  const productItemTemplate3 = $("#productItem").html();
  const template3 = _.template(productItemTemplate3);
  const dom3 = $(template3(product3));
  dom3.find(".btn-cart").on("click", product3, addToCart);
  $(".item-product").append(dom3);
});

$(function () {
  const url = new URL(this.location.href);
  const id = Number(url.searchParams.get("id"));
  const product4 = _.find(products, { id });
  const productItemTemplate4 = $("#productItem").html();
  const template4 = _.template(productItemTemplate4);
  const dom4 = $(template4(product4));
  dom4.find(".btn-cart").on("click", product4, addToCart);
  $(".item-product").append(dom4);
});











