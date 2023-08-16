document.getElementById('btn-withdraw').addEventListener('click', function(){
    
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    withdrawField.value = '';

    if (isNaN(newWithdrawAmount)) {
        Swal.fire(
            '⚠️Warning⚠️',
            'Please Enter Right Amount',
            'warning'
          )
        return ;
        }
        else if (newWithdrawAmount < 0) {
        Swal.fire(
          '⚠️ Warning ⚠️',
          'Please Enter a Positive Number',
          'warning'
        );
        return;
      }
        

      const withdrawTotalElement = document.getElementById('withdraw-total');
      const previousWithdrawTotalString = withdrawTotalElement.innerText;
      const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

      
      const balanceElement = document.getElementById('balance-total');
      const previousBalanceTotalString = balanceElement.innerText;
      const previousBalanceTotal = parseFloat(previousBalanceTotalString);

      if (newWithdrawAmount > previousBalanceTotal) {
        Swal.fire(
          '⚠️ Warning ⚠️',
          'আপনার বাপের ব্যাংকে এত টাকা নাই',
          'warning'
        );
        return;
      }

      const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
      withdrawTotalElement.innerText = newWithdrawTotal;

      const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
      balanceElement.innerText = newBalanceTotal;
})