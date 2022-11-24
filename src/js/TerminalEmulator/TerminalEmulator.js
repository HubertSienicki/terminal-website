export class TerminalEmulator {
	constructor() {
		this.defaultText = "visitor@user:~$";
		this.input = "";
	}

	init() {
		document.getElementById("text").innerHTML = this.defaultText;
		document.getElementById("inputField").focus();
		document.addEventListener("keypress", (e) => {
			var keyName = e.key;
			var keyCode = e.code;

			if (keyCode == "Enter") {
				console.log("Enter pressed!");
			}
		});
	}
}
