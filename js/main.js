document.addEventListener('DOMContentLoaded', function () {   
    // Khai báo logoutButton
    const logoutButton = document.getElementById('logoutButton');

    // Kiểm tra xem logoutButton có tồn tại không
    if (logoutButton) {
        logoutButton.addEventListener("click", function(){
            logout_function();
        });
    }
});

function logout_function() {
    window.location.href = "./index.html";
}

function showInformation(name) {
    // Chuyển hướng đến trang với tên file HTML mong muốn
    window.location.href = name.toLowerCase() + '.html';
}
