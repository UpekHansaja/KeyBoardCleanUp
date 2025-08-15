# MacBook Keyboard Cleaning Tool 🧼

![License](https://img.shields.io/badge/license-MIT-blue)
![Platform](https://img.shields.io/badge/platform-Web-yellow)
![Status](https://img.shields.io/badge/status-stable-green)

<div align="center">
  <img src="keyboard.svg" alt="MacBook Keyboard Illustration" width="600">

  <p><em>A simple yet effective web tool to safely clean your MacBook keyboard without triggering unwanted actions.</em></p>
</div>

## 🌟 Overview

Every MacBook user knows the frustration of trying to clean their keyboard, only to accidentally:
- Open random applications
- Type gibberish into documents
- Trigger system shortcuts
- Delete important files

This lightweight web application solves this problem by capturing and neutralizing all keyboard events while you clean, allowing you to safely wipe down your keyboard without fear of accidental inputs.

## ✨ Features

- **Complete Keyboard Event Capture**: Intercepts all key presses to prevent unwanted actions
- **Mouse/Touchpad Exit Only**: Can only be deactivated using your mouse or touchpad, not the keyboard
- **Visual Feedback**: Shows which keys are being pressed during cleaning
- **Keystroke Counter**: Tracks how many keys you've pressed during your cleaning session
- **System Theme Support**: Automatically adapts to light or dark mode based on system preferences
- **Reduced Motion Support**: Respects accessibility preferences
- **Mobile-Friendly**: Works on tablets and phones too (useful for external keyboards)
- **No Installation**: Works directly in your browser with no downloads or setup

## 🚀 Getting Started

### Method 1: Direct Access (Easiest)

Visit the live version at: [https://upekhansaja.github.io/KeyboardCleanUp](https://upekhansaja.github.io/KeyboardCleanUp)

### Method 2: Local Installation

1. Clone this repository:
```bash
git clone https://github.com/UpekHansaja/KeyBoardCleanUp.git
```

2. Navigate to the directory:
```bash
cd KeyBoardCleanUp
```

3. Open `index.html` in your browser:
```bash
open index.html  # macOS
# or
xdg-open index.html  # Linux
# or
start index.html  # Windows
```

## 📖 How to Use

1. **Open the application** in your web browser
2. You'll receive a notification that "Keyboard Cleaning Mode" is activated
3. **Clean your keyboard** freely without worrying about triggering actions
   - All keypresses will be captured and displayed on screen
   - The status indicator will show when keys are being pressed
4. When finished, **click the "Exit Cleaning Mode" button** using your mouse or touchpad
5. The application will reset and your keyboard will function normally again

## 💡 Why Use This Tool?

- **Safe Cleaning**: Completely eliminates the risk of accidental commands
- **Convenience**: No need to shut down your computer to clean the keyboard
- **Visibility**: See which keys are registering, helping identify stuck keys
- **Cross-Platform**: Works on any operating system with a modern web browser
- **Privacy-Focused**: No data collection, works entirely in your browser

## 🧰 Technical Details

This project uses:
- **HTML5** for structure
- **CSS3** with modern features like:
  - CSS Variables
  - Flexbox layout
  - Media queries for responsive design
  - Prefers-color-scheme for dark mode support
  - Prefers-reduced-motion for accessibility
- **Vanilla JavaScript** for:
  - Event capturing
  - DOM manipulation
  - Animation control

## 🔧 Browser Compatibility

Tested and working on:
- ✅ Safari 14+
- ✅ Chrome 85+
- ✅ Firefox 80+
- ✅ Edge 85+

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Upek Hansaja**

- GitHub: [@UpekHansaja](https://github.com/UpekHansaja)
- LinkedIn: [Upek Hansaja](https://www.linkedin.com/in/upek-hansaja/)


## 🙏 Acknowledgements

- Inspiration: Every frustrated MacBook user who has accidentally opened 10 applications while trying to clean their keyboard (just kidding 😂)


---

<div align="center">
  <p>Made with ❤️ for clean keyboards everywhere</p>
  <p>If you found this helpful, consider giving it a ⭐ on GitHub!</p>
</div>
