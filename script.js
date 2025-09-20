console.log("welcome to spotify")
let songIndex = 0;
let audioElement = new Audio('birds of feather.mp3');
let masterplay = document.getElementById('masterplay')
let myprogressbaar = document.getElementById('myprogressbaar')
let nextBtn = document.getElementById('nextBtn');


let songs = [
  
  { songname : "birds of feather" , filepath : "birds of feather.mp3", coverPath : "artworks-T99f0BmoDfy0jidN-wrXBRg-t500x500.jpg" },
  { songname : "everything i wanted" , filepath : "everything i wanted.mp3", coverPath : "artworks-2YNyjPmStyQQupYP-i7QVYQ-t1080x1080.jpg" },
  { songname : "happier than ever" , filepath : "happier-than-ever.mp3", coverPath : "maxresdefault.jpg" },
  { songname : "wildflower" , filepath : "billie-eilish-wildflower-official-lyric-video-128-ytshorts.savetube.me.mp3", coverPath : "birdsoffeathetr.jpg" },
];


masterplay.addEventListener('click',() => {
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
    }else {
         audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
    }
})
audioElement.addEventListener('timeupdate', () => {
  console.log('timeupdate');
  if (audioElement.duration) {   // safe check
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    console.log("Progress:", progress);
    myprogressbaar.value = progress;   // yeh number input range me set karega
  }
});
myprogressbaar.addEventListener('change', () => {
  if (audioElement.duration) {   // safe check, jab tak duration load na ho
    audioElement.currentTime = (myprogressbaar.value * audioElement.duration) / 100;
  }
});

// ✅ Direct 3rd song play karne ka code
nextBtn.addEventListener('click', () => {
  songIndex = (songIndex + 1) % songs.length;  

  audioElement.src = songs[songIndex].filepath;  
  audioElement.currentTime = 0;  
  audioElement.play();  
});
let prevBtn = document.getElementById('prevBtn');  

prevBtn.addEventListener('click', () => {
  // agar songIndex 0 hai to last song pe chala jaaye
  if (songIndex <= 0) {
    songIndex = songs.length - 1;
  } else {
    songIndex = songIndex - 1;
  }

  audioElement.src = songs[songIndex].filepath;
  audioElement.currentTime = 0;
  audioElement.play();
});
//yeh playlist me jab click kare ga ge uske liye
let playButtons = document.querySelectorAll('.playbtn');

playButtons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    let index = parseInt(e.target.getAttribute('data-index')); // jis pe click hua uska index
    songIndex = index;

    audioElement.src = songs[songIndex].filepath;
    audioElement.currentTime = 0;
    audioElement.play();

    // masterplay ka icon update
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
  });
});














