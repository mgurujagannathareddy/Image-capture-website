# Camera Capture Web Application 📸

## 📌 Project Overview
This project is a **Camera Capture web application** that accesses the device’s camera, displays a live video feed, captures an image on button click, and shows the captured image as a preview.

The application demonstrates how modern web browsers can interact with hardware devices using **Web APIs**, without requiring backend servers or external libraries.

---

## 🎯 Objective
The objective of this project is to:
- Access the device camera from a webpage
- Display a live camera feed
- Capture an image on user action
- Display the captured image preview

---

## 🛠️ Technologies Used

### Frontend
- **HTML** – Structure of the webpage  
- **CSS** – Styling and layout  
- **JavaScript** – Camera access and image capture logic  

### API
- **MediaDevices API (`getUserMedia`)**  
  - Used to access the device camera  
  - Built into modern browsers  

### Tools
- Google Chrome / Microsoft Edge
- Visual Studio Code
- Git & GitHub

---

## 🧠 Key Concepts Implemented
- Camera access using browser APIs
- Media stream handling
- Canvas-based image capture
- Client-side image preview
- User permission handling

---

## 🏗️ System Architecture

User
↓
Web Browser
↓
MediaDevices API
↓
Camera Stream
↓
Video Element
↓
Canvas
↓
Image Preview


---

## ⚙️ Functional Modules

### 1. Live Camera Feed Module
- Requests camera permission from the user
- Streams live video to the webpage
- Displays feed using a `<video>` element

---

### 2. Image Capture Module
- Captures the current video frame
- Draws it onto an invisible `<canvas>`

---

### 3. Image Preview Module
- Converts captured canvas data to an image
- Displays the captured image using an `<img>` element

---

## 🔄 Working Principle

1. Webpage loads and requests camera permission
2. Live camera feed appears on the webpage
3. User clicks the **Capture Photo** button
4. Current video frame is captured
5. Captured image is displayed as a preview

---

## 🧪 Input & Output

### Input
- Camera video stream
- User click on capture button

### Output
- Captured image preview displayed on the webpage

---

## 🌍 Browser Support
- Works on modern browsers (Chrome, Edge, Firefox)
- Camera permission is required
- HTTPS or localhost recommended for full support

---

## ✅ Advantages
- No backend required
- Real-time camera access
- Simple and lightweight implementation
- Uses built-in browser features
- Beginner-friendly project

---

## ⚠️ Limitations
- Requires camera permission
- Depends on device camera availability
- Cannot store images permanently without backend

---

## 🔮 Future Enhancements
- Save captured images to local storage
- Upload images to server
- Add front/back camera selection
- Apply image filters

---

## 🤖 AI & Web API Usage Declaration
This project uses **browser-provided Web APIs** for camera access.  
No external AI services or cloud processing are used.  
All functionality is implemented on the client side.

---

## 📁 Project Structure

Camera-Capture/
│
├── index.html
├── styles.css
├── script.js
└── README.md


---

## 🚀 How to Run the Project

1. Clone or download the repository
2. Open `index.html` in a modern web browser
3. Allow camera access when prompted
4. Click **Capture Photo** to take a picture

---

## 👤 Author
Developed as a learning project to understand browser-based camera access and media handling.

---

## 📄 License
This project is open-source and intended for educational purposes.
