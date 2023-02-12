{
    const updateResultText = (result) => {
        const resultElement = document.querySelector(".js-result");

        resultElement.innerText = result.toFixed(2);
    };

    const calculate = (rate) => {
        const plnElement = document.querySelector(".js-pln");

        const pln = plnElement.value;

        result = pln / rate;

        updateResultText(result);
    };
    
    const getCurrencyRate = () => {
        const currencyElement = document.querySelector(".js-currency");

        let currency = currencyElement.value;

        switch (currency) {
            case "euro":
                rate = 4.7;
                break;
            case "dollar":
                rate = 4.31;
                break;
            case "funt":
                rate = 5.3;
                break;
        }

        calculate(rate);
    };
    
    const init = () => {
        const button = document.querySelector(".js-button");

        button.addEventListener("click", getCurrencyRate);
    };

    init();
}