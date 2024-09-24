
document.getElementById('btn-noakhali-donate-now').addEventListener('click', function (event) {
    event.preventDefault();
    let availableAmount = getTextFieldById('available-amount');
    let noakhaliAmount = getTextFieldById('noakhali-amount');

    let inputNoakhaliAmount = getInputFieldById('input-noakhali-amount');

    if ((parseFloat(inputNoakhaliAmount) !== NaN) && (parseFloat(inputNoakhaliAmount) >= 0)) {
        availableAmount = availableAmount - inputNoakhaliAmount;
        document.getElementById('available-amount').innerText = availableAmount;

        noakhaliAmount = noakhaliAmount + inputNoakhaliAmount;
        document.getElementById('noakhali-amount').innerText = noakhaliAmount;
        document.getElementById('my_modal_5').showModal();

        let historyTransaction = inputNoakhaliAmount + " Taka is " + document.getElementById('title-noakhali').innerText;

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







document.getElementById('btn-donate').addEventListener('click', function(event) {
    event.preventDefault();
    showSelectionById('donate-section');
    showButtonColorById('btn-donate');
});

document.getElementById('btn-history').addEventListener('click', function(event) {
    event.preventDefault();
    showSelectionById('history-section');
    showButtonColorById('btn-history');
});

document.getElementById('blog').addEventListener('click',function(){
    window.open("blog.html");
});


