var Mambo = new Audio('assets/mambo.mp3');
var Tachyon = new Audio('assets/sonnakimini.mp3');
var Weii = new Audio('assets/weiii-daitaku-helios.mp3');

function setBackground() {
    const background = document.getElementById('menu_container');
    const currentTime = new Date().getUTCHours();

    let backgroundImage = '';

    if (currentTime >= 5 && currentTime < 8) {
        backgroundImage = '../img/bg/bg_morning.webp'; 
    } else if (currentTime >= 8 && currentTime < 18) {
        backgroundImage = '../img/bg/bg_day.webp'; 
    } else if (currentTime >= 18 && currentTime < 21) {
        backgroundImage = '../img/bg/bg_night.webp';
    } else if (currentTime >= 21 || currentTime < 5) {
        backgroundImage = '../img/bg/bg_off.webp';
    } else {
        backgroundImage = '../img/bg/bg_day.webp';
    }
    background.style.backgroundImage = `url(${backgroundImage})`;
    console.log('Time: ' + currentTime + ' | Background: ' + backgroundImage);
}

setBackground();
setInterval(setBackground, 60000);

function playMambo() {
    Mambo.play();
}

function playTachyon() {
    Tachyon.play();
}

function playWeii() {
    const helios = document.getElementById('helios');
    const regularHelios = "img/helios.webp"
    const weiiHelios = "img/weii_helios.webp"
    Weii.play();
    helios.src = weiiHelios;
    setTimeout(() => {
        helios.src = regularHelios;
    }, 1000);
}

function dailyVoiceActor() {
    const voiceActors = [
        {name: "Rin Banapple", character: "Trainer", image: '../img/umas/trainer_placeholder.webp'},
    ];
}