const title = document.querySelector('.title');


function getDate() {
    const date = new Date();
    const month = date.getMonth()  + 1;
    const day = date.getDate();

    if (month == 12 && day <= 24) {
        title.innerText = 'Christmas Is Coming Soon! 🔔'
    } else if (month == 12 && day == 25) {
        title.innerText = '🎁 Today Is Christmas! 🎄'
    } else {
        title.innerText = 'What Day Are You Doing Today? 😕'
    }
}



getDate();
setInterval(getDate, 1000);