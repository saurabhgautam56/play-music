# 🎶 Web Music Player

A fully-featured web-based music player built with **HTML, CSS, and JavaScript**.  
It supports playlists, search, shuffle/repeat, keyboard shortcuts, auto-scroll to the active track, and volume control with dynamic icons.

---

## ✨ Features
- 🎵 Play, pause, next, previous track controls
- 🔀 Shuffle and 🔁 repeat modes
- 📊 Animated progress bar synced with playback
- 🔊 Volume slider + clickable mute toggle
- 🔎 Search with Enter (play first match) and Escape (clear search)
- ⌨️ Keyboard shortcuts:
  - Space → Play/Pause
  - Arrow Right → Next song
  - Arrow Left → Previous song
  - Arrow Up/Down → Volume control
  - Enter → Play first search result
  - Escape → Clear search
- 🖱️ Double-click a song to play instantly
- ✨ Auto-scroll to keep the active song centered in the playlist

---

## 📂 Project Structure
```
project/
│── index.html
│── style.css
│── script.js
│── assets/
│   ├── audio/   # MP3 files
│   └── images/  # Cover images
```

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/saurabhgautam56/music-player.git
cd music-player
```
# Add your songs
- Place .mp3 files inside assets/audio/
- Place cover images inside assets/images/
- Update the songs array in script.js with your track details:
    const songs = [
  {
    title: "Song Title",
    artist: "Artist Name",
    src: "assets/audio/song.mp3",
    cover: "assets/images/song.jpg"
  }
];

## Run locally
Open index.html in your browser, or use VS Code + Live Server for auto-refresh.

---

## 🌐 Deployment
- GitHub Pages
- Push your project to a GitHub repository.
- Go to Settings → Pages.
- Select branch main and folder /root.
- Your site will be live at: https://saurabhgautam56.github.io/music-player

---

## 🛠️ Future Enhancements
- Playlist persistence with localStorage
- Dynamic playlist creation
- Drag-and-drop song ordering
- Dark mode UI

--- 

## 👨‍💻 Author
Built with ❤️ by Saurabh
