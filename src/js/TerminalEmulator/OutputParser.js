//
import { GeocodingApi } from "../API/GeocodingApi.js";
/**
 * TODO:
 * [] Project showcase command
 * [x] Banner command (?)
 * [x] Github command
 * [x] Linkedin command
 * [x] neofetch command
 * [x] clear command
 * [] api call for geocoding
 * [] api call for weatherapi
 */

export class OutputParser {
	/**
	 * Parser made for generating output message of the terminal
	 */
	constructor() {
		this.geoApi = new GeocodingApi();

		this.deviceInformation = [];
		this.neofetchInfo = [
			"Host: hubertsienicki.github.io ",
			"Version: 1.0.0",
			"Shell: GNU bash, version 1.0.0(1)-release (x86_64-pc-visitor)",
			"Resolution: " +
				window.screen.availWidth +
				"x" +
				window.screen.availHeight,
			"Terminal: TerminalEmulator by Hubert Sienicki",
			"Repo: " +
				'<a href = "https://github.com/HubertSienicki/terminal-website">https://github.com/HubertSienicki/terminal-website</a>',
			"License: MIT",
			"Author: Hubert Sienicki",
			"Font: Monospaced",
			"Theme: Purple'd",
			"ASCII art: Beer Art by Elissa Potier",
		];

		this.getDeviceInformation();

		this.banner =
			"<pre>  ___  ___  ___  ___  ________  _______   ________  _________                                           \r\n|\\  \\|\\  \\|\\  \\|\\  \\|\\   __  \\|\\  ___ \\ |\\   __  \\|\\___   ___\\                                         \r\n\\ \\  \\\\\\  \\ \\  \\\\\\  \\ \\  \\|\\ /\\ \\   __/|\\ \\  \\|\\  \\|___ \\  \\_|                                         \r\n \\ \\   __  \\ \\  \\\\\\  \\ \\   __  \\ \\  \\_|/_\\ \\   _  _\\   \\ \\  \\                                          \r\n  \\ \\  \\ \\  \\ \\  \\\\\\  \\ \\  \\|\\  \\ \\  \\_|\\ \\ \\  \\\\  \\|   \\ \\  \\                                         \r\n   \\ \\__\\ \\__\\ \\_______\\ \\_______\\ \\_______\\ \\__\\\\ _\\    \\ \\__\\                                        \r\n    \\|__|\\|__|\\|_______|\\|_______|\\|_______|\\|__|\\|__|    \\|__|                                        \r\n                                                                                                       \r\n                                                                                                       \r\n                                                                                                       \r\n ________  ___  _______   ________   ___  ________  ___  __    ___                          ________   \r\n|\\   ____\\|\\  \\|\\  ___ \\ |\\   ___  \\|\\  \\|\\   ____\\|\\  \\|\\  \\ |\\  \\                     ___|\\   __  \\  \r\n\\ \\  \\___|\\ \\  \\ \\   __/|\\ \\  \\\\ \\  \\ \\  \\ \\  \\___|\\ \\  \\/  /|\\ \\  \\                   |\\__\\ \\  \\|\\  \\ \r\n \\ \\_____  \\ \\  \\ \\  \\_|/_\\ \\  \\\\ \\  \\ \\  \\ \\  \\    \\ \\   ___  \\ \\  \\                  \\|__|\\ \\   ____\\\r\n  \\|____|\\  \\ \\  \\ \\  \\_|\\ \\ \\  \\\\ \\  \\ \\  \\ \\  \\____\\ \\  \\\\ \\  \\ \\  \\ ___ ___ ___         __\\ \\  \\___|\r\n    ____\\_\\  \\ \\__\\ \\_______\\ \\__\\\\ \\__\\ \\__\\ \\_______\\ \\__\\\\ \\__\\ \\__\\\\__\\\\__\\\\__\\       |\\__\\ \\__\\   \r\n   |\\_________\\|__|\\|_______|\\|__| \\|__|\\|__|\\|_______|\\|__| \\|__|\\|__\\|__\\|__\\|__|       \\|__|\\|__|   \r\n   \\|_________|                                                                                        \r\n                                                                                                       \r\n                                                                                                       \r\n                                                                                                       \r\n                                                                                                       \r\n                                                                                                       \r\n                                                                                                       \r\n                                                                                                       \r\n                                                                                                       \r\n                                                                                                       \r\n                                                                                                       \r\n                                                                                                       \r\n                                                                                                       </pre>";

		this.neofetchBanner =
			"<pre>                           visitor@DESKTOP-IGM26G7\n                           -----------------------\n</pre>" +
			"<pre>  .   *   ..  . *  *    |OS: " +
			this.neofetchInfo[this.neofetchInfo.length - 1] +
			" " +
			" \r\n*  * @()Ooc()*   o  .   |Browser: " +
			this.neofetchInfo[this.neofetchInfo.length - 3] +
			" " +
			this.neofetchInfo[this.neofetchInfo.length - 2] +
			" \r\n    (Q@*0CG*O()  ___    |" +
			this.neofetchInfo[0] +
			" \r\n   |\\_________/|/ _ \\   |" +
			this.neofetchInfo[1] +
			" \r\n   |  |  |  |  | / | |  |" +
			this.neofetchInfo[2] +
			"\r\n   |  |  |  |  | | | |  |" +
			this.neofetchInfo[3] +
			"\r\n   |  |  |  |  | | | |  |" +
			this.neofetchInfo[4] +
			"\r\n   |  |  |  |  | | | |  |" +
			this.neofetchInfo[5] +
			"\r\n   |  |  |  |  | | | |  |" +
			this.neofetchInfo[6] +
			"\r\n   |  |  |  |  | \\_| |  |" +
			this.neofetchInfo[7] +
			"\r\n   |  |  |  |  |\\___/   |" +
			this.neofetchInfo[8] +
			"\r\n   |\\_|__|__|_/|        |" +
			this.neofetchInfo[9] +
			"\r\n    \\_________/         |" +
			this.neofetchInfo[10] +
			"</pre>";
	}
	/**
	 * @param command - a command passed to the terminal
	 * @returns generated message of the terminal
	 */
	generateOutput(command) {
		switch (command) {
			case "help":
				return (
					command +
					"<br>" +
					"GNU bash, version 1.0.0(1)-release (x86_64-pc-visitor)" +
					"<br><br>" +
					"whoami - A brief description of myself." +
					"<br>" +
					"projects - showcase of my projects" +
					"<br>" +
					"banner - ?" +
					"<br>" +
					"github - Github link" +
					"<br>" +
					"linkedin - LinkedIn link " +
					"<br>" +
					"neofetch - system information"
				);

			case "projects":
				return command + "<br>" + " projects - showcase of my projects";

			case "clear":
				return command;

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

			case "neofetch":
				return command + "<br>" + this.neofetchBanner;

			case "weather":
				this.apiData = this.geoApi.call("Warsaw");
				return command + "<br>";

			default:
				return (
					command +
					": unknown command <br> Please type 'help' to see avalable commands."
				);
		}
	}

