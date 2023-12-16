// instascan-setup.js

import Instascan from "https://rawgit.com/schmich/instascan-builds/master/instascan.min.js";

// Initialize QR code scanner
let scanner = new Instascan.Scanner({
  video: document.getElementById('scanner'),
});

// Handle scan results
scanner.addListener('scan', function (content) {
  // Handle the scanned content (send to Google Sheet, etc.)
  console.log('Scanned:', content);
});

// Start scanning when the page is loaded
Instascan.Camera.getCameras().then(function (cameras) {
  if (cameras.length > 0) {
    scanner.start(cameras[0]);
  } else {
    console.error('No cameras found.');
  }
});
