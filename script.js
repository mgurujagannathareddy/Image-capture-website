const video = document.getElementById("video");

navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
    })
    .catch(error => {
        alert("Camera access denied");
    });

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

function capturePhoto() {
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    const imageData = canvas.toDataURL("image/png");
    document.getElementById("photo").src = imageData;
}
