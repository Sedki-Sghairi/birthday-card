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
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
// const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);
// let futureDate = new Date(2021, 0, 20, 18, 50, 0);
let futureDate = new Date(2021, 0, 22, 0, 0, 0);
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
let month = futureDate.getMonth();
month = months[month];
const weekday = weekdays[futureDate.getDay()];
const date = futureDate.getDate();
messageTime.textContent = `you can see the actual content of this page on: ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;
function getRemaindingTime(x) {
	const futureTime = x.getTime();
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
		deadline.innerHTML = `<h4 class="expired">this messageTime has expired!</h4>`;
		setTimeout(console.log('ok'), 5000);
	}
}
let countdown = setInterval(() => getRemaindingTime(futureDate), 1000);
getRemaindingTime(futureDate);

const playbtn = document.querySelector('.switch-btn');
const video = document.querySelector('.video-container');

playbtn.addEventListener('click', function() {
	video.play();
});

// window.addEventListener('load', function() {
// 	preloader.classList.add('hide-preloader');
// });
