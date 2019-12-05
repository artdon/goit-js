/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
  };
  
  /*
   * Каждая транзакция это объект со свойствами: id, type и amount
   */
  
  const account = {
    // Текущий баланс счета
    balance: 0,
  
    // История транзакций
    transactions: [],
  
    /*
     * Метод создает и возвращает объект транзакции.
     * Принимает сумму и тип транзакции.
     */
    createTransaction(amount, type) {
      return {
        id: this.transactions.length,
        amount,
        type
      };
    },
  
    /*
     * Метод отвечающий за добавление суммы к балансу.
     * Принимает сумму танзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций
     */
    deposit(amount) {
      this.balance += amount;
      const currentTransaction = this.createTransaction(amount,Transaction.DEPOSIT);
      this.transactions.push(currentTransaction);
    },
    
    /*
     * Метод отвечающий за снятие суммы с баланса.
     * Принимает сумму танзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций.
     *
     * Если amount больше чем текущий баланс, выводи сообщение
     * о том, что снятие такой суммы не возможно, недостаточно средств.
     */
    withdraw(amount) {
      if(this.balance>=amount){
      this.balance -= amount;
      const currentTransaction = this.createTransaction(amount,Transaction.WITHDRAW);
      this.transactions.push(currentTransaction);}
      else {
        console.log(`Для выполения операции вам не хватает ${amount- this.balance}`)
      }
    },
  
    /*
     * Метод возвращает текущий баланс
     */
    getBalance() {
      return this.balance;
    },
  
    /*
     * Метод ищет и возвращает объект транзации по id
     */
    getTransactionDetails(id) {
      return this.transactions[id];
    },
  
    /*
     * Метод возвращает количество средств
     * определенного типа транзакции из всей истории транзакций
     */
    getTransactionTotal(type) {
      let total = 0;
      for (const key of this.transactions){
        if(key.type === type){
          total+= this.amount;
        }
      }
      return total;
    },
  };

account.deposit(1000);
account.deposit(500);
account.withdraw(100);


console.log(account.getTransactionDetails(0));
console.log(account.getTransactionTotal(Transaction.DEPOSIT));
console.log(account.getBalance());