# PumpWidget Project

This project demonstrates pump management functionalities, including:

- Displaying pump data in a modern, responsive table.
- Dynamically coloring the "Flow" column based on values (`LOW`, `NORMAL`, `HIGH`).
- Running the project on a local server since 3DEXPERIENCE platform access is unavailable.

## Project Structure

PumpWidget_Project/
│
├── backend/
│ ├── mock_data.json # Mock database for pumps
│ ├── backend.js # Backend logic
│
├── frontend/
│ ├── index.html # Main HTML file
│ ├── style.css # Styling for the table and UI
│ ├── script.js # JavaScript for interactivity
│
├── server.js # Local server to run the project
└── README.md # Instructions for running the project

## Prerequisites

1. **Node.js** must be installed on your system. [Download Node.js here](https://nodejs.org/).
2. A basic code editor (e.g., Visual Studio Code) is recommended for reviewing the code.

## How to Run the Project Locally

1. **Download and Extract the Project**:

   - Unzip the `PumpWidget_Project.zip` file.

2. **Install Dependencies**:

   - Open a terminal or command prompt.
   - Navigate to the project folder:
     ```
     cd PumpWidget_Project
     ```
   - Install the required Node.js dependencies:
     ```
     npm install express cors body-parser
     ```

3. **Start the Local Server**:

   - Run the following command to start the server:
     ```
     node server.js
     ```
   - The server will run at: `http://localhost:3000`.

4. **View the Application**:
   - Open a browser and go to `http://localhost:3000` to see the pump management widget.

## Features

- Displays pump data in a modern, responsive table.
- Dynamically colors the "Flow" column based on the value.
- Fully responsive design for desktop and mobile.
- No 3DEXPERIENCE platform access is required; the project runs on a local server.

## Notes

- This project is designed to run locally due to the unavailability of 3DEXPERIENCE platform access.
