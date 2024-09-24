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

