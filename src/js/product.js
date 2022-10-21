import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import $ from "jquery";
import _ from "lodash";
import "../css/global.css";
import "../css/product.css";
import "./backtop.js";
import { addToCart } from "./utils";

const products = [
    {
        id: 1,
        thumnail: "/img/product-1.svg",
        description: "Mũ rộng vành bucket phong cách Hàn Quốc",
        price: "129.000 VNĐ",
    },
    {
        id: 2,
        thumnail: "/img/product-2.svg",
        description: "Mũ lưỡi trai Ny M133 Kẹp Hợp Kim Màu Vàng",
        price: "350.000 VNĐ",
    },
    {
        id: 3,
        thumnail: "/img/product-3.svg",
        description: "Nón nam Snapback GOOD ROSE đẹp – SN62",
        price: "185.000 VNĐ",
    },
    {
        id: 4,
        thumnail: "/img/product-4.svg",
        description: "Mũ Len đen, trơn Beanie tối giản 2022",
        price: "89.000 VNĐ",
    },
    {
        id: 5,
        thumnail: "/img/product-5.svg",
        description: "Mũ bucket đen phong cách USA – BK70",
        price: "145.000 VNĐ",
    },
    {
        id: 6,
        thumnail: "/img/product-6.svg",
        description: "Mũ Bucket No Hat No Style - 2022",
        price: "157.000 VNĐ",
    },
    {
        id: 7,
        thumnail: "/img/product-7.svg",
        description: "Mũ Bucket Jean Nữ Cào Bụi Bặm",
        price: "99.000 VNĐ",
    },
    {
        id: 8,
        thumnail: "/img/product-8.svg",
        description: "Mũ len trắng, đỏ, đen, xám, tím than Alien 2022",
        price: "175.000 VNĐ",
    },
    {
        id: 9,
        thumnail: "/img/product-9.svg",
        description: " Mũ nam Snapback NOMERCY – SN63",
        price: "185.000 VNĐ",
    },
    {
        id: 10,
        thumnail: "/img/product-10.svg",
        description: "Mũ Snapback đen chữ C – SN59",
        price: "195.000 VNĐ",
    },
    {
        id: 11,
        thumnail: "/img/product-1.svg",
        description: "Mũ lưỡi trai Hàn Quốc nhiều màu – M147",
        price: "129.000 VNĐ",
    },
    {
        id: 12,
        thumnail: "/img/product-1.svg",
        description: "Mũ phớt cói đan cho nam và nữ MP014",
        price: "115.000 VNĐ",
    },
];



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
