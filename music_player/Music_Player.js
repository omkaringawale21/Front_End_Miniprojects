const music = document.querySelector("audio");
const img = document.querySelector("img");
const play = document.getElementById("play");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let progress = document.getElementById("progress");
let total_duration = document.getElementById("duration");
let current_time = document.getElementById("current_time");
let progress_div = document.getElementById("progress_div");

const songs = [
    {
    name: "thapa1",
    title: "Arebic Song",
    artist: "Omkar Ingawale",
    },
    {
    name: "thapa2",
    title: "Jump Kar",
    artist: "Emmayway Bantai",
    },
    {
    name: "thapa3",
    title: "Govyachya Kinaryavar",
    artist: "Rajneesh Patel",
    },
];

let isPlaying = false;

// for play function
const playMusic = () => {
    isPlaying = true;
    music.play();
    play.classList.replace("fa-play", "fa-pause");
    img.classList.add("anime");
};

// for pause function
const pauseMusic = () => {
    isPlaying = false;
    music.pause();
    play.classList.replace("fa-pause", "fa-play");
    img.classList.remove("anime");
};

play.addEventListener("click", () => {
    /*if (isPlaying) {
        pauseMusic();        
    } else {
        playMusic();
    }*/
    
    // Conditional Ternary for play or pause music
    isPlaying ? pauseMusic() : playMusic();
});

// Change music data

const loadSongs = (songs) =>{
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = "F:/Miniproject/music_player/music/" + songs.name + ".mp3";
    img.src = "F:/Miniproject/music_player/images/" + songs.name + ".jpg";
};

songIndex = 0;

const nextSong = () =>{
    // songIndex++;
    songIndex = (songIndex + 1) % songs.length;
    loadSongs(songs[songIndex]);
}

const prevSong = () =>{
    // songIndex--;
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSongs(songs[songIndex]);
}

// Progress JS works

music.addEventListener("timeupdate", (event) =>{
    // console.log(event);
    const {currentTime, duration} = event.srcElement;
    // console.log(currentTime);
    // console.log(duration);

    let Progress_time = (currentTime / duration) * 100;
    progress.style.width = `${Progress_time}%`;

    // music duration update
    let min_duration = Math.floor(duration / 60);
    let sec_duration = Math.floor(duration % 60);
    // console.log(min_duration);
    // console.log(sec_duration);
    let tot_duration = `${min_duration}:${sec_duration}`;
    if(duration){
        total_duration.textContent = `${tot_duration}`;
    }

    // current duration update
    let min_currentTime = Math.floor(currentTime / 60);
    let sec_currentTime = Math.floor(currentTime % 60);
    // console.log(min_duration);
    // console.log(sec_duration);
    if (sec_currentTime < 10) {
        sec_currentTime = `0${sec_currentTime}`;
    }
    let tot_currentTime = `${min_currentTime}:${sec_currentTime}`;
    current_time.textContent = `${tot_currentTime}`;

});

// Progress onclick functionality
progress_div.addEventListener("click", (event) => {
    console.log(event);
    const { duration } = music;

    let move_progress = (event.offsetX / event.srcElement.clientWidth) * duration;

    // console.log(move_progress);

    music.currentTime = move_progress;
});

// if music end called next function
music.addEventListener("ended", nextSong);

next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);