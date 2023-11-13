function calculo() {
    let tittle = document.querySelector('#inTittle').value;
    let duration = Number(document.querySelector('#inDuration').value);

    let hour = Math.floor(duration / 60);
    let minute = duration % 60;

    // out
    let outTittle = document.querySelector('#messageTittle');
    let outTime = document.querySelector('#messageTime');

    outTittle.innerText = `Tittle: ${tittle}`;
    outTime.innerText = `Duration to hour: ${hour} hour(s) e ${minute} minute(s)`;
}

let button = document.querySelector('#button');
button.addEventListener('click', function () {
    calculo();
});
