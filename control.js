import { timerRef, getDoc, setDoc } from "./firebase.js";

async function addMinute() {
    const snap = await getDoc(timerRef);

    let endTime = Date.now();

    if (snap.exists()) {
        endTime = Math.max(Date.now(), snap.data().endTime || 0);
    }

    endTime += 60000;

    await setDoc(timerRef, {
        endTime
    });
}

window.addMinute = addMinute;
