document.addEventListener("DOMContentLoaded", function () {
    const ribbonLeft = document.querySelector('.ribbon-left');
    const ribbonRight = document.querySelector('.ribbon-right');
    const scissor = document.querySelector('.scissor');
    const cover = document.querySelector('.cover');
    const letterContent = document.querySelector('.letter-content');
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const question = document.querySelector('.question');

    // Function to trigger the cut animation
    function triggerCutAnimation() {
        // Move the scissor to the right
        scissor.style.left = '530px';

        // Cut the ribbons
        ribbonLeft.classList.add('cut-left');
        ribbonRight.classList.add('cut-right');

        // Flip and fade out the cover
        setTimeout(() => {
            cover.style.transform = 'rotateX(180deg)';
            cover.style.opacity = '0';
        }, 1000);

        // Show the letter content
        setTimeout(() => {
            letterContent.classList.add('content-visible');
            question.style.display = 'block';
        }, 1500);
    }

    // Add event listeners to both ribbons
    ribbonLeft.addEventListener('click', triggerCutAnimation);
    ribbonRight.addEventListener('click', triggerCutAnimation);
    ribbonLeft.addEventListener('touchstart', triggerCutAnimation);
    ribbonRight.addEventListener('touchstart', triggerCutAnimation);

    // Optional: Add event listener to the scissor (if you still want it to work)
    scissor.addEventListener('click', triggerCutAnimation);

    // "No" Button Movement - Moves Smoothly on Hover
    noBtn.addEventListener('click', () => {
        let maxX = letterContent.offsetWidth - noBtn.offsetWidth - 20;
        let maxY = letterContent.offsetHeight - noBtn.offsetHeight - 20;

        let randomX = Math.random() * maxX;
        let randomY = Math.random() * maxY;

        noBtn.style.position = "absolute";
        noBtn.style.left = `${randomX}px`;
        noBtn.style.top = `${randomY}px`;
        noBtn.style.transition = "all 0.3s ease-out";
    });

    // "Yes" Button Click - Love Animation
    yesBtn.addEventListener('click', () => {
        letterContent.innerHTML = '<h1 class="love-text">Yay! I love you too! 💖</h1>';
        letterContent.style.justifyContent = 'center';
        letterContent.style.alignItems = 'center';
        startHeartAnimation();
    });

    // Heart Animation Function
    function startHeartAnimation() {
        for (let i = 0; i < 50; i++) {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.innerHTML = '💖';
            heart.style.left = `${Math.random() * 100}vw`;
            heart.style.animationDuration = `${Math.random() * 2 + 1}s`;
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 3000);
        }
    }
});