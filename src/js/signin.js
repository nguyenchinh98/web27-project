import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "../css/global.css";
import "../css/signin.css";
import "./backtop.js";
import "./backtop.js";

let email = document.getElementById("email");
let password = document.getElementById("password");
let btnLogin = document.querySelector(".btn-signin");

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  let user = {
    email: email.value,
    password: password.value,
  };
  console.log(user);
  let json = JSON.stringify(user);
  if (!email.value || !password.value) {
    alert("Vui Lòng Điền Thông Tin Của Bạn!");
  }
  if (localStorage.getItem(email.value) == json) {
    alert("dang nhap thanh cong");
    window.location.href = "index.html";
  } else {
    alert("dang nhap that bai");
  }
});