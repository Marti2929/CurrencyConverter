const calculate = () => {
    const plnElement = document.querySelector(".js-pln");
    const rateElement = document.querySelector(".js-rate");
    const euroElement = document.querySelector(".js-euro");

    const pln = plnElement.value;
    const rate = rateElement.value;

    euro = pln * rate;

    euroElement.innerText = euro.toFixed(2);
}

const action = () => {
    const button = document.querySelector(".button");
    button.addEventListener("click", calculate);
}

action();