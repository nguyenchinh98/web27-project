import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "../css/global.css";
import "../css/signup.css";



function signup(e){
    event.preventDefault();
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value;
    let user = {
        username: username,
        email: email,
        phone: phone,
        password: password,
    }
    let json = JSON.stringify(user);
    localStorage.setItem(username, json)
    alert("Đăng ký thành công")
}
