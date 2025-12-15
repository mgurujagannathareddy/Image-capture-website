const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const photo = document.getElementById("photo");
const cameraSelect = document.getElementById("cameraSelect");
const context = canvas.getContext("2d");

let stream = null;

async function startCamera() {
    if (stream) {
        stream.getTracks().forEach(track => track.stop());
    }

    const facingMode = cameraSelect.value;

    try {
        stream = await navigator.mediaDevices.getUserMedia({
            video: {
                facingMode: facingMode,
                width: { ideal: 1920 },
                height: { ideal: 1080 }
            }
        });

        video.srcObject = stream;
    } catch (error) {
        alert("Camera not accessible");
        console.error(error);
    }
}

function capturePhoto() {
    if (!video.videoWidth || !video.videoHeight) return;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    photo.src = canvas.toDataURL("image/png", 1.0);
}

cameraSelect.addEventListener("change", startCamera);
startCamera();