	getDeviceInformation() {
		//https://stackoverflow.com/questions/11219582/how-to-detect-my-browser-version-and-operating-system-using-javascript

		var nVer = navigator.appVersion;
		var nAgt = navigator.userAgent;
		var browserName = navigator.appName;
		var fullVersion = "" + parseFloat(navigator.appVersion);
		var majorVersion = parseInt(navigator.appVersion, 10);
		var nameOffset, verOffset, ix;

		// In Opera, the true version is after "Opera" or after "Version"
		if ((verOffset = nAgt.indexOf("Opera")) != -1) {
			browserName = "Opera";
			fullVersion = nAgt.substring(verOffset + 6);
			if ((verOffset = nAgt.indexOf("Version")) != -1)
				fullVersion = nAgt.substring(verOffset + 8);
		}
		// In MSIE, the true version is after "MSIE" in userAgent
		else if ((verOffset = nAgt.indexOf("MSIE")) != -1) {
			browserName = "Microsoft Internet Explorer";
			fullVersion = nAgt.substring(verOffset + 5);
		}
		// In Chrome, the true version is after "Chrome"
		else if ((verOffset = nAgt.indexOf("Chrome")) != -1) {
			browserName = "Chrome";
			fullVersion = nAgt.substring(verOffset + 7);
		}
		// In Safari, the true version is after "Safari" or after "Version"
		else if ((verOffset = nAgt.indexOf("Safari")) != -1) {
			browserName = "Safari";
			fullVersion = nAgt.substring(verOffset + 7);
			if ((verOffset = nAgt.indexOf("Version")) != -1)
				fullVersion = nAgt.substring(verOffset + 8);
		}
		// In Firefox, the true version is after "Firefox"
		else if ((verOffset = nAgt.indexOf("Firefox")) != -1) {
			browserName = "Firefox";
			fullVersion = nAgt.substring(verOffset + 8);
		}
		// In most other browsers, "name/version" is at the end of userAgent
		else if (
			(nameOffset = nAgt.lastIndexOf(" ") + 1) <
			(verOffset = nAgt.lastIndexOf("/"))
		) {
			browserName = nAgt.substring(nameOffset, verOffset);
			fullVersion = nAgt.substring(verOffset + 1);
			if (browserName.toLowerCase() == browserName.toUpperCase()) {
				browserName = navigator.appName;
			}
		}
		// trim the fullVersion string at semicolon/space if present
		if ((ix = fullVersion.indexOf(";")) != -1)
			fullVersion = fullVersion.substring(0, ix);
		if ((ix = fullVersion.indexOf(" ")) != -1)
			fullVersion = fullVersion.substring(0, ix);

		majorVersion = parseInt("" + fullVersion, 10);
		if (isNaN(majorVersion)) {
			fullVersion = "" + parseFloat(navigator.appVersion);
			majorVersion = parseInt(navigator.appVersion, 10);
		}

		// This script sets OSName variable as follows:
		// "Windows"    for all versions of Windows
		// "MacOS"      for all versions of Macintosh OS
		// "Linux"      for all versions of Linux
		// "UNIX"       for all other UNIX flavors
		// "Unknown OS" indicates failure to detect the OS

		var OSName = "Unknown OS";
		if (navigator.appVersion.indexOf("Win") != -1) OSName = "Windows";
		if (navigator.appVersion.indexOf("Mac") != -1) OSName = "MacOS";
		if (navigator.appVersion.indexOf("X11") != -1) OSName = "UNIX";
		if (navigator.appVersion.indexOf("Linux") != -1) OSName = "Linux";

		this.neofetchInfo.push(browserName);
		this.neofetchInfo.push(fullVersion);
		this.neofetchInfo.push(OSName);
	}
}
