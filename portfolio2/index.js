firebase.initializeApp({
  apiKey: "AIzaSyDBNesMUNpjkZE-oNpNs0Ta1rfb81PdnU0",
  authDomain: "context-5e8f8.firebaseapp.com",
  projectId: "context-5e8f8",
  storageBucket: "context-5e8f8.firebasestorage.app",
  messagingSenderId: "609282226619",
  appId: "1:609282226619:web:e341dda18f65dc581eac9e"
});


const db = firebase.firestore().collection("form");


let submitButton = document.getElementById("Send");


submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  let firstName = document.getElementById("fname").value;
  let lastName = document.getElementById("lname").value;
  let textContect = document.getElementById("textcontect").value;

  db.add({
    fname: firstName,
    lname: lastName,
    textContect: textContect,
    timestamp: new Date()
  })
  .then(() => {
    alert("ส่งข้อความเสร็จสิ้น ✅");
    console.log("Data saved");
  })
  .catch((error) => {
    console.error("Error: ", error);
  });
});
