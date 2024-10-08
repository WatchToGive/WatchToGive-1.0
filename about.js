const adCountElement = document.getElementById('adCount');
let count = 0;

// Load initial ad count from local storage
function loadAdCount() {
    const savedCount = localStorage.getItem('adCount');
    if (savedCount) {
        count = parseInt(savedCount);
        adCountElement.textContent = count.toLocaleString();
    }
}

// Save ad count to local storage
function saveAdCount() {
    localStorage.setItem('adCount', count);
}

// Increment ad count by a random value (1 to 5)
function incrementAdCount() {
    const increment = Math.floor(Math.random() * 5) + 1; // Random value between 1 and 5
    count += increment;
    adCountElement.textContent = count.toLocaleString();
    saveAdCount();
}

// Load ad count on page load
loadAdCount();

// Increment counter every second
setInterval(incrementAdCount, 1000);
