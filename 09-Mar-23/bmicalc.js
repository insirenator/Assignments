function analyseBMI(bmi) {
	let status;
	
	if(bmi < 18.5) {
		status = "Underweight";
	}
	else if(bmi > 18.5 && bmi < 25) {
		status = "Normal";
	}
	else if (bmi > 25 && bmi < 30) {
		status = "Overweight";
	}
	else {
		status = "Obese";
	}

	return status
}

let weight = prompt("Enter weight : ");
let height = prompt("Enter height : ");

let bmi = weight/(height*height);

console.log("Weight in kgs : ", weight);
console.log("Height in m : ", height);
console.log("BMI : ", bmi);
status = analyseBMI(bmi)
console.log(status)

