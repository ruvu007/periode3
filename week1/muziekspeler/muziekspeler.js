let timeToPlay = 10;
const playTime = document.getElementById('playtime');
let intervalId = setInterval(player, 1000);

let list = [
    {
        time: 10,
        title: 'Rainy Day'
    },
    {
        time: 33,
        title: 'Sunny Day'
    },
    {
        time: 12,
        title: 'Different Times'
    }
];

let song = playNumber();

function player() {
        if (timeToPlay > 0) {
            timeToPlay = timeToPlay - 1
            // playTime.innerText = 'Playing now: ' + timeToPlay;
            playTime.innerText = 'Playing now: ' + song.title + ' ' + timeToPlay;
        } else {
            song = playNumber();
            player();
            // stopShow();
        }
}

function stopShow() {
    clearInterval(intervalId);
}

function shuffle(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function playNumber() {
    let song = shuffle(list.length);
    timeToPlay = list[song].time;
    playTime.innerText = list[song].title;
    return list[song];
}

