window.onload = () => {
	let button = document.querySelector("#btn");

	// Function for calculating BMI
	button.addEventListener("click", calculateBMI);
};

function calculateBMI() {

	/* Getting input from user into height variable.
	Input is string so typecasting is necessary. */
	let bmi_height = parseInt(document.querySelector("#bmi_height").value);

	/* Getting input from user into weight variable.
	Input is string so typecasting is necessary.*/
	let bmi_weight = parseInt(document.querySelector("#bmi_weight").value);

	let result = document.querySelector("#bmi_result");

	// Checking the user providing a proper
	// value or not
	if (bmi_height === "" || isNaN(bmi_height))
     
		result.innerHTML = "Provide a valid Height!";

	else if (bmi_weight === "" || isNaN(bmi_weight))
		result.innerHTML = "Provide a valid Weight!";

	// If both input is valid, calculate the bmi
	else {

		// Fixing upto 2 decimal places
		let bmi = (bmi_weight / ((bmi_height * bmi_height)
							/ 10000)).toFixed(2);

		// Dividing as per the bmi conditions
		if (bmi < 18.6) result.innerHTML =
			`Under Weight : <span>${bmi}</span>`;

		else if (bmi >= 18.6 && bmi < 24.9)
			result.innerHTML =
				`Normal : <span>${bmi}</span>`;

		else result.innerHTML =
			`Over Weight : <span>${bmi}</span>`;
	}
}
