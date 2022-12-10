const titleText = document.querySelector('.title');
const Christmas = new Audio('./data/christmas.mp3')
console.log("Audio.js Loading!");

function play() {
    console.log("Play Starting!");
    Christmas.volume = 0.7;
    Christmas.muted = true;
    Christmas.loop = true;
    Christmas.play();

    setTimeout(function() { Christmas.muted = false; }, 2500)
    console.log("Play Started!");
}


function getDate() {
    const date = new Date();
    const month = date.getMonth()  + 1;
    const day = date.getDate();
    console.log("Date Update!");

    if (!(titleText.innerText == "Christmas Is Coming Soon! 🔔") || (titleText.innerText == "🎁 Today Is Christmas! 🎄")) {
        const player = document.querySelector('.player');
        Christmas.pause();
        console.log("Christmas Stop!");
        
    } 
}


play();
getDate();
setInterval(getDate, 1000);
