export class TerminalEmulator {
	constructor() {
		this.defaultText = "visitor@user:~$";
		this.inputText = "";
		this.outputText = "";
	}

	init() {
		document.getElementById("terminal_emulator_input_input_text").innerHTML =
			this.defaultText;
		document.getElementById("inputField").focus();
		document.addEventListener("keypress", (e) => {
			var keyCode = e.code;

			if (keyCode == "Enter") {
				console.log("Enter pressed!");
				this.inputText =
					this.defaultText + document.getElementById("inputField").value;
				this.setOutputText(this.inputText);
			}
		});
	}

	setOutputText(outputText) {
		this.outputText = outputText + "<br>" + "command here";

		document.getElementById("terminal_emulator_output").innerHTML +=
			this.outputText + "<br><br>";

		document.getElementById("inputField").value = "";
	}
}
