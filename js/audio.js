const titleText = document.querySelector('.title');
const Christmas = new Audio('./data/christmas.mp3')


function play() {
    Christmas.volume = 0.7;
    Christmas.muted = true;
    Christmas.loop = true;
    Christmas.play();

    setTimeout(function() { Christmas.muted = false; }, 1000)
}


function getDate() {
    const date = new Date();
    const month = date.getMonth()  + 1;
    const day = date.getDate();

    if (!(titleText.innerText == "Christmas Is Coming Soon! 🔔") || (titleText.innerText == "🎁 Today Is Christmas! 🎄")) {
        const player = document.querySelector('.player');
        Christmas.pause();
        
    } 
}


play();
getDate();
setInterval(getDate, 1000);
