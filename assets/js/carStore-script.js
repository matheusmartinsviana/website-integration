function offer() {
    let model = document.querySelector('#inModel').value;
    let price = Number(document.querySelector('#inPrice').value);
    let middlePrice = price/2;
    let mensalPrice = middlePrice/12;
    mensalPrice = Math.round(mensalPrice);

    // Saída de dados
    let outOffer = document.querySelector('#outOffer');
    let outPrice = document.querySelector('#outPay');
    let outMensalPrice = document.querySelector('#outMensalPrice');
    
    outOffer.innerText = `Offer: ${model}`; 
    outPrice.innerText = `First pay of $: ${middlePrice}`; 
    outMensalPrice.innerText = `+12x of $: ${mensalPrice}`;
}

let button = document.querySelector('#button');
button.addEventListener('click', function () {
    offer();
});



