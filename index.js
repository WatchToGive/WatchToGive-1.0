const watchAdsButton = document.getElementById('watchAdsButton');
const overlay = document.getElementById('overlay');
const advertisementVideo = document.getElementById('advertisementVideo');
const thankYouPopup = document.getElementById('thankYouPopup');
const closeThankYouButton = document.getElementById('closeThankYouButton');
const adCountElement = document.getElementById('adCount');

let adCount = 0;

// Funktion zum Aktivieren des Vollbildmodus
function openFullscreen() {
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) { // Firefox
        document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari und Opera
        document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
        document.documentElement.msRequestFullscreen();
    }
}

// Funktion zum Schließen des Vollbildmodus
function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { // Chrome, Safari und Opera
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // IE/Edge
        document.msExitFullscreen();
    }
}

// Anzeigen des Overlays und Start des Videos
watchAdsButton.addEventListener('click', () => {
    overlay.style.display = 'block';
    advertisementVideo.play();
    openFullscreen(); // Aktiviert den Vollbildmodus für das Video
});

// Video-Event-Listener
advertisementVideo.addEventListener('ended', () => {
    overlay.style.display = 'none'; // Schließt das Overlay
    closeFullscreen(); // Schließt den Vollbildmodus der Webseite

    setTimeout(() => {
        thankYouPopup.classList.add('show'); // Zeigt das Dankespopup
        adCount++; // Erhöht den Counter
        adCountElement.textContent = adCount; // Aktualisiert den Zähler
    }, 10); // 10ms Verzögerung
});

// Popup schließen
closeThankYouButton.addEventListener('click', () => {
    thankYouPopup.classList.remove('show');
    setTimeout(() => {
        thankYouPopup.classList.remove('show'); // Entfernt das Popup nach 3 Sekunden
    }, 3000);
});

// Event Listener für Menüpunkte
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', openFullscreen); // Aktiviert Vollbild beim Klicken auf einen Menüpunkt
});
