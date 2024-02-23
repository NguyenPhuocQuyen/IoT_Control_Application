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

function toggleButtonClick(buttonNumber) {
    var indicator = document.getElementById("indicator" + buttonNumber);
    var isChecked = document.getElementById("toggle" + buttonNumber).checked;

    if (isChecked) {
        indicator.style.transform = "translateX(53px)";
    } else {
        indicator.style.transform = "translateX(0)";
    }
}


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

document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('cameraFeed');

    navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
            video.srcObject = stream;
        })
        .catch((error) => {
            console.error('Error accessing the camera: ', error);
        });
});
