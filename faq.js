// Aktivierung des aktuellen Links
const links = document.querySelectorAll('.nav-link');
const currentPage = window.location.pathname.split('/').pop(); // Aktueller Seitenname

links.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});

// Funktionalität für die FAQ-Items
const faqs = document.querySelectorAll('.faq-item h3');
faqs.forEach(faq => {
    faq.addEventListener('click', function () {
        const answer = this.nextElementSibling; // Das zugehörige <p> Element
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block'; // Toggle Antwort
    });
});
