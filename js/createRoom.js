import { db } from './firebase-config.js';

import {
    ref,
    set
}
from "https://www.gstatic.com/firebasejs/13.2.0/firebase-database.js";

const btn =
document.getElementById("createRoomBtn");

const roomText =
document.getElementById("roomCode");

btn.addEventListener("click", createRoom);

async function createRoom(){

    const roomCode =
    "TB" +
    Math.floor(
    1000 + Math.random() * 9000
    );

    await set(
        ref(db, "rooms/" + roomCode),
        {
            status: "waiting",
            currentScenario: 1,
            createdAt: Date.now()
        }
    );

    roomText.innerText =
    "Room Created : " + roomCode;

    console.log("Created", roomCode);
}