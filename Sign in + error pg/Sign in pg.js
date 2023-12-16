// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyB0k9eVwEIzRk4B3YOKvNhgppifMcOtAJc",
    authDomain: "attendance-app-for-teachers.firebaseapp.com",
    projectId: "attendance-app-for-teachers",
    appId: "1:518706942019:web:c06d6b50e207b9c0d604f6"
};

firebase.initializeApp(firebaseConfig);

// Check if the user is already authenticated
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in, redirect to the attendance page
        window.location.href = "attendance.html";
    }
});

// Login function with email and password
function login() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            console.log("User logged in:", user);
            // Redirect to the attendance page on successful login
            window.location.href = "attendance.html";
        })
        .catch((error) => {
            var errorMessage = error.message;
            console.error("Login Error:", errorMessage);
            document.getElementById('error').innerText = errorMessage;
        });
}

// Login function with Google
function loginWithGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
        .then((result) => {
            var user = result.user;
            console.log("User logged in with Google:", user);
            // Redirect to the attendance page on successful login
            window.location.href = "attendance.html";
        })
        .catch((error) => {
            var errorMessage = error.message;
            console.error("Google Sign-In Error:", errorMessage);
            document.getElementById('error').innerText = errorMessage;
        });
}
