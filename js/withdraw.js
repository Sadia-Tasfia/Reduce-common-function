document.getElementById("btn-withdraw").addEventListener("click", function () {
  const newWithdrawAmount = getInputValueById("withdraw-field");

  // get previouse withdraw amount
  const previousWithdrawTtotal = getTextElementById("withdraw-total");

  // calculate new withdraw and set
  const newWithdrawTotal = previousWithdrawTtotal + newWithdrawAmount;

  // set new withdraw total by using setElementValueById
  setElementValueById("withdraw-total", newWithdrawTotal);

  const previousBalanceTotal = getTextElementById("balance-total");
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  setElementValueById("balance-total", newBalanceTotal);
});