// 🎵 Songs array
const songs = [
    {  
        title: "Aari Aari",
        artist: "Bombay Rockers",
        src: "assets/audio/Aari Aari Dhurandhar The Revenge 128 Kbps.mp3",
        cover: "assets/images/aari-aari-dhurandhar-the-revenge-500-500.jpg"
    },
    {
        title: "Angreji Beat",
        artist: "Gippy Grewal & Yo Yo Honey Singh",
        src: "assets/audio/Angreji Beat - International Villager 128 Kbps.mp3",
        cover: "assets/images/Angreji Beat - International Villager 128 Kbps.jpg"
    },
    {
        title: "Blue Eyes",
        artist: "Yo Yo Honey Singh",
        src: "assets/audio/Blue Eyes Yo Yo Honey Singh 128 Kbps.mp3",
        cover: "assets/images/Blue-Eyes-Yo-Yo-Honey-Singh-500-500.jpg"
    },
    {
        title: "Bolo Har Har Har",
        artist: "Mithoon, Badshah, Sukhwinder Singh",
        src: "assets/audio/Bolo Har Har Har - Shivaay 128 Kbps.mp3",
        cover: "assets/images/Bolo Har Har Har - Shivaay 128 Kbps.jpg"
    },
    {
        title: "Brown Rang",
        artist: "Yo Yo Honey Singh",
        src: "assets/audio/Brown Rang - International Villager 128 Kbps.mp3",
        cover: "assets/images/Brown Rang - International Villager 128 Kbps.jpg"
    },
    {
        title: "Desi Kalakaar",
        artist: "Yo Yo Honey Singh",
        src: "assets/audio/Desi Kalakaar - Desi Kalakaar 128 Kbps.mp3",
        cover: "assets/images/Desi Kalakaar - Desi Kalakaar 128 Kbps.jpg"
    },
    {
        title: "Dheere Dheere",
        artist: "Yo Yo Honey Singh",
        src: "assets/audio/Dheere Dheere Yo Yo Honey Singh 128 Kbps.mp3",
        cover: "assets/images/Dheere-Dheere-Yo-Yo-Honey-Singh-500-500.jpg"
    },
    {
        title: "Dilbar",
        artist: "Neha Kakkar, Dhvani Bhanushali, Ikka",
        src: "assets/audio/Dilbar Satyameva Jayate 128 Kbps.mp3",
        cover: "assets/images/Dilbar-Satyameva-Jayate-500-500.jpg"
    },
    {
        title: "Dope Shope",
        artist: "Yo Yo Honey Singh",
        src: "assets/audio/Dope Shope - International Villager 128 Kbps.mp3",
        cover: "assets/images/Dope Shope - International Villager 128 Kbps.jpg"
    },
    {
        title: "Ghar Kab Aaoge",
        artist: "Sonu Nigam, Arijit Singh, Vishal Mishra, Diljit Dosanjh, Roop Kumar Rathod",
        src: "assets/audio/Ghar Kab Aaoge Border 2 128 Kbps.mp3",
        cover: "assets/images/ghar-kab-aaoge-border-2-500-500.jpg"
    },
    {
        title: "Hanuman Chalisa",
        artist: "Shankar Mahadevan & Ajay",
        src: "assets/audio/Hanuman Chalisa.mp3",
        cover: "assets/images/hanuman-chalisa.webp"
    },
    {
        title: "Heer Aasmani",
        artist: "B Praak, Vishal Dadlani, Sheykhar Ravjiani, Shilpa Rao",
        src: "assets/audio/Heer Aasmani Fighter 128 Kbps.mp3",
        cover: "assets/images/heer-aasmani-fighter-500-500.jpg"
    },
    {
        title: "Hindustani",
        artist: "Shankar Mahadevan, Udit Narayan, Harsh Upadhyay",
        src: "assets/audio/Hindustani - Street Dancer 3D 128 Kbps.mp3",
        cover: "assets/images/Hindustani - Street Dancer 3D 128 Kbps.jpg"
    },
    {
        title: "Ishq Jalakar",
        artist: "Shashwat Sachdev, Shahzad Ali, Subhadeep Das Chowdhury, Armaan Khan",
        src: "assets/audio/Ishq Jalakar Dhurandhar 128 Kbps.mp3",
        cover: "assets/images/ishq-jalakar-dhurandhar-500-500.jpg"
    },
    {
        title: "Jaan Se Guzarte Hain",
        artist: "Shashwat Sachdev",
        src: "assets/audio/Jaan Se Guzarte Hain Dhurandhar The Revenge 128 Kbps.mp3",
        cover: "assets/images/jaan-se-guzarte-hain-dhurandhar-the-revenge-500-500.jpg"
    },
    {
        title: "Jaiye Sajana",
        artist: "Satinder Sartaaj & Jasmine Sandlas",
        src: "assets/audio/Jaiye Sajana Dhurandhar The Revenge 128 Kbps.mp3",
        cover: "assets/images/jaan-se-guzarte-hain-dhurandhar-the-revenge-500-500.jpg"
    },
    {
        title: "Kaho Na Kaho",
        artist: "Amir Jamal",
        src: "assets/audio/Kaho Na Kahowith Dialogue 128 Kbps.mp3",
        cover: "assets/images/dialogue-kaho-na-kaho-murder-500-500.jpg"
    },
    {
        title: "Love Dose",
        artist: "Yo Yo Honey Singh",
        src: "assets/audio/Love Dose - Desi Kalakaar 128 Kbps.mp3",
        cover: "assets/images/Love Dose - Desi Kalakaar 128 Kbps.jpg"
    },
    {
        title: "Lutt Le Gaya",
        artist: "Simran Choudhary",
        src: "assets/audio/Lutt Le Gaya Dhurandhar 128 Kbps.mp3",
        cover: "assets/images/lutt-le-gaya-dhurandhar-500-500.jpg"
    },
    {
        title: "Maheroo Maheroo",
        artist: "Shreya Ghoshal & Darshan Rathod",
        src: "assets/audio/Maheroo Maheroo Super Nani 128 Kbps.mp3",
        cover: "assets/images/Maheroo-Maheroo-Super-Nani-500-500.jpg"
    },
    {
        title: "Mitti",
        artist: "Vishal Dadlani & Sheykhar Ravjiani",
        src: "assets/audio/Mitti Fighter 128 Kbps.mp3",
        cover: "assets/images/Mitti-Fighter-500-500.jpg"
    },
    {
        title: "Ram Ji Aake Bhala Karenge",
        artist: "Armaan Malik & Aarvan",
        src: "assets/audio/Ram Ji Aake Bhala Karenge Bhooth Bangla 128 Kbps.mp3",
        cover: "assets/images/ram-ji-aake-bhala-karenge-bhooth-bangla-500-500.jpg"
    },
    {
        title: "Teri Yaadon Mein",
        artist: "KK & Shreya Ghoshal",
        src: "assets/audio/Teri Yaadon Mein The Killer 128 Kbps.mp3",
        cover: "assets/images/Teri-Yaadon-Mein-The-Killer-500-500.jpg"
    },
    {
        title: "Title Track Dhurandhar",
        artist: "Hanumankind, Jasmine Sandlas, Sudhir Yaduvanshi, Shashwat Sachdev, Mohd. Sadiq, Ranjit Kaur",
        src: "assets/audio/Title Track Dhurandhar 128 Kbps.mp3",
        cover: "assets/images/title-track-dhurandhar-500-500.jpg"
    },
    {
        title: "Tum Hi Aana",
        artist: "Jubin Nautiyal,Payal Dev,Kunaal Varma",
        src: "assets/audio/Tum Hi Aana Marjaavaan 128 Kbps.mp3",
        cover: "assets/images/Tum-Hi-Aana-Marjaavaan-500-500.jpg"
    },
    { 
        title: "Tum Sansoon Main",
        artist: "Himesh Reshammiya & Tulsi Kumar",
        src: "assets/audio/Tum Sansoon Main Humko Deewana Kar Gaye 128 Kbps.mp3",
        cover: "assets/images/Tum-Sansoon-Main-Humko-Deewana-Kar-Gaye-500-500.jpg"
    },
    {
        title: "Zara Sa",
        artist: "Pritam & KK",
        src: "assets/audio/Zara Sa Jannat 128 Kbps.mp3",
        cover: "assets/images/Zara-Sa-Jannat-Original-Motion-Picture-Soundtrack-500-500.jpg"
    }
];

