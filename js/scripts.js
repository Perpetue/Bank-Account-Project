$(document).ready(function() {
//busines logical
    $("form#new-account").submit(function(event) {
      event.preventDefault();
      $(".withdraw").each(function() {
        var inputtedFullname  = $(this).find("input#new-full-name").val();
        var inputtedNewDeposit = $(this).find("input#new-deposit").val();
        var newAccount = new Account(inputtedDepositAmount, inputtedWithdraw)
        newaccount.withdraw.push(newAccount)
      });
      var inputtedDepositAmount= $("input.deposit-amount").val();
      var inputtedWithdraw = $("input.Withdraw").val();
      var newCustomer = new Customer(inputtedFullname, inputtedNewDeposit);
      $("#balance").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");
    });
  });