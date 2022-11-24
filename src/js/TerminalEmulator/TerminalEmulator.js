export class TerminalEmulator {
	constructor() {
		this.defaultText = "visitor@user:~$";
		this.input = "";
	}

	init() {
		document.getElementById("text").innerHTML = this.defaultText;
	}
}
