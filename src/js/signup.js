import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "../css/global.css";
import "../css/signup.css";




    
    let email = document.getElementById("email");
    
    let password = document.getElementById("password");
    let btnSignup = document.querySelector(".btn-signup");  

    btnSignup.addEventListener("click", (e) => {
        e.preventDefault();
         let user = {
           email: email.value,
           password: password.value,
         };

        let json = JSON.stringify(user);
        if (!email.value || !email.value){
            aler("Vui lòng nhập đầy đủ thông tin")
        } else{
            localStorage.setItem(email.value, json);
            alert("Đăng ký thành công")
            window.location.href = "signin.html";
        }
    })

