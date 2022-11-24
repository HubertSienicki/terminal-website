/**
 * TODO:
 * [] A funny writing animation for whoami command
 * [] Project showcase command
 * [x] Banner command (?)
 * [x] Github command
 * [x] Linkedin command
 * [] neofetch command
 */
export class OutputParser {
	/**
	 * Parser made for generating output message of the terminal
	 */
	constructor() {
		this.banner =
			"<pre>  ___  ___  ___  ___  ________  _______   ________  _________                                           \r\n|\\  \\|\\  \\|\\  \\|\\  \\|\\   __  \\|\\  ___ \\ |\\   __  \\|\\___   ___\\                                         \r\n\\ \\  \\\\\\  \\ \\  \\\\\\  \\ \\  \\|\\ /\\ \\   __/|\\ \\  \\|\\  \\|___ \\  \\_|                                         \r\n \\ \\   __  \\ \\  \\\\\\  \\ \\   __  \\ \\  \\_|/_\\ \\   _  _\\   \\ \\  \\                                          \r\n  \\ \\  \\ \\  \\ \\  \\\\\\  \\ \\  \\|\\  \\ \\  \\_|\\ \\ \\  \\\\  \\|   \\ \\  \\                                         \r\n   \\ \\__\\ \\__\\ \\_______\\ \\_______\\ \\_______\\ \\__\\\\ _\\    \\ \\__\\                                        \r\n    \\|__|\\|__|\\|_______|\\|_______|\\|_______|\\|__|\\|__|    \\|__|                                        \r\n                                                                                                       \r\n                                                                                                       \r\n                                                                                                       \r\n ________  ___  _______   ________   ___  ________  ___  __    ___                          ________   \r\n|\\   ____\\|\\  \\|\\  ___ \\ |\\   ___  \\|\\  \\|\\   ____\\|\\  \\|\\  \\ |\\  \\                     ___|\\   __  \\  \r\n\\ \\  \\___|\\ \\  \\ \\   __/|\\ \\  \\\\ \\  \\ \\  \\ \\  \\___|\\ \\  \\/  /|\\ \\  \\                   |\\__\\ \\  \\|\\  \\ \r\n \\ \\_____  \\ \\  \\ \\  \\_|/_\\ \\  \\\\ \\  \\ \\  \\ \\  \\    \\ \\   ___  \\ \\  \\                  \\|__|\\ \\   ____\\\r\n  \\|____|\\  \\ \\  \\ \\  \\_|\\ \\ \\  \\\\ \\  \\ \\  \\ \\  \\____\\ \\  \\\\ \\  \\ \\  \\ ___ ___ ___         __\\ \\  \\___|\r\n    ____\\_\\  \\ \\__\\ \\_______\\ \\__\\\\ \\__\\ \\__\\ \\_______\\ \\__\\\\ \\__\\ \\__\\\\__\\\\__\\\\__\\       |\\__\\ \\__\\   \r\n   |\\_________\\|__|\\|_______|\\|__| \\|__|\\|__|\\|_______|\\|__| \\|__|\\|__\\|__\\|__\\|__|       \\|__|\\|__|   \r\n   \\|_________|                                                                                        \r\n                                                                                                       \r\n                                                                                                       \r\n                                                                                                       \r\n                                                                                                       \r\n                                                                                                       \r\n                                                                                                       \r\n                                                                                                       \r\n                                                                                                       \r\n                                                                                                       \r\n                                                                                                       \r\n                                                                                                       \r\n                                                                                                       </pre>";
	}
	/**
	 *
	 * @param command - a command passed to the terminal
	 * @returns generated message of the terminal
	 */
	generateOutput(command) {
		switch (command) {
			case "help":
				return (
					command +
					"<br>" +
					"whoami - A brief description of myself." +
					"<br>" +
					"projects - showcase of my projects" +
					"<br>" +
					"banner - ?" +
					"<br>" +
					"github - Github link" +
					"<br>" +
					"linkedin - LinkedIn link "
				);
			case "projects":
				return command + "<br>" + " projects - showcase of my projects";

			case "banner":
				return command + "<br>" + this.banner;

			case "github":
				return (
					command +
					"<br>" +
					'github - <a href = "https://github.com/HubertSienicki">https://github.com/HubertSienicki</a>'
				);

			case "linkedin":
				return (
					command +
					"<br>" +
					' linkedin - <a href = "https://www.linkedin.com/in/hubert-sienicki-26b89a182/"> https://www.linkedin.com/in/hubert-sienicki-26b89a182/</a>'
				);

			case "whoami":
				return (
					command +
					"<br>Hi, My name is Hubert Sienicki. I am an undergrad at the Polish-Japanese Academy of Information Technology. <br>Ever since my young years i've been interested in computer science and this is my way of 'showing myself' to the world ;)."
				);

			default:
				return (
					command +
					": unknown command <br> Please type 'help' to see avalable commands."
				);
		}
	}
}
