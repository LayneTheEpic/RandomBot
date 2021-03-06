import {RandomBotIntentPresets} from "./consts.js";

import type {Client, Guild, GatewayIntentsString, Message, Attachment, TextChannel, User} from "discord.js";



export type BotConfig = {
	prefix: string;
	token: string;
};



export type FlexiblePromise = {
	promise: Promise<any>;
	resolve: Function;
	reject: Function;
};



export type FSCall = {
	method: string;
	path: string;
	data?: any[];
	fileProtector?: number;
	internal?: boolean;
};



export type FSTask = {
	data: any[]
	operation: string;
	path: string;
	promise: FlexiblePromise;
	protectFile: number;
};



export type MessageCommand = {
	attachments: Attachment[];
	args: string[];
	channel: TextChannel;
	client: Client;
	guild: Guild;
	mentions: User[];
	message: Message;
	name: string;
	prefix: string;
	sender: User;
};



export type RandomBotConfig = {
	token: string;
	prefix: string;
};



export type RandomBotInitOptions = {
	configLocation: string;
	fileManagerBasePath: string;
	intents?: GatewayIntentsString[];
	intentsBitField?: number;
	intentsPresets?: RandomBotIntentPreset[];
};



export type RandomBotIntentPreset = keyof typeof RandomBotIntentPresets;
