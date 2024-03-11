const settings = document.querySelector(".settings");
const settingsBtn = document.querySelector(".settings-btn");
const imageSection = document.querySelector(".image-section");

const eventName = document.querySelector("#event-name");
const eventDay = document.querySelector("#event-day");
const eventMonth = document.querySelector("#event-month");
const eventYear = document.querySelector("#event-year");
const eventImg = document.querySelector("#event-image");

const daysCount = document.querySelector(".days-count");
const hoursCount = document.querySelector(".hours-count");
const minutesCount = document.querySelector(".minutes-count");
const secondCount = document.querySelector(".seconds-count");

const image = document.querySelector(".image");
const saveBtn = document.querySelector(".save");
const eventSpan = document.querySelector(".event");

let usersTime;

const setTime = () => {
	const currentTime = new Date();
	const result = usersTime - currentTime;
	const days = Math.floor(result / 1000 / 60 / 60 / 24);
	const hours = Math.floor(result / 1000 / 60 / 60) % 24;
	const minutes = Math.floor(result / 1000 / 60) % 60;
	const seconds = Math.floor(result / 1000) % 60;

	daysCount.textContent = days;
	hoursCount.textContent = hours;
	minutesCount.textContent = minutes;
	secondCount.textContent = seconds;
};

const changeImg = () => {
	imageSection.style.backgroundImage = `url('${eventImg.value}')`;
};
const appUpdate = () => {
	eventSpan.textContent = eventName.value;
	usersTime = new Date(
		`${eventMonth.value} ${eventDay.value} ${eventYear.value}`
	);

	if (eventImg.value !== "") {
		imageSection.style.backgroundImage = `url('${eventImg.value}')`;
		console.log(`url('${eventImg.value}')`);
	} 

	setTime();
};

settingsBtn.addEventListener("click", () => {
	settings.classList.toggle("active");
});
saveBtn.addEventListener("click", appUpdate);

appUpdate();
setInterval(setTime, 1000);
