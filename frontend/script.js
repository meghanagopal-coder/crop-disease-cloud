// 🔗 Your Cloud Backend URL (replace later when backend is ready)
const API_URL = "YOUR_CLOUD_API_URL_HERE";

let isMoving = false;

// Detect motion based on device orientation
window.addEventListener("deviceorientation", function (event) {
    const movementX = Math.abs(event.beta);
    const movementY = Math.abs(event.gamma);

    const moving = movementX > 2 || movementY > 2;

    if (moving !== isMoving) {
        isMoving = moving;
        updateStatus();
        sendToCloud();
    }
});

// Update the UI
function updateStatus() {
    const statusText = document.getElementById("status-text");
    const emoji = document.getElementById("emoji");

    if (isMoving) {
        statusText.innerText = "Movement Detected";
        emoji.innerText = "🟢";
    } else {
        statusText.innerText = "No Movement";
        emoji.innerText = "🔴";
    }
}

// Send movement data to your cloud backend
function sendToCloud() {
    fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ movement: isMoving })
    })
    .then(res => console.log("Data sent:", isMoving))
    .catch(err => console.error("Error:", err));
}
