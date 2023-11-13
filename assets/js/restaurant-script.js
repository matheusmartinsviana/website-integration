function valueToPay() {
    let priceKg = Number(document.querySelector('#inPriceKg').value);
    let gram = Number(document.querySelector('#inGram').value);
    let valueToPay = gram * priceKg / 1000;

    let outValueToPay = document.querySelector('#outValueToPay');
    outValueToPay.innerText = `Value to pay $: ${valueToPay}`; 
}

let button = document.querySelector('#button');
button.addEventListener('click', function () {
    valueToPay();
});



