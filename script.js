const watchAdsButton = document.getElementById('watchAdsButton');
const overlay = document.getElementById('overlay');
const thankYouPopup = document.getElementById('thankYouPopup');
const closeThankYouButton = document.getElementById('closeThankYouButton');
const adCount = document.getElementById('adCount');
const rickAstleyVideo = document.getElementById('rickAstleyVideo');

let count = 0;

function saveAdCount() {
    localStorage.setItem('adCount', count);
}

function loadAdCount() {
    const savedCount = localStorage.getItem('adCount');
    if (savedCount) {
        count = parseInt(savedCount);
        adCount.textContent = count.toLocaleString();
    }
}

function increaseAdCount(increment = 1) {
    count += increment;
    adCount.textContent = count.toLocaleString();
    saveAdCount();
}

// Watch Ads button functionality
watchAdsButton.addEventListener('click', function (event) {
    event.preventDefault();
    overlay.style.display = 'block';
    rickAstleyVideo.style.display = 'block';
    rickAstleyVideo.play();
    increaseAdCount(1);
});

// Close Thank You Popup
closeThankYouButton.addEventListener('click', function () {
    overlay.style.display = 'none';
    thankYouPopup.style.display = 'none';
    rickAstleyVideo.style.display = 'none';
});

// Video ended event
rickAstleyVideo.addEventListener('ended', function () {
    overlay.style.display = 'none';
    thankYouPopup.style.display = 'block';
});

// Load initial ad count
loadAdCount();

const links = document.querySelectorAll('.nav-link');
const currentPage = window.location.pathname.split('/').pop() || "index.html";

links.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});
