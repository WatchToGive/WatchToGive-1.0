const watchAdsButton = document.getElementById('watchAdsButton');
const overlay = document.getElementById('overlay');
const thankYouPopup = document.getElementById('thankYouPopup');
const closeThankYouButton = document.getElementById('closeThankYouButton');
const adCount = document.getElementById('adCount');
const advertisementVideo = document.getElementById('advertisementVideo');

let count = 0;

// Funktion zum Speichern des Ad-Counts in localStorage
function saveAdCount() {
    localStorage.setItem('adCount', count);
}

// Funktion zum Laden des Ad-Counts von localStorage
function loadAdCount() {
    const savedCount = localStorage.getItem('adCount');
    if (savedCount) {
        count = parseInt(savedCount);
        adCount.textContent = count.toLocaleString();
    }
}

// Funktion zum Erhöhen des Ad-Counts
function increaseAdCount(increment = 1) {
    count += increment;
    adCount.textContent = count.toLocaleString();
    saveAdCount();
}

// Simuliert alle 1 Sekunde eine zufällige Zunahme des Ad-Counts
setInterval(() => {
    const randomIncrement = Math.floor(Math.random() * 5) + 1;
    increaseAdCount(randomIncrement);
}, 1000);

// Eventlistener für das Klicken des Watch Ads Buttons
watchAdsButton.addEventListener('click', function (event) {
    event.preventDefault();
    overlay.style.display = 'block';
    advertisementVideo.style.display = 'block';
    advertisementVideo.play();

    if (advertisementVideo.requestFullscreen) {
        advertisementVideo.requestFullscreen();
    } else if (advertisementVideo.mozRequestFullScreen) {
        advertisementVideo.mozRequestFullScreen();
    } else if (advertisementVideo.webkitRequestFullscreen) {
        advertisementVideo.webkitRequestFullscreen();
    } else if (advertisementVideo.msRequestFullscreen) {
        advertisementVideo.msRequestFullscreen();
    }

    increaseAdCount(1);
});

// Funktion zum Anzeigen und automatischen Schließen des Thank You Popups
function showThankYouPopup() {
    thankYouPopup.classList.remove('hide');
    thankYouPopup.classList.add('show');
    
    setTimeout(() => {
        thankYouPopup.classList.remove('show');
        thankYouPopup.classList.add('hide');
    }, 3000); // Popup bleibt 3 Sekunden sichtbar
}

// Eventlistener für das Ende des Videos
advertisementVideo.addEventListener('ended', function () {
    overlay.style.display = 'none';
    showThankYouPopup();
});

// Eventlistener für den Close-Button des Popups
closeThankYouButton.addEventListener('click', function () {
    overlay.style.display = 'none';
    thankYouPopup.style.display = 'none';
    advertisementVideo.style.display = 'none';
});

// Lädt den Ad-Count beim Seitenaufruf
loadAdCount();
