import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import $ from  "jquery";
import _ from "lodash";
import "../css/global.css";
import "../css/item.css";

import "./backtop.js";
import { products1 } from "./db";


$(function(){
    const url = new URL(this.location.href);
    const id = Number(url.searchParams.get("id"));
    const product = _.find(products1, {id});
    console.log(product);
})








