//handle Deposit button event...
document.getElementById('deposit-btn').addEventListener('click', function () {
    // get the deposit amount
    const depositInput = document.getElementById('deposit-input');
    const inputDepositText = depositInput.value;
    const inputDepositAmount = parseFloat(inputDepositText);

    const depositTotal = document.getElementById('deposit-total');
    const updateDepositText = depositTotal.innerText;
    const updateDepositAmount = parseFloat(updateDepositText);
    const newDepositAmount = updateDepositAmount + inputDepositAmount;
    depositTotal.innerText = newDepositAmount;

    // update balance total..
    const balanceTotal = document.getElementById('balance-total');
    const BlanceTotalText = balanceTotal.innerText;
    const preBlanceTotal = parseFloat(BlanceTotalText);
    const newBlanceTotal = preBlanceTotal + newDepositAmount;
    balanceTotal.innerText = newBlanceTotal;

    // clear input field 
    depositInput.value = '';
});

// withdraw event handler button
document.getElementById('withdraw-btn').addEventListener('click', function () {
    // update withdraw amount...
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInput.value;
    const withdrawInputAmount = parseFloat(withdrawInputText);

    // set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const preWithdrawText = withdrawTotal.innerText;
    const preWithdrawTOtal = parseFloat(preWithdrawText);
    const newWithdrawTotal = withdrawInputAmount + preWithdrawTOtal;
    withdrawTotal.innerText = newWithdrawTotal;

    // set balance total
    const balanceTotal = document.getElementById('balance-total');
    const preBlanceTotalText = balanceTotal.innerText;
    const preBlanceTotal = parseFloat(preBlanceTotalText);
    const newBlanceTotal = preBlanceTotal - newWithdrawTotal;
    balanceTotal.innerText = newBlanceTotal;

    // clear input field 
    withdrawInput.value = '';
})