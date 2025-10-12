const btn = document.getElementById('revealBtn');
const msg = document.getElementById('secretMessage');
const player = document.getElementById('youtubePlayer');

btn.addEventListener('click', () => {
  msg.classList.remove('hidden');
  player.classList.remove('hidden');
});