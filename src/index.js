require("dotenv").config();

const { Client } = require("discord.js");
const Discord = require("discord.js");
const client = new Client({
  intents: ["GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGES"],
});

const scards = require("./functions/sprintCard");
const bcards = require("./functions/blitzCard")
const se = require("./functions/sprintEfficienty");

const sprint = require("./commands/sprint")
const blitz = require("./commands/blitz");

const { TetraChannel } = require("tetr.js");

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", async (message) => {
  if (!message.content.startsWith(".")) return;
  const command = message.content.split(" ")[0].slice(1);
  const argv = message.content.split(" ").slice(1);

  if (command == "scard" && argv.length >= 1) {
    TetraChannel.users.records(argv[0]).then(async (data) => {
      const arev = (await TetraChannel.users.infos(argv[0])).avatar_revision;
      const scard = new Discord.MessageAttachment(await scards(
        data.records["40l"].record.user.username,
        (data.records["40l"].record.endcontext.finalTime / 1000).toFixed(3),
        se(data.records["40l"].record).toFixed(3),
        (
          ((se(data.records["40l"].record) * 100) /
            (data.records["40l"].record.endcontext.finalTime / 1000)) *
          10000
        ).toFixed(),
        arev
          ? `https://tetr.io/user-content/avatars/${data.records["40l"].record.user._id}.jpg?rv=${arev}`
          : undefined
      ), "scard.png");
      message.channel.send({
        files: [scard]
      });
    });
  } else if (command == "bcard") {
    TetraChannel.users.records(argv[0]).then(async (data) => {
      const arev = (await TetraChannel.users.infos(argv[0])).avatar_revision;
      const bcard = new Discord.MessageAttachment(await bcards(
        data.records.blitz.record.user.username,
        data.records.blitz.record.endcontext.score.toFixed(),
        (data.records.blitz.record.endcontext.score / data.records.blitz.record.endcontext.piecesplaced).toFixed(2),
        (data.records.blitz.record.endcontext.piecesplaced / 120).toFixed(2),
        arev
          ? `https://tetr.io/user-content/avatars/${data.records["40l"].record.user._id}.jpg?rv=${arev}`
          : undefined
      ), "scard.png");
      message.channel.send({
        files: [bcard]
      });
    });
  } else if (command == "sprint") {
    if (message.mentions.members.first()) {
    } else if (argv[0]) {
      sprint(argv[0], message)
    } else {
    }
  } else if (command == "blitz") {
    if (message.mentions.members.first()) {
    } else if (argv[0]) {
      blitz(argv[0], message);
    }
  }
});

client.login(process.env.TOKEN);
