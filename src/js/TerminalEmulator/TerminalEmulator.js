import { OutputParser } from "../TerminalEmulator/OutputParser.js";
export class TerminalEmulator {
	constructor() {
		this.commandPrefix = "visitor@user:~$";
		this.inputText = "";
		this.outputText = "";
	}

	init() {
		document.getElementById("terminal_emulator_input_input_text").innerHTML =
			this.commandPrefix;
		document.getElementById("inputField").focus();
		document.addEventListener("keypress", (e) => {
			var keyCode = e.code;

			if (keyCode == "Enter") {
				console.log("Enter pressed!");
				this.inputText = document.getElementById("inputField").value;

				let parser = new OutputParser();
				this.setOutputText(parser.generateOutput(this.inputText));
			}
		});
	}

	/**
	 * Adds default command text to the output text and prints it on the CLI
	 * @param outputText - text to print from the terminal
	 */
	setOutputText(outputText) {
		this.outputText = this.commandPrefix + outputText;

		document.getElementById("terminal_emulator_output").innerHTML +=
			this.outputText + "<br><br>";

		document.getElementById("inputField").value = "";
	}
}
