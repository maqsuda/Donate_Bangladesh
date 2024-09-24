
document.getElementById('btn-noa-donate-now').addEventListener('click', function (event) {
    event.preventDefault();
    let availableAmount = getTextFieldById('available-amount');
    let noaAmount = getTextFieldById('noa-amount');

    let inputNoaAmount = getInputFieldById('input-noa-amount');

    if ((parseFloat(inputNoaAmount) !== NaN) && (parseFloat(inputNoaAmount) >= 0)) {
        availableAmount = availableAmount - inputNoaAmount;
        document.getElementById('available-amount').innerText = availableAmount;

        noaAmount = noaAmount + inputNoaAmount;
        document.getElementById('noa-amount').innerText = noaAmount;
        document.getElementById('my_modal_5').showModal();

        let historyTransaction = inputNoaAmount + " Taka is " + document.getElementById('title-noa').innerText;

        let d = getDateTime();

        // Add Text
        const str = ["border", "rounded-lg", "p-4", "m-4", "font-bold"];
        const p = document.createElement('p');

         p.innerText = ` ${historyTransaction} \nDate : ${d} `;
     
        console.log(p);

        for (let s of str) {
            p.classList.add(s);
        }
          document.getElementById('transaction-container').appendChild(p);
    } else {
        alert('Please input positive number !...');
    }

});


document.getElementById('btn-donate').addEventListener('click', function (event) {
    event.preventDefault();
    showSelectionById('donate-section');
    showButtonColorById('btn-donate');
});

document.getElementById('btn-history').addEventListener('click', function (event) {
    event.preventDefault();
     showSelectionById('history-section');
     showButtonColorById('btn-history');

    console.log('Test');
});

document.getElementById('blog').addEventListener('click', function () {
    window.open("blog.html");
});


