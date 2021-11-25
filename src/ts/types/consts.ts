import type {IntentsString} from "discord.js";

export const RandomBotIntentPresets = {
	PRESET_GUILD_ALL: <IntentsString[]>["GUILDS", "GUILD_BANS", "GUILD_EMOJIS_AND_STICKERS", "GUILD_EMOJIS_AND_STICKERS", "GUILD_INTEGRATIONS", "GUILD_INVITES", "GUILD_MEMBERS", "GUILD_MESSAGE_REACTIONS", "GUILD_MESSAGE_TYPING", "", "GUILD_VOICE_STATES", "GUILD_WEBHOOKS"],
	PRESET_GUILD_BASIC: <IntentsString[]>["GUILDS", "GUILD_BANS", "GUILD_MEMBERS", "GUILD_MESSAGES"],
	PRESET_DMS: <IntentsString[]>["DIRECT_MESSAGES", "DIRECT_MESSAGE_REACTIONS", "DIRECT_MESSAGE_TYPING"],
	PRESET_REACTIONS: <IntentsString[]>["DIRECT_MESSAGE_REACTIONS", "GUILD_MESSAGE_REACTIONS"]
} as const;
