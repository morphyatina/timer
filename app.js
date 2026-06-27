import { timerRef, onSnapshot } from "./firebase.js";

const timer = document.getElementById("timer");

onSnapshot(timerRef, (doc) => {
    if (!doc.exists()) return;

    const data = doc.data();
    let seconds = data.seconds || 0;

    let m = Math.floor(seconds / 60);
    let s = seconds % 60;

    timer.innerHTML =
        String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0");
});
