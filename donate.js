document.getElementById('donate-button').onclick = function () {
    const amount = document.getElementById('amount').value;
    if (amount && amount > 0) {
        document.getElementById('donation-amount').innerText = parseFloat(amount).toFixed(2);
        document.getElementById('thank-you-message').style.display = 'block';

        // Progress bar update
        const targetAmount = 5000; // Example target amount
        const progressBar = document.getElementById('progress-bar');
        const progressPercentage = Math.min((amount / targetAmount) * 100, 100); // Limit to 100%
        progressBar.style.width = progressPercentage + '%';
    } else {
        alert('Please enter a valid donation amount.');
    }
};

document.getElementById('submit-donation').onclick = function () {
    const name = document.getElementById('donor-name').value || 'Anonymous';
    const email = document.getElementById('donor-email').value || 'Not Provided';
    document.getElementById('donor-name-display').innerText = name;
    document.getElementById('donor-email-display').innerText = email;
    alert('Donation Submitted!');
};

const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click', function () {
        this.classList.toggle('active');
    });
});

document.getElementById('subscribe-button').onclick = function () {
    const newsletterEmail = document.getElementById('newsletter-email').value;
    if (newsletterEmail) {
        alert('Thank you for subscribing, ' + newsletterEmail + '!');
        document.getElementById('newsletter-email').value = '';
    } else {
        alert('Please enter your email to subscribe.');
    }
};
