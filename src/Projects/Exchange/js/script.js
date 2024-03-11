const currencyOne = document.querySelector("#currency-one");
const currencyTwo = document.querySelector("#currency-two");
const amountOne = document.querySelector(".amount-one");
const amountTwo = document.querySelector(".amount-two");
const swapBtn = document.querySelector(".swap");
const rateInfo = document.querySelector(".rate-info");

const calculate = () => {
	fetch(`https://open.er-api.com/v6/latest/${currencyOne.value}`)
		.then((res) => res.json())
		.then((data) => {
			const currency1 = currencyOne.value;
			const currency2 = currencyTwo.value;

			const rate = data.rates[currency2];
			rateInfo.textContent = `1 ${currency1} = ${rate.toFixed(4)}${currency2}`;

			amountTwo.value = (amountOne.value * rate).toFixed(4);
		});
};

const swap = () => {
	const oldValue = currencyOne.value;

	currencyOne.value = currencyTwo.value;
	currencyTwo.value = oldValue;
	calculate();
};

currencyOne.addEventListener("change", calculate);
currencyTwo.addEventListener("change", calculate);
amountOne.addEventListener("input", calculate);
swapBtn.addEventListener("click", swap);
calculate();
