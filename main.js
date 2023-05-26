
// create the base class of the system
class MyBankAccount {
    constructor(accountNumber, accountHolder, balance) {
        this.#accountNumber = accountNumber;
        this.#accountHolder = accountHolder;
        this.#balance = balance;
    }

    // getter to modify the account number
    getAccountNumber() {
        return this.#accountNumber;
    }

    getAccountHolder() {
        return this.#accountHolder;
    }

    getBalance() {
        return this.#balance;
    }

    deposit(amount) {
        this.#balance += amount;
    }

    withdraw(amount) {
        if (this.balance >= amount) {
            this.#balance -= amount;
            return true;
        } else {
            alert ("Balance is too low to withdraw");
        }
    }
}
// end of base class

//derived class: Savings account class
class SavingsAccount extends MyBankAccount {
    constructor(accountNumber, accountHolder, balance, interestRate) {
        super(accountNumber, accountHolder, balance);
        this.#interestRate = interestRate;
     }

     // calculate the interest Rate to be generated upon saving
     calculateInterest (){
        return (this.#balance * this.#interestRate);
     }
}

//derived class: checking account class

class checkingAccount extends MyBankAccount {
    
    constructor (accountNumber, accountHolder, balance, overDraftLimit) {
        super(accountNumber, accountHolder, balance);
        this.#overDraftLimit = overDraftLimit;
    }

    withdraw (amount) {
        if (this.balance >= amount) {
            super.withdraw(amount);
        } else if (amount <= this.overDraftLimit) {
            this.balance -= amount;
        } else {
            alert ("You have exceeded your overdraft limit!");
        }
    }
}

// implementation instances
const SavingsAccount = new SavingsAccount("KK26052023", "Karani Keith", 95000, 0.16 );
const checkingAccount = new checkingAccount("wk11223344", "wamukota", 20900, 5000);

// infromation about my bank account
console.log("Savings Account Information");

console.log("Account Number:", SavingsAccount.getAccountNumber());
console.log("Account Holder:", SavingsAccount.getAccountHolder());
console.log("Account Balance is:", SavingsAccount.getBalance());
console.log("Interest Amount Receivable:", SavingsAccount.calculateInterest());

// information about my bank account balance
console.log("checking Account Information");

console.log("Account Number is:", checkingAccount.getAccountNumber());
console.log("Account Holder is:", checkingAccount.getAccountHolder());
console.log("Balance in account is:", checkingAccount.getBalance());

// information after I deposit an amount into my account
SavingsAccount.deposit(15000);
console.log("My savings aacount amount after deposit is:", SavingsAccount.getBalance());

//information update after I withdraw an amount from my bank account 
checkingAccount.withdraw(2000);
console.log("New account balance after withdrawal is:", checkingAccount.getBalance());

// information after withdrawing my available overdraft amount 
checkingAccount.withdraw(18000);
console.log("Available balance after overdraft withdrawal:", checkingAccount.getBalance());
console.log();










