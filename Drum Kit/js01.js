const keys = Array.from(document.querySelectorAll('.key'));


function playAndChangeStyle(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`[data-key="${e.keyCode}"]`);

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
};

function restoreStyle(e) {
    e.target.classList.remove('playing')
}

window.addEventListener('keydown', playAndChangeStyle);

keys.forEach(key =>
    key.addEventListener('transitionend', restoreStyle)
);