{
    const calculate = () => {
        const plnElement = document.querySelector(".js-pln");
        const currencyElement = document.querySelector(".js-currency");
        
        const pln = plnElement.value;
        
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
        
        result = pln / rate;

        resultFinal(result);
    };

    const resultFinal = (result) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerText = result.toFixed(2);
    };

    const init = () => {
        const button = document.querySelector(".js-button");
        button.addEventListener("click", calculate);
    };

    init();
}