//create 2 classes:
//account -- number, owner, list of transactions, way to see current balance
//      perhaps make a method called addTransaction(payee, amount)
//transaction -- amount (pos or neg), payee, date

//create savings account that extends account and adds:
// interestRate
// method: accrueInterest that will get balance, add a new transaction that increases


class account {
    constructor (iOwner, iNumber) {
        this.owner = iOwner;
        this.number = iNumber;
        this.transaction = [];
    }
    balance(){
        // sums up balance by looping through transactions
        let bal = 0;
        return bal;
    }
    addTransaction(payee, amount){
        if(balance < amount){

        }
        let newTrans = new transaction(payee, amount);
        this.transaction.push()
    }
}

class savings {
    constructor (){

    }
}

class transaction {
    constructor (amount, payee) {
        this.amount = amount;
        this.payee = payee;
        this.date = new Date();
    }

}

let accountA = new account("123-456-789", "John Doe");

console.log(`${accountA.name} made a new account is ${accountA.number}`);
accountA.addTransaction("Deposit", 1000);
accountA.addTransaction("Target", -45);
accountA.addTransaction("Freebirds", -14.12);
console.log(accountA.balance());
accountA.addTransaction("Fraud!", -1000);
console.log(accountA.balance());
