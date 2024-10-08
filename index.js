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

// Funktion zum Aktivieren des Vollbildmodus
function enterFullScreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { // Firefox
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { // Chrome, Safari, Opera
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { // IE/Edge
        element.msRequestFullscreen();
    }
}

// Funktion zum Verlassen des Vollbildmodus
function exitFullScreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { // Chrome, Safari, Opera
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // IE/Edge
        document.msExitFullscreen();
    }
}

// Eventlistener für das Klicken des Watch Ads Buttons
watchAdsButton.addEventListener('click', function (event) {
    event.preventDefault();
    overlay.style.display = 'block';
    advertisementVideo.style.display = 'block';
    advertisementVideo.play();

    // Vollbildmodus für das Video aktivieren
    enterFullScreen(advertisementVideo);

    increaseAdCount(1);
});

// Funktion zum Anzeigen des Dankeschön-Popups
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
    advertisementVideo.style.display = 'none';

    // Vollbildmodus für das Video verlassen
    exitFullScreen();

    // Sofort nach Verlassen des Videovollbilds den normalen Vollbildmodus für die Seite aktivieren
    enterFullScreen(document.documentElement);

    // Sofort das Dankeschön-Popup anzeigen
    showThankYouPopup();
});

// Eventlistener für den Close-Button des Popups
closeThankYouButton.addEventListener('click', function () {
    overlay.style.display = 'none';
    thankYouPopup.style.display = 'none';
    advertisementVideo.style.display = 'none';

    // Sicherstellen, dass der normale Vollbildmodus verlassen wird, falls aktiviert
    exitFullScreen();
});

// ESC-Taste gedrückt: Vollbildmodus verlassen und Overlay schließen
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        overlay.style.display = 'none'; // Overlay schließen
        thankYouPopup.style.display = 'none'; // Popup schließen
        advertisementVideo.pause(); // Video pausieren
        advertisementVideo.style.display = 'none'; // Video verstecken

        // Sicherstellen, dass der Vollbildmodus verlassen wird
        exitFullScreen();
    }
});

// Lädt den Ad-Count beim Seitenaufruf
loadAdCount();
