// Initialize Firebase
var firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);

// Login function with email and password
function login() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            console.log("User logged in:", user);
            // Redirect or perform other actions on successful login
        })
        .catch((error) => {
            var errorCode = error.code;
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
            // Redirect or perform other actions on successful login
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.error("Google Sign-In Error:", errorMessage);
            document.getElementById('error').innerText = errorMessage;
        });
}
