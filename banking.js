// function for take input from input field

function getInputValue(inputId) {
    const inputField = document.getElementById(inputId)

    const inputFieldText = inputField.value;

    const inputFieldAmount = parseFloat(inputFieldText)
    inputField.value = '';

    return inputFieldAmount

}

// function for previous amount 

function getFieldAmount(amountId, amountInput) {
    const previousAmount = document.getElementById(amountId);
    const previousAmountText = previousAmount.innerText;
    const previousAmountValue = parseFloat(previousAmountText)


    previousAmount.innerText = previousAmountValue + amountInput;


}

// funtion for balance update

function updateBalance(balanceId, amount) {
    const previousBalance = document.getElementById(balanceId);
    const previousBalanceText = previousBalance.innerText;
    const previousBalanceValue = parseFloat(previousBalanceText);


    previousBalance.innerText = previousBalanceValue + amount;



}

// add event hanler for deposite button

document.getElementById("deposite-button").addEventListener('click', function () {
    const depositInput = getInputValue("deposit-input")

    getFieldAmount("previous-deposit", depositInput)

    updateBalance("previous-balance", depositInput)
})

//  add event hanler for withdraw button

document.getElementById("withdraw-button").addEventListener("click", function () {
    const withdrawInput = getInputValue("withdraw-input")

    getFieldAmount("previous-withdraew", withdrawInput)
    updateBalance("previous-balance", -withdrawInput)
})