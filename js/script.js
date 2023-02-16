{
    const updateResultText = (result) => {
        const resultElement = document.querySelector(".js-result");

        resultElement.innerText = result.toFixed(2);
    };

    const calculate = (rate) => {
        const plnElement = document.querySelector(".js-pln");
        const currencyElement = document.querySelector(".js-currency");

        const pln = plnElement.value;
        const currency = currencyElement.value;

        const result = pln / getCurrencyRate(currency);

        updateResultText(result);
    };
    
    const getCurrencyRate = (currency) => {
        switch (currency) {
            case "euro":
                return 4.7;
            case "dollar":
                return 4.31;
            case "funt":
                return 5.3;
        }
    };
    
    const init = () => {
        const button = document.querySelector(".js-button");

        button.addEventListener("click", calculate);
    };

    init();
}