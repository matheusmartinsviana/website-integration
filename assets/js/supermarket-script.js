function offer() {
    let productName = Number(document.querySelector('#inProduct').value);
    let productPrice = Number(document.querySelector('#inPrice').value);
    let finalPrice = productPrice / 2;
    let productPriceOffer = productPrice * 3 - finalPrice;

    let outOfferTittle = document.querySelector('#outOfferTittle');
    let outOffer = document.querySelector('#outOffer');
    outOfferTittle.innerText = `${productName}Offer take 3 per just ${productPriceOffer}`; 
    outOffer.innerText = `You will pay just $: ${finalPrice} in your third product`; 
}

let button = document.querySelector('#button');
button.addEventListener('click', function () {
    offer();
});



