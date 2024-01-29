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
    window.location.href = 'http://127.0.0.1:5500/Information/' + name.toLowerCase() + '.html';
}


function showControl(){
    window.location.href = "./control.html";
}
function showSupervise(){
    window.location.href = "./supervise.html";
}
