// main.js

function submitAttendance() {
    var formData = {
      id: document.getElementById("id").value,
      // ... (add other form data fields)
    };
  
    var url = "https://script.google.com/macros/s/AKfycbyg4L1JbNOdK4HffoyvNzwZXKX0X_sg7zisiEb2y2CZnbBN-3ywbbFoP7RHikNcPrnlzw/exec";
  
    fetch(url, {
      method: "POST",
      body: new URLSearchParams(formData),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
    .then(response => response.text())
    .then(data => {
      document.getElementById("response").textContent = data;
    });
  }
  