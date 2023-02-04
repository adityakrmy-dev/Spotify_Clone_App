console.log("welcome to spotify");
//initialize the variables
let songIndex=0;
let audioElement=new Audio('1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar'); 
let songs = [
    {songName: "salam-e Ishq",filePath: "images/song/1.mp3", coverPath: "covers/1.jpg"}
    {songName: "salam-e Ishq",filePath: "images/song/2.mp3", coverPath: "covers/1.jpg"}
    {songName: "salam-e Ishq",filePath: "images/song/3.mp3", coverPath: "covers/1.jpg"}
    {songName: "salam-e Ishq",filePath: "images/song/4.mp3", coverPath: "covers/1.jpg"}
    {songName: "salam-e Ishq",filePath: "images/song/5.mp3", coverPath: "covers/1.jpg"}
    {songName: "salam-e Ishq",filePath: "images/song/6.mp3", coverPath: "covers/1.jpg"}
]
//handle play/pause click
masterPlay.addEventListener('click',()=>{
     if(audioElement.paused || audioElement.currentTime<0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
     }
     else
     {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
     }
})
// listen to event
myProgressBar.addEventListener('timeupdate',()=>{
console.log('timeupdate')
})