function getInputFieldById(id) {
    let amount = document.getElementById(id).value;
    amount = parseFloat(amount);
    return amount;
}

function getTextFieldById(id) {
    let amount = document.getElementById(id).innerText;
    amount = parseFloat(amount);
    return amount;
}

function getDateTime() {
    let now = new Date();
    let dateTime = now.toLocaleString();
    return dateTime;
}

function getDonateAmount(){


}




function showSelectionById(id) {
    document.getElementById('donate-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}

function showButtonColorById(id) {
    document.getElementById('btn-donate').classList.remove('bg-[#B4F461]');
    document.getElementById('btn-history').classList.remove('bg-[#B4F461]');
    document.getElementById(id).classList.add('bg-[#B4F461]');
 
}

