function nextPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.container').forEach(page => {
        page.classList.add('hidden');
    });

    // Show the selected page
    document.getElementById(pageId).classList.remove('hidden');
}

function moveNoButton() {
    const noButton = document.getElementById('noButton') || document.getElementById('noButton2');
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
    noButton.style.position = 'absolute';
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
}

// Add falling hearts
const heartsBackground = document.querySelector('.hearts-background');
for (let i = 0; i < 50; i++) {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'absolute';
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.fontSize = `${Math.random() * 2 + 1}rem`;
    heart.style.animationDuration = `${Math.random() * 5 + 5}s`;
    heartsBackground.appendChild(heart);
}