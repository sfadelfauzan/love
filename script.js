const heart = document.querySelector('.heart');

// Hati mengikuti posisi mouse
document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
});
