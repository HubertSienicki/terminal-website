export class OutputParser {
	/**
	 * Parser made for generating output message of the terminal
	 */
	constructor() {}

	/**
	 *
	 * @param command - a command passed to the terminal
	 * @returns generated message of the terminal
	 */
	generateOutput(command) {
		switch (command) {
			case "help":
				return command + "<br>help command";
			default:
				return (
					command +
					": unknown command <br> Please type 'help' to see avalable commands."
				);
		}
	}
}
