function loginUser() {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === "admin" && password === "123") {
        alert("Okii vào nhó")
        window.location.href = "./main.html";
        return true;    
    }
    // else if (username === "" && password === ""){
    //     alert("Please enter a username or password");
    // }
    else {
        alert("Đăng nhập thất bại vui lòng ở lại trang Login");
        return false;
    }
}
