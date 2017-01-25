// Business logic goes here.....
var BankAccount =function(balance,deposit,withdrawal){
 this.currentBalance = 0;
 this.deposit = deposit;
 this.withdrawal = withdrawal;
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

  var initialBalance = $("input#initialAmount").val();
