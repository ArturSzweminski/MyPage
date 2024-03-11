const price = document.querySelector("#price");
const people = document.querySelector("#people");
const tip = document.querySelector("#tip");
const countBtn = document.querySelector(".count");
const error = document.querySelector(".error");
const costInfo = document.querySelector(".cost-info");
const cost = document.querySelector(".cost");
const currency=document.querySelector('#currency')

const showBill = () => {
	if (price.value == "" || people.value == "" || tip.value == 0 || currency.value==0 ) {
		error.textContent = "Fill in all fields!";
	} else {
		error.textContent = "";
		countBill();
	}
};
const countBill = () => {
	const newPrice = parseFloat(price.value);
	const newPeople = parseInt(people.value);
	const newTip = parseFloat(tip.value);

	const sum = (newPrice + newPrice * newTip) / newPeople;
	costInfo.style.display = "block";

	// cost.textContent = sum.toFixed(2);
	costInfo.textContent =
		`You should contribute equally ${sum.toFixed(2)} ${currency.value} ;)`;
};


countBtn.addEventListener("click", showBill);
