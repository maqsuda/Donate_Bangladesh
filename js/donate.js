
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

let historyTransaction=inputNoakhaliAmount+" "+document.getElementById('title-noakhali').innerText;


    } else {
        alert('Please input positive number !...');
    }
})


document.getElementById('btn-donate').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('btn-history').classList.remove('bg-[#B4F461]');
    document.getElementById('btn-donate').classList.add('bg-[#B4F461]');
    document.getElementById('donate-section').removeAttribute('hidden');
    document.getElementById('history-section').setAttribute('hidden', true);

});

document.getElementById('btn-history').addEventListener('click', function (event) {
    event.preventDefault();

    document.getElementById('btn-donate').classList.remove('bg-[#B4F461]');
    document.getElementById('btn-history').classList.add('bg-[#B4F461]');

    document.getElementById('history-section').removeAttribute('hidden');
    document.getElementById('donate-section').setAttribute('hidden', true);
});
