
function createBankAccount(initialBalance) {
    let balance = initialBalance; // Private variable
  
    return {
      deposit: function (amount) {
        if (amount > 0) {
          balance += amount;
          return balance;
        } else {
          return "Deposit amount must be positive.";
        }
      },
      withdraw: function (amount) {
        if (amount > balance) {
          return "Insufficient funds.";
        } else if (amount <= 0) {
          return "Withdrawal amount must be positive.";
        } else {
          balance -= amount;
          return balance;
        }
      },
      getBalance: function () {
        return balance;
      }
    };
  }
  
  const account = createBankAccount(100);
  
  console.log(account.deposit(50));    
  console.log(account.withdraw(30));   
  console.log(account.getBalance());   
  
  console.log(account.balance);        
  