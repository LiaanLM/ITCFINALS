document.addEventListener('DOMContentLoaded', () => {
    const video = document.querySelector('#backgroundVideo');
    const audioToggleBtn = document.querySelector('#audioToggleBtn');

    // Initialize button text
    audioToggleBtn.textContent = video.muted ? 'Unmute' : 'Mute';

    // Toggle mute state
    audioToggleBtn.addEventListener('click', () => {
        video.muted = !video.muted;
        audioToggleBtn.textContent = video.muted ? 'Unmute' : 'Mute';
    });
});
