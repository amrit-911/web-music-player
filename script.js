// intializing var
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById("gif");
let songItem = Array.from(document.getElementsByClassName("songItem"))



//array
let songs = [
    { songName: "Rent a Girlfriend", filePath: "songs/1.mp3" },
    { songName: "Capital Letters", filePath: "songs/2.mp3" },
    { songName: "Without Me", filePath: "songs/3.mp3" },
    { songName: "Love me like you do", filePath: "songs/4.mp3" },
    { songName: "Make you mine", filePath: "songs/5.mp3" },
    { songName: "Moonlight", filePath: "songs/6.mp3" },
]

songItem.forEach((element, i) => {
    element.getElementsByClassName("songName")[0].innerHTML = songs[i].songName;
})

//play and pause 
masterPlay.addEventListener("click", () => {
    if (audioElement.paused || audioElement <= 0) {
        audioElement.play();
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");
        gif.style.opacity = 1;

    } else {
        audioElement.pause();
        masterPlay.classList.remove("fa-pause");
        masterPlay.classList.add("fa-play");
        gif.style.opacity = 0;

    }
})

//timeupdate
audioElement.addEventListener("timeupdate", () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener("change", () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlay = () => {
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
        element.classList.remove("fa-pause")
        element.classList.add("fa-play")
    })


}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
    element.addEventListener("click", (e) => {
        console.log(e.target);
        makeAllPlay()
        songIndex = parseInt(e.target.id)
        e.target.classList.remove("fa-play")
        e.target.classList.add("fa-pause")
        document.getElementById("masterSongName").innerHTML = songs[songIndex - 1].songName
        audioElement.currentTime = 0;
        audioElement.src = `songs/${songIndex}.mp3`
        audioElement.play()
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");
        gif.style.opacity = 1;
    })


})





document.getElementById('next').addEventListener("click", () => {
    if (songIndex >= 6) {
        songIndex = 1
    } else {
        songIndex += 1
    }
    audioElement.currentTime = 0;
    audioElement.src = `songs/${songIndex}.mp3`
    document.getElementById("masterSongName").innerHTML = songs[songIndex - 1].songName
    audioElement.play()
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
    makeAllPlay()
    gif.style.opacity = 1;


})

document.getElementById('previous').addEventListener("click", () => {
    if (songIndex <= 1) {
        songIndex = 6
    } else {
        songIndex -= 1
    }
    audioElement.currentTime = 0;
    audioElement.src = `songs/${songIndex}.mp3`
    document.getElementById("masterSongName").innerHTML = songs[songIndex - 1].songName
    audioElement.play()
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
    gif.style.opacity = 1;

})