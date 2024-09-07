# VUJIK - Music Widget/Desktop App

![VUJIK Logo](https://github.com/VikashAnandJha/VuJik/blob/main/src-tauri/icons/128x128.png?raw=true)

Welcome to VUJIK, a music widget and desktop app built with Tauri and React for those who prefer not to pay for streaming services like YouTube Music or Spotify. VUJIK provides a straightforward way to enjoy your favorite music without the need for premium subscriptions.

## Features

- **Lightweight and Easy to Use**: A simple desktop application that doesn’t bloat your system.
- **Free Music Streaming**: Access music without needing a subscription.

## Tech Stack

- **[Tauri](https://tauri.studio/)**: Framework for building lightweight, secure, and fast desktop applications.
- **[React](https://reactjs.org/)**: Library for building user interfaces.
- **[Rust](https://www.rust-lang.org/)**: Programming language used for the backend.
- **[HTML/CSS/JavaScript](https://developer.mozilla.org/en-US/docs/Learn/HTML)**: Technologies used for the frontend.

## Installation

To get started with VUJIK, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/VikashAnandJha/VuJik.git
   ```

2. **Navigate to the Project Directory**

   ```bash
   cd VuJik
   ```

3. **Install Dependencies**

   Make sure you have [Node.js](https://nodejs.org/) installed. Then, install the frontend dependencies:

   ```bash
   npm install
   ```

4. **Install Dependencies**

   Make sure you have [Rust](https://www.rust-lang.org/) installed. Install the Rust dependencies:

   ```bash
   cargo install tauri-cli
   ```

5. **Run the App in Development Mode**

   To start the development server and run the app:

   ```bash
   npm run tauri dev
   ```

   This will start both the React development server and the Tauri backend.

6. **Build the App for Production**

   To create a production build of the app:

   ```bash
   npm run tauri build
   ```

   This will bundle your app into a distributable format.

## Usage

1. Open the VUJIK app from your desktop.
2. Use the React-based interface to search for and play your favorite music.
3. Customize settings as needed through the app’s preferences menu.

## Contributing

Contributions are welcome! If you have suggestions for improvements, bug fixes, or new features, please follow these guidelines:

1. **Fork the Repository**: Create your own fork of the repository on GitHub.
2. **Create a New Branch**:

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make Your Changes**: Edit code, add features, or fix bugs.
4. **Commit Your Changes**:

   ```bash
   git add .
   git commit -m "Add your message here"
   ```

5. **Push to Your Fork**:

   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request**: Submit a pull request to the main repository with a clear description of your changes.

## Contact

For any questions or feedback, please open an issue on the [GitHub repository](https://github.com/VikashAnandJha/VuJik) or contact the project maintainer directly.

---

Feel free to tweak this further based on your project's specifics and requirements!
