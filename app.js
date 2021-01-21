const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
];

const weekdays = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
const messageTime = document.querySelector('.messageTime');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');
const playbtn = document.querySelector('.playbtn');
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

let futureDate = new Date(2021, 0, 22, 0, 0, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
let month = futureDate.getMonth();
month = months[month];
const weekday = weekdays[futureDate.getDay()];
const date = futureDate.getDate();
const futureTime = futureDate.getTime();
function getRemaindingTime() {
	const today = new Date().getTime();
	const t = futureTime - today;
	const oneDay = 24 * 60 * 60 * 1000;
	const oneHour = 60 * 60 * 1000;
	const oneMinute = 60 * 1000;
	let days = t / oneDay;
	days = Math.floor(days);
	let hours = Math.floor((t % oneDay) / oneHour);
	let minutes = Math.floor((t % oneHour) / oneMinute);
	let seconds = Math.floor((t % oneMinute) / 1000);
	const values = [ days, hours, minutes, seconds ];
	function format(item) {
		if (item < 10) {
			return (item = `0${item}`);
		}
		return item;
	}
	items.forEach(function(item, index) {
		item.innerHTML = format(values[index]);
	});
	if (t < 0) {
		clearInterval(countdown);
		items.forEach(function(item) {
			item.innerHTML = '00';
		});
		playbtn.style.display = 'block';
	}
}
let countdown = setInterval(getRemaindingTime, 1000);
getRemaindingTime();

const video = document.querySelector('.video-container');
video.style.opacity = 0;
playbtn.addEventListener('click', function() {
	video.play();
	setTimeout(() => (video.style.opacity = 1), 2000);
	setTimeout(() => (video.style.opacity = 0), 14200);
	setTimeout(() => {
		messageTime.textContent = ` Amelie et Sedki te souhaitent un joyeux anniversaire!`;
		deadline.style.display = 'none';
	}, 3300);
});
