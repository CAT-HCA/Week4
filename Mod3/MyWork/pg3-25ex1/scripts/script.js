window.onload = function() {
	const allInputTextFields = document.querySelectorAll("input[type='text']");
	for (let i = 0; i < allInputTextFields.length; i++) {
		allInputTextFields[i].onfocus = function() {
			this.style.backgroundColor = 'seashell';
			allInputTextFields[i].onblur = function() {
				this.style.backgroundColor = '';
			};
		};
	}

	const stateField = document.getElementById('inputState');
	stateField.oninput = function() {
		stateField.value = stateField.value.toUpperCase();
	};

	let hiddenDiv = document.getElementById('hiddenDiv');
	const addressDropDown = document.getElementById('addressDropDown');
	addressDropDown.onchange = function() {
		if (addressDropDown.selectedIndex == 2) {
			hiddenDiv.style.display = 'inline';
		} else if (addressDropDown.selectedIndex == 0 || 1) {
			hiddenDiv.style.display = 'none';
		}
	};

	const submitBtn = document.getElementById('submitBtn');
	const messageDiv = document.getElementById('msgDiv');
	submitBtn.onclick = validateForm(messageDiv);
};
	function validateForm() {
		const ccField = document.getElementById('inputCC');
		if (ccField.validity.patterMismatch) {
			messageDiv.innerHtml = 'Please check your credit card number';
			return false;
        } 

        const inputExpMon = document.getElementById("inputExpMon");
        if (inputExpMon.validity.patterMismatch){
            messageDiv.innerHtml = 'Please check your CC exp date';
			return false;
        }

        const ccCode = document.getElementById("ccCode");
        if (ccCode.validity.patterMismatch){
            messageDiv.innerHtml = 'Please check your CC security code';
			return false;
        }
        else return true;
    }


