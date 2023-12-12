# Teacher Attendance Web App

This web application simplifies teacher attendance tracking and utilizes HTML, CSS, and JavaScript. Teachers can submit their attendance details through a user-friendly interface, and the information is seamlessly integrated into a Google Sheets document using Google Apps Script.

## How to Use

### Online HTML, CSS, JavaScript Compiler

1. Access the [Online HTML, CSS, JavaScript Compiler](https://www.jdoodle.com/html-css-javascript-online-compiler/).
2. Copy the content of the following files:
   - [index.html](index.html)
   - [style.css](style.css)
   - [script.js](script.js)
3. Paste the content into the corresponding sections for HTML, CSS, and JavaScript.
4. Click "Execute" to run the code.

### Visual Studio Code

1. Clone the repository to your local machine.
2. Open the project in Visual Studio Code.
3. Ensure you have the "Live Server" extension installed.
4. Open `index.html` and click "Go Live" in the bottom right corner.

### VS Code Settings

If you encounter any issues or wish to configure additional settings, please refer to the provided `settings.json` file. Make sure to update file paths as needed.

## File Structure

- **index.html:** The primary HTML file containing the structure of the web page.
- **style.css:** The CSS file providing styles for the web page.
- **script.js:** The JavaScript file managing form submission and interaction.

## Additional Features

### Login Page with Google Firebase

A secure login system has been added to enhance user authentication. The login page includes a school logo for branding, and users can log in using their Google credentials.

### Error Handling

The application now features improved error handling. In case of incorrect login credentials or other errors, users will receive clear error messages, enhancing the overall user experience.

## How to Run with Additional Features

1. Set up a Firebase project and enable authentication methods.
2. Replace the placeholder Firebase configuration in the `app.js` file with your actual configuration.
3. Host the HTML, CSS, and JavaScript files on a secure server.
4. Access the hosted web application, and users will now be able to log in securely using their Google accounts.

## Dependencies

- Firebase: For secure user authentication.
- No other external dependencies.

## Contributing

Contributions are welcome! Feel free to open issues or create pull requests. Your feedback and improvements are highly appreciated!

