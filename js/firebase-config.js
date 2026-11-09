const firebaseConfig = {
    apiKey: "AIzaSyCATqMwA0vC5x8qil1I-OdVpzVKZBJg0Uk",
    authDomain: "techbee-corporate-sim.firebaseapp.com",
    databaseURL: "https://techbee-corporate-sim-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "techbee-corporate-sim",
    storageBucket: "techbee-corporate-sim.firebasestorage.app",
    messagingSenderId: "302531660110",
    appId: "1:302531660110:web:0a5001ea9aadc9cce0761f"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.database();

console.log("Firebase Connected ✅");