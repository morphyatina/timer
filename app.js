import { timerRef, onSnapshot } from "./firebase.js";

const timer = document.getElementById("timer");

let endTime = 0;

onSnapshot(timerRef, (doc) => {
    if (doc.exists()) {
        endTime = doc.data().endTime || 0;
    }
});

function update() {
    const now = Date.now();
    let left = Math.max(0, Math.floor((endTime - now) / 1000));

    let m = Math.floor(left / 60);
    let s = left % 60;

    timer.textContent =
        String(m).padStart(2, "0") +
        ":" +
        String(s).padStart(2, "0");
}

setInterval(update, 100);
update();
