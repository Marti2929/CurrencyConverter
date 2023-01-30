{
    const calculate = () => {
        const plnElement = document.querySelector(".js-pln");
        const rateElement = document.querySelector(".js-rate");

        const pln = plnElement.value;
        const rate = rateElement.value;

        euro = pln * rate;

        result(euro);
    };

    const result = (euro) => {
        const euroElement = document.querySelector(".js-euro");
        euroElement.innerText = euro.toFixed(2);
    };

    const init = () => {
        const button = document.querySelector(".js-button");
        button.addEventListener("click", calculate);
    };

    init();
}