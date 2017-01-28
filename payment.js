$(function(){
	
	var accessFee = 0;
	var totalCreditAmount=0;
	var totalAccountAmount=0;
	var accessAmountWithoutInterest=0;
	var cityRides = 0;
	
	var totalGrossIncome;
	var totalNetIncome;
	
	
	var deposite = 0;
	var totalLease = 0;

	$('#cityRides').change(function(){		

		cityRides = parseFloat($('#cityRides').val());
		
		totalGrossIncome = totalCreditAmount + totalAccountAmount + cityRides + accessAmountWithoutInterest - accessFee ;

		totalNetIncome = totalCreditAmount+totalAccountAmount+cityRides+accessAmountWithoutInterest-accessFee-totalLease-deposite;  

		$('#totalGrossIncome').html(totalGrossIncome);

		$('#totalNetIncome').html(totalNetIncome);
			
	});
	

	$('#creditAmount').change(function(){

		var creditAmount = parseFloat($('#creditAmount').val());
		var creditInterest = parseFloat((creditAmount * .05 ));
		$('#creditInterest').html(creditInterest);
		totalCreditAmount = creditAmount - creditInterest;

		$('#totalCreditAmount').html(totalCreditAmount);
	
		totalGrossIncome = totalCreditAmount + totalAccountAmount + cityRides + accessAmountWithoutInterest - accessFee ;

		totalNetIncome = totalCreditAmount+totalAccountAmount+cityRides+accessAmountWithoutInterest-accessFee-totalLease-deposite;  

		$('#totalGrossIncome').html(totalGrossIncome);

		$('#totalNetIncome').html(totalNetIncome);
	});


	// account call

	$('#accountAmount').change(function(){
		var accountAmount = parseFloat($('#accountAmount').val());
		var acountInterest = parseFloat(accountAmount * .10 );
		$('#acountInterest').html(acountInterest);
		totalAccountAmount = accountAmount - acountInterest;
		$('#totalAccountAmount').html(totalAccountAmount);
		//

		totalGrossIncome = totalCreditAmount + totalAccountAmount + cityRides + accessAmountWithoutInterest - accessFee ;

		totalNetIncome = totalCreditAmount+totalAccountAmount+cityRides+accessAmountWithoutInterest-accessFee-totalLease-deposite;  

		$('#totalGrossIncome').html(totalGrossIncome);

		$('#totalNetIncome').html(totalNetIncome);
		
		
	});

	// access miles

	$('#accessMiles').change(function(){
		var accessMiles = parseFloat($('#accessMiles').val());
		var accessAmount = parseFloat(accessMiles * 2.60 );
		$('#accessAmount').html(accessAmount);
		var accessCharge = parseFloat(accessAmount * .10);
		$('#accessCharge').html(accessCharge);
		accessAmountWithoutInterest = accessAmount-accessCharge;
		$('#accessAmountWithoutInterest').html(accessAmountWithoutInterest);
		$('#totalAccessAmount').html(accessAmountWithoutInterest-accessFee);
		
		totalGrossIncome = totalCreditAmount + totalAccountAmount + cityRides + accessAmountWithoutInterest - accessFee ;

		totalNetIncome = totalCreditAmount+totalAccountAmount+cityRides+accessAmountWithoutInterest-accessFee-totalLease-deposite;  

		$('#totalGrossIncome').html(totalGrossIncome);

		$('#totalNetIncome').html(totalNetIncome);
			
		
	});

	
	// totalAccessAmount

	$('#accessFee').change(function(){

		accessFee = parseFloat($('#accessFee').val());
		
		$('#totalAccessAmount').html(accessAmountWithoutInterest - accessFee);

		totalGrossIncome = totalCreditAmount + totalAccountAmount + cityRides + accessAmountWithoutInterest - accessFee ;

		totalNetIncome = totalCreditAmount+totalAccountAmount+cityRides+accessAmountWithoutInterest-accessFee-totalLease-deposite;  

		$('#totalGrossIncome').html(totalGrossIncome);

		$('#totalNetIncome').html(totalNetIncome);

		
			
	});


	$('#totalLease').change(function(){
		totalLease = parseFloat($('#totalLease').val());

		totalGrossIncome = totalCreditAmount + totalAccountAmount + cityRides + accessAmountWithoutInterest - accessFee ;

		totalNetIncome = totalCreditAmount+totalAccountAmount+cityRides+accessAmountWithoutInterest-accessFee-totalLease-deposite;  

		$('#totalGrossIncome').html(totalGrossIncome);

		$('#totalNetIncome').html(totalNetIncome);

	});

	

	$('#deposite').focusout(function(){
		deposite = parseFloat($('#deposite').val());

		totalGrossIncome = totalCreditAmount + totalAccountAmount + cityRides + accessAmountWithoutInterest - accessFee ;

		totalNetIncome = totalCreditAmount+totalAccountAmount+cityRides+accessAmountWithoutInterest-accessFee-totalLease-deposite;  

		$('#totalGrossIncome').html(totalGrossIncome);

		$('#totalNetIncome').html(totalNetIncome);
			
	});






});


		