# WebWakeFrontend 🚀

This repository houses a neat little Wake-on-LAN (WOL) solution, split into two main parts: a **Go-based backend server** and a sleek **Angular frontend application**. Together, they let you remotely power on computers on your local network by zapping them with a "magic packet" via a user-friendly web interface. ✨

---

## Features 

### Go Backend ⚡️
* **Lightweight & Efficient:** A tiny, powerful HTTP server that's easy on resources.
* **WOL Magic:** Handles `POST` requests to its `/wake` endpoint, snags MAC addresses from JSON, and sends those special WOL "magic packets" over UDP.
* **Friendly CORS:** Configured with CORS (Cross-Origin Resource Sharing) to play nice with web frontends right out of the box.

### Angular Frontend 🅰️
* **Intuitive Interface:** A clean web page where you can punch in MAC addresses.
* **Smart Validation:** Checks your MAC address format on the client side using regex – no more typos!
* **Seamless Communication:** Sends `POST` requests to your Go backend, making the magic happen.
* **Clear Feedback:** Keeps you in the loop with success or error messages, so you know exactly what's going on.

---

## External dependencies

The backend was written by Jovan Rakic and can be found in the following repository:
https://github.com/rakicjovan/WebWake

## Prerequisites

Before you dive in, make sure you've got these tools ready:

### For the Go Backend:
* **Go:** Version 1.24 or newer.

### For the Angular Frontend:
* **Node.js:** Version 14 or newer (comes with npm).
* **Angular CLI:** Install it globally from your terminal: `npm install -g @angular/cli`.

---

## Getting Started 🛠️

Let's get the frontend started!

### 1. Clone the Repository

First things first, grab the code:

```bash
git clone https://github.com/borislav-rakic/WebWakeFrontend
cd WebWakeFrontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Launch the Angular development server

```bash
ng serve
```

This command will work its magic, compile your Angular app, and then pop it open in your default browser, usually at `http://localhost:4200`.

## How to use it 🚀

1. <b>Server check:</b> Make sure both your Go backend server and the Angular frontend development server are running.
2. <b>Browse:</b> Open your web browser on `http://localhost:4200` (or whatever address `ng serve` tells you).
3. <b>MAC address input:</b> Type in the MAC address of the computer you want to wake up into the input field. The app handles MAC addresses in the `XX-XX-XX-XX-XX-XX` format.
4. <b>Send the signal:</b> Send the MAC address to the backend by clicking the button `Send MAC address`.

## Authors and Acknowledgements 📕

The Angular frontend was written by Borislav Rakic, and the Go backend was written by Jovan Rakic

## License 📜

This project is licensed under the MIT License.