// Business logic goes here.....
var BankAccount =function(name, initialBalance, deposit, withdrawal){
 this.currentBalance = initialBalance;
 this.deposit = deposit;
 this.withdrawal = withdrawal;
 this.newBalance = ;
}

 BankAccount.prototype.deposit = function(balance){
   newBalance = currentBalance + deposit;
   return newBalance;
 }
 BankAccount.prototype.withdraw = function(balance){
   newBalance = currentBalance - withdrawal;
   return newBalance;
  if (newBalance <= 0){
    alert ("You have Insufficient funds in your account.");
  }
 }


// User Logic goes here ....
$(document).ready(function(){
  $("form#BankAccount").submit(function(event){
    event.preventDefault();

  var inputtedName = $("input#name").val();
  var initialBalance = $("input#initialAmount").val();
  var inputtedDeposit = $("input#deposit").val();
  var inputtedWithdrawal = $("input#withdraw").val();
  var myBankAccount = new BankAccount(inputtedName, initialBalance, inputtedDeposit, inputtedWithdrawal);

  myBankAccount.deposit();
  myBankAccount.withdraw();


  $("span.output").last().text("$" + newBalance + ".00");
