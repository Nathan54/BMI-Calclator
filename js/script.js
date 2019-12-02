function calculateBmi() { //The whole function is called calculate Bmi

	//let weight = document.getElementById("weight").value
	let weight = $("#weight").val();
	let height = $("#height").val();
	//let height = document.getElementById("height").val();

	console.log("weight:"+weight+"height:"+height);

	if(weight > 0 && height > 0){	
	
	
	let finalBmi = weight/(height/100*height/100)
		$("#bmi").val(finalBmi);
	
	switch(true)
	{
		
		//let finalBmi = weight/(height/100*height/100);
		//$("#bmi").val(finalbmi);
		//console.log(finalbmi)
		
		case (finalBmi < 18.5):
		
		{
			$("#feedback").val("That you are too thin.");
			break;
		}
		
		case (finalBmi > 18.5 && finalBmi < 25):
		{
			$("#feedback").val("That you have overweight.");
			break;
		}
		
		default:
		{
			$("#feedback").val("That you are healthy.");
			break;
		}
		
	}
	
	
	
	/*
		let finalBmi = weight/(height/100*height/100)
		$("#bmi").val(finalBmi);
		if(finalBmi < 18.5){
		$("#meaning").val("That you are too thin.");
		}
		if(finalBmi > 18.5 && finalBmi < 25){
		$("#meaning").val("That you are healthy.");
		}
		if(finalBmi > 25){
		$("#meaning").val("That you have overweight.");
		}
		
	*/
		
		}

	else{
		$("#feedback").html("<b>Please Fill in everything correctly</b>")
		
		//alert("Please Fill in everything correctly")
	}
}