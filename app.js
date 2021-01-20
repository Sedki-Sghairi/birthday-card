const btn = document.querySelector('.switch-btn');
const video = document.querySelector('.video-container');

btn.addEventListener('click', function() {
	video.play();
});

// window.addEventListener('load', function() {
// 	preloader.classList.add('hide-preloader');
// });
