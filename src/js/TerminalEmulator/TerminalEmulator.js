import { OutputParser } from "../TerminalEmulator/OutputParser.js";

/**
 * TODO:
 * [x] arrow key functionality
 */
export class TerminalEmulator {
	constructor() {
		this.commandPrefix = "visitor@DESKTOP-IGM26G7:~$";
		this.inputText = "";
		this.outputText = "";
		this.commandList = []; //used for previous commands
		this.currentListIndex = 0;
	}

	init() {
		document.getElementById("terminal_emulator_input_input_text").innerHTML =
			this.commandPrefix;
		document.getElementById("inputField").focus();
		document.addEventListener("keydown", (e) => {
			var keyCode = e.code;

			//Iterates downwards through commandList
			if (keyCode == "ArrowUp") {
				if (this.currentListIndex != 0) {
					this.commandList.push(document.getElementById("inputField").value);
					this.currentListIndex--;
					document.getElementById("inputField").value =
						this.commandList[this.currentListIndex];
				}
			}

			//Iterates upwards through commandList
			if (keyCode == "ArrowDown") {
				if (this.currentListIndex <= this.commandList.length) {
					this.currentListIndex++;
					document.getElementById("inputField").value =
						this.commandList[this.currentListIndex];
				}
			}

			if (keyCode == "Enter") {
				this.inputText = document.getElementById("inputField").value;
				this.commandList.push(this.inputText);
				this.currentListIndex = this.commandList.length;

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
		if (outputText == "clear") {
			this.outputText = "";

			document.getElementById("terminal_emulator_output").innerHTML = "";

			document.getElementById("inputField").value = "";
		} else {
			this.outputText = this.commandPrefix + outputText;

			document.getElementById("terminal_emulator_output").innerHTML +=
				this.outputText + "<br><br>";

			document.getElementById("inputField").value = "";
		}
	}
}
