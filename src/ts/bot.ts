import type {Message, Client} from "discord.js";
import type {BotConfig, Command} from "./types.js";

import CommandHandler from "./commandHandler.js";



export default class Bot { // thank god for static methods or this would be a plain object still
	static config: BotConfig;

	static processCommand(message: Message, client: Client) {
		const text = message.content;

		const inputString = text.split(this.config.prefix)[1];
		const commandSegments = inputString.split(" ");


		const command: Command = {
			args: commandSegments.slice(1), // all but first (command type)
			client: client,
			message: message,
			name: commandSegments[0]
		};


		CommandHandler.run(command);
	}

	static setConfig(config: BotConfig) {
		this.config = config;
	}
}