const audio = document.getElementById("audio-player");
const playPauseBtn = document.getElementById("play-pause-button");
const prevBtn = document.getElementById("prev-button");
const nextBtn = document.getElementById("next-button");
const shuffleBtn = document.getElementById("shuffle-button");
const repeatBtn = document.getElementById("repeat-button");
const progressBar = document.getElementById("progress-bar");
const volumeSlider = document.getElementById("volume");
const songList = document.getElementById("song-list");
const currentTimeEl = document.getElementById("current-time");
const totalDurationEl = document.getElementById("total-duration");
const albumCover = document.getElementById("album-cover");
const player = document.querySelector(".music-player");
const searchInput = document.getElementById("search");
const emptyState = document.getElementById("empty-state");
const volumeIcon = document.querySelector(".volume-control i");

let current = 0;
let isShuffle = false;
let isRepeat = false;
let lastVolume = 1;

// Render playlist
function renderPlaylist(filteredSongs = songs) {
  songList.innerHTML = "";
  if (filteredSongs.length === 0) {
    emptyState.style.display = "block";
    return;
  }
  emptyState.style.display = "none";

  filteredSongs.forEach((song, index) => {
    const li = document.createElement("li");
    li.classList.add("song-item");
    li.setAttribute("title", "Click to select, double-click to play");
    li.innerHTML = `
      <img src="${song.cover}" alt="${song.title}">
      <div class="song-info">
        <span class="song-title">${song.title}</span>
        <span class="song-artist">${song.artist}</span>
      </div>
    `;

    // Single click → load song (no auto-play)
    li.addEventListener("click", () => {
      loadSong(index);
      audio.pause();
      playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
      player.classList.remove("playing");
    });

    // Double click → load and play instantly
    li.addEventListener("dblclick", () => {
      loadSong(index);
      audio.play();
      playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
      player.classList.add("playing");
    });

    songList.appendChild(li);
  });
}

