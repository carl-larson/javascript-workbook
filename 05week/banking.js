//create 2 classes:
//account -- number, owner, list of transactions, way to see current balance
//      perhaps make a method called addTransaction(payee, amount)
//transaction -- amount (pos or neg), payee, date

//create savings account that extends account and adds:
// interestRate
// method: accrueInterest that will get balance, add a new transaction that increases


class account {
    constructor (iNumber, iOwner) {
        this.owner = iOwner;
        this.number = iNumber;
        this.transactions = [];
    }
    balance(){
        // sums up balance by looping through transactions
        let bal = 0;
        if(this.transactions.length > 0) {
            let amts = this.transactions.map((value)=> {
                return value.amount;
            });
            bal = amts.reduce((prev, current) => {
                return current + prev;
            }); 
        }
        return bal;
    }
    addTransaction(payee, amount){
        // console.log("Add a transaction");
        // if(this.balance() < amount){
        //     return;
        // } else {
            let newTrans = new transaction(payee, amount);
            this.transactions.push(newTrans);
        
    }
}

class savings {
    constructor (){

    }
}

class transaction {
    constructor (payee, amount) {
        this.amount = amount;
        this.payee = payee;
        this.date = new Date();
    }

}

let accountA = new account("123-456-789", "John Doe");

console.log("saved file");
console.log(`${accountA.owner} made a new account: ${accountA.number}.`);
// console.log(accountA.balance());
accountA.addTransaction("Deposit", 1000);
// console.log(accountA.transactions);
console.log(accountA.balance());
accountA.addTransaction("Target", -45);
// console.log(accountA.transactions);
console.log(accountA.balance());
accountA.addTransaction("Freebirds", -14.12);
console.log(accountA.balance());
accountA.addTransaction("Fraud!", -1000);
console.log(accountA.balance());
