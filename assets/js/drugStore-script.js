function offer() {
    let medicine = document.querySelector('#inMedicine').value;
    let price = Number(document.querySelector('#inPrice').value);
    let offerPrice = price*2;
    offerPrice = Math.floor(offerPrice);

    // Saída de dados
    let outTittle = document.querySelector('#outTittle');
    let outOfferPrice = document.querySelector('#outOfferPrice');
    
    outTittle.innerText = `Offer for ${medicine}`; 
    outOfferPrice.innerText = `get 2 for just $: ${offerPrice}`;
}

let button = document.querySelector('#button');
button.addEventListener('click', function () {
    offer();
});



