const watchAdsButton = document.getElementById('watchAdsButton');
const overlay = document.getElementById('overlay');
const thankYouPopup = document.getElementById('thankYouPopup');
const closeThankYouButton = document.getElementById('closeThankYouButton');
const adCount = document.getElementById('adCount');
const advertisementVideo = document.getElementById('advertisementVideo');

let count = 0;

// Funktion zum Speichern der AdCount im localStorage
function saveAdCount() {
    localStorage.setItem('adCount', count);
}

// Funktion zum Laden des AdCounts
function loadAdCount() {
    const savedCount = localStorage.getItem('adCount');
    if (savedCount) {
        count = parseInt(savedCount);
        adCount.textContent = count.toLocaleString();
    }
}

// Funktion zur Erhöhung des AdCounts
function increaseAdCount(increment = 1) {
    count += increment;
    adCount.textContent = count.toLocaleString();
    saveAdCount();
}

// Zähler für die Anzeigenaufrufe erhöhen
setInterval(() => {
    const randomIncrement = Math.floor(Math.random() * 5) + 1; // Zufällige Zahl zwischen 1 und 5
    increaseAdCount(randomIncrement);
}, 1000); // Erhöhen jede Sekunde

// Funktionalität für den Watch Ads-Button
watchAdsButton.addEventListener('click', function (event) {
    event.preventDefault();
    overlay.style.display = 'block';
    advertisementVideo.style.display = 'block';
    advertisementVideo.play();
    
    // Video im Vollbildmodus abspielen
    if (advertisementVideo.requestFullscreen) {
        advertisementVideo.requestFullscreen();
    } else if (advertisementVideo.mozRequestFullScreen) { // Firefox
        advertisementVideo.mozRequestFullScreen();
    } else if (advertisementVideo.webkitRequestFullscreen) { // Chrome, Safari und Opera
        advertisementVideo.webkitRequestFullscreen();
    } else if (advertisementVideo.msRequestFullscreen) { // IE/Edge
        advertisementVideo.msRequestFullscreen();
    }

    increaseAdCount(1);
});

// Schließen des Thank You Popups
closeThankYouButton.addEventListener('click', function () {
    overlay.style.display = 'none';
    thankYouPopup.style.display = 'none';
    advertisementVideo.style.display = 'none';
});

// Ereignis, wenn das Video endet
advertisementVideo.addEventListener('ended', function () {
    overlay.style.display = 'none';
    thankYouPopup.style.display = 'block';
});

// Lade den anfänglichen AdCount
loadAdCount();

// Aktivierung des aktuellen Links
const links = document.querySelectorAll('.nav-link');
const currentPage = window.location.pathname.split('/').pop() || "index.html";

links.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});
