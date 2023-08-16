// --------
document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
   const newDepositAmount = parseFloat(newDepositAmountString);
   

   depositField.value = '';
   

   if (isNaN(newDepositAmount)) {
    Swal.fire(
        '⚠️Warning⚠️',
        'Please Enter Right Amount',
        'warning'
      )
    return ;
    }
    else if (newDepositAmount < 0) {
    Swal.fire(
      '⚠️ Warning ⚠️',
      'Please Enter a Positive Number',
      'warning'
    );
    return;
  }

   const depositTotalElement  = document.getElementById('deposit-total');
   const previousDepositTotalString = depositTotalElement.innerText;
   const previousDepositTotal = parseFloat(previousDepositTotalString);


   const newDepositTotal = previousDepositTotal + newDepositAmount
   depositTotalElement.innerText = newDepositTotal;

// --------

const balanceTotalElement = document.getElementById('balance-total');
const previousBalanceTotalString = balanceTotalElement.innerText;
const previousBalanceTotalAmount = parseFloat(previousBalanceTotalString);


const newBalanceTotal = previousBalanceTotalAmount + newDepositAmount;
balanceTotalElement.innerText = newBalanceTotal ;

})