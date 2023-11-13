function showUsageValue() {
    let perMinute = Number(document.querySelector('#inValuePerUse').value);
    let usageTime = Number(document.querySelector('#inUsage').value);

    let periods = Math.ceil(usageTime / 15);
    let priceToPay = periods * 15 * perMinute / 15;

    let outValue = document.querySelector('#outValueToPay');
    outValue.innerText = `Value To pay $: ${priceToPay.toFixed(2)}`;
}

let button = document.querySelector('#button');
button.addEventListener('click', function () {
    showUsageValue();
});



