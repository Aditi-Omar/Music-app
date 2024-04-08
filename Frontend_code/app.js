console.log("Welcome to Sur");

let songIndex = 0;
let audioElement = new Audio('song0.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songitem'));

let songs = [
    { songName: "Stay", filePath: "D:\Frontend_code\song0.mp3", coverPath: "cover.png" },
    { songName: "Aaj na", filePath: "D:\Frontend_code\song1.mp3", coverPath: "cover1.png" },
    { songName: "Husn", filePath: "D:\Frontend_code\song2.mp3", coverPath: "cover2.png" },
    { songName: "Tu hai kahan", filePath: "D:\Frontend_code\song3.mp3", coverPath: "cover3.png" },
    { songName: "Raat akeli thi", filePath: "D:\Frontend_code\song4.mp3", coverPath: "cover4.png" },
    { songName: "Dil ki mez", filePath: "D:\Frontend_code\song5.mp3", coverPath: "cover5.png" },
    { songName: "Nazar teri toofan", filePath: "D:\Frontend_code\song6.mp3", coverPath: "cover6.png" },
]

songItems.forEach((element, i) => {
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }

    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {

    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = 'song' + songIndex + '.mp3';
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex > 7) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = 'song' + songIndex + '.mp3';
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex < 0) {
        songIndex = 0;
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = 'song' + songIndex + '.mp3';
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

