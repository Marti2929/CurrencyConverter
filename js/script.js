let plnElement = document.querySelector(".js-pln");
let rateElement = document.querySelector(".js-rate");
let button = document.querySelector(".button");
let euroElement = document.querySelector(".js-euro");

button.addEventListener("click", () => {
    let pln = plnElement.value;
    let rate = rateElement.value;

    euro =  pln * rate;
    
    euroElement.innerText = euro.toFixed(2);
})