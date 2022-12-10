const titleText = document.querySelector('.title');



// <script src="./js/audio.js"></script>

function play() {
    var player = document.createElement("iframe");
        player.classList.add('player');
        player.src = "https://www.youtube.com/embed/QlQCGUK8tN4?autoplay=1&mute=1&loop=1&start=001&playlist=QlQCGUK8tN4&playsinline=1";
        player.width = "560";
        player.height = "315";
        player.title = "YouTube video player";
        player.frameborder = "0";
        player.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        player.allowFullscreen;

        document.body.appendChild(player);
        const playerEl = document.querySelector('.player');
        playerEl.src = "https://www.youtube.com/embed/QlQCGUK8tN4?autoplay=1&mute=0&loop=1&start=001&playlist=QlQCGUK8tN4&playsinline=1";
}


function getDate() {
    const date = new Date();
    const month = date.getMonth()  + 1;
    const day = date.getDate();

    if (!(titleText.innerText == "Christmas Is Coming Soon! 🔔") || (titleText.innerText == "🎁 Today Is Christmas! 🎄")) {
        const player = document.querySelector('.player');
        player.remove();
        
    } 
}


play();
getDate();
setInterval(getDate, 1000);