// Load song
function loadSong(index) {
  current = index;
  const song = songs[index];
  document.getElementById("song-title").textContent = song.title;
  document.getElementById("song-artist").textContent = song.artist;
  albumCover.src = song.cover;
  audio.src = song.src;
  audio.play();
  playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
  player.classList.add("playing");
  updateActive();
}

// Highlight + auto-scroll active song
function updateActive() {
  [...songList.children].forEach((li, i) => {
    li.classList.toggle("active", i === current);
    if (i === current) {
      li.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  });
}

// Play/Pause
playPauseBtn.addEventListener("click", togglePlayPause);
function togglePlayPause() {
  if (audio.paused) {
    audio.play();
    playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    player.classList.add("playing");
  } else {
    audio.pause();
    playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    player.classList.remove("playing");
  }
}

// Next/Prev
nextBtn.addEventListener("click", () => {
  if (isShuffle) playRandomSong();
  else {
    current = (current + 1) % songs.length;
    loadSong(current);
  }
});
prevBtn.addEventListener("click", () => {
  current = (current - 1 + songs.length) % songs.length;
  loadSong(current);
});

// Shuffle
shuffleBtn.addEventListener("click", () => {
  isShuffle = !isShuffle;
  shuffleBtn.classList.toggle("active", isShuffle);
});
function playRandomSong() {
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * songs.length);
  } while (randomIndex === current);
  loadSong(randomIndex);
}

