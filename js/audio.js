const Christmas = new Audio('./data/christmas.mp3');
const titleText = document.querySelector('.title');
const musicBtn = document.querySelector('.musicBtn');

console.log(musicBtn.src);
function play() {
    console.log("musicBtn: Submit!")
    if (String(musicBtn.src).includes('playBtn.png')) {
        Christmas.play();
        musicBtn.src = './data/pauseBtn.png';
    } else if (String(musicBtn.src).includes('pauseBtn.png')) {
        Christmas.pause();
        musicBtn.src = './data/playBtn.png';
    }
    
}


function getDate() {
    if (!(titleText.innerText == "Christmas Is Coming Soon! 🔔") || (titleText.innerText == "🎁 Today Is Christmas! 🎄")) {
        Christmas.remove()
    } 
}

musicBtn.addEventListener('click', play);


getDate();
setInterval(getDate, 1000);
