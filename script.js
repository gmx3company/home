document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Thank you for your message!');
            contactForm.reset();
        });
    }

    const statusText = document.querySelector('[data-rotating-text]');
    if (!statusText) {
        return;
    }

    const phrases = [
        'In the works',
        'On the way',
        'Coming soon',
        'Updates ahead',
        'Please be patient',
        'Almost ready',
        "Something's brewing",
        'Stay patient',
        'On the horizon',
        'Taking shape',
        'In progress',
        'Underway',
        'Building now',
        'Coming together',
        'Getting closer',
        'Nearly there',
        'Worth the wait',
        'Behind the scenes'
    ];

    let current = statusText.textContent.trim();
    if (current.endsWith('...')) {
        current = current.replace(/\.{3}\s*$/, '');
        statusText.textContent = current;
    }

    function randomDelay() {
        return 3000 + Math.floor(Math.random() * 2000);
    }

    function pickNextPhrase() {
        if (phrases.length <= 1) {
            return current;
        }
        let next = current;
        while (next === current) {
            next = phrases[Math.floor(Math.random() * phrases.length)];
        }
        return next;
    }

    function scheduleNext() {
        window.setTimeout(function() {
            current = pickNextPhrase();
            statusText.textContent = current;
            scheduleNext();
        }, randomDelay());
    }

    scheduleNext();
});