// Repeat
repeatBtn.addEventListener("click", () => {
  isRepeat = !isRepeat;
  repeatBtn.classList.toggle("active", isRepeat);
});
audio.addEventListener("ended", () => {
  if (isRepeat) loadSong(current);
  else if (isShuffle) playRandomSong();
  else nextBtn.click();
});

// Progress Bar
audio.addEventListener("timeupdate", () => {
  if (audio.duration) {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progress;
    progressBar.style.backgroundPosition = `${progress}% 50%`;
    currentTimeEl.textContent = formatTime(audio.currentTime);
    totalDurationEl.textContent = formatTime(audio.duration);
  }
});
progressBar.addEventListener("input", () => {
  audio.currentTime = (progressBar.value / 100) * audio.duration;
});
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
}

// Volume Control
volumeSlider.addEventListener("input", () => {
  audio.volume = volumeSlider.value;
  lastVolume = audio.volume;
  updateVolumeIcon();
});
function updateVolumeIcon() {
  if (audio.volume === 0) volumeIcon.className = "fas fa-volume-mute";
  else if (audio.volume < 0.5) volumeIcon.className = "fas fa-volume-down";
  else volumeIcon.className = "fas fa-volume-up";
}
volumeIcon.addEventListener("click", () => {
  if (audio.volume > 0) {
    lastVolume = audio.volume;
    audio.volume = 0;
    volumeSlider.value = 0;
  } else {
    audio.volume = lastVolume || 1;
    volumeSlider.value = audio.volume;
  }
  updateVolumeIcon();
});

// Search
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const filteredSongs = songs.filter(song =>
    song.title.toLowerCase().includes(query) ||
    song.artist.toLowerCase().includes(query)
  );
  renderPlaylist(filteredSongs);
});
searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const query = searchInput.value.toLowerCase();
    const firstMatchIndex = songs.findIndex(song =>
      song.title.toLowerCase().includes(query) ||
      song.artist.toLowerCase().includes(query)
    );
    if (firstMatchIndex !== -1) {
      loadSong(firstMatchIndex);
      audio.play();
      playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
      player.classList.add("playing");
    }
  }
  if (e.key === "Escape") {
    searchInput.value = "";
    renderPlaylist(songs);
  }
});

// Keyboard Shortcuts
document.addEventListener("keydown", (e) => {
  if (e.target.tagName === "INPUT") return;
  switch (e.code) {
    case "Space": e.preventDefault(); togglePlayPause(); break;
    case "ArrowRight": nextBtn.click(); break;
    case "ArrowLeft": prevBtn.click(); break;
    case "ArrowUp": e.preventDefault();
      volumeSlider.value = Math.min(1, parseFloat(volumeSlider.value) + 0.05);
      audio.volume = volumeSlider.value; lastVolume = audio.volume; updateVolumeIcon(); break;
    case "ArrowDown": e.preventDefault();
      volumeSlider.value = Math.max(0, parseFloat(volumeSlider.value) - 0.05);
      audio.volume = volumeSlider.value; lastVolume = audio.volume; updateVolumeIcon(); break;
    case "KeyM": audio.volume = audio.volume > 0 ? 0 : (lastVolume || 1);
      volumeSlider.value = audio.volume; updateVolumeIcon(); break;
    case "Slash": e.preventDefault(); searchInput.focus(); break;
  }
});

// Touch Gestures (mobile)
let touchStartX = 0;
document.addEventListener("touchstart", e => {
  touchStartX = e.changedTouches[0].screenX;
});
document.addEventListener("touchend", e => {
  let touchEndX = e.changedTouches[0].screenX;
  if (touchEndX - touchStartX > 50) prevBtn.click();   // swipe right → prev
  if (touchStartX - touchEndX > 50) nextBtn.click();   // swipe left → next
});

// Initial load
renderPlaylist(songs);
loadSong(0);
updateVolumeIcon();
