const { MessageEmbed } = require("discord.js");

module.exports.blitzEmbed = (blitz, { uname, uid, arv }, country, color) => {
  return new MessageEmbed()
    .setColor(color)
    .setTitle(
      blitz.record.endcontext.score +
        " by **" +
        uname +
        "** " +
        (country !== "XM"
          ? ":flag_" + country.toLowerCase() + ":"
          : "<:flag_moon:807899485946511360>")
    )
    .setDescription("Here is a quick recap of this run")
    .setThumbnail(`https://tetr.io/user-content/avatars/${uid}.jpg?rV=${arv}`)
    .addFields(
      {
        name: "Score",
        value: blitz.record.endcontext.score + "",
        inline: true,
      },
      {
        name: "PPS",
        value: (blitz.record.endcontext.piecesplaced / 120).toFixed(2),
        inline: true,
      },
      {
        name: "Levels",
        value: blitz.record.endcontext.level + "\n\n** **",
        inline: true,
      },
      {
        name: "SPP",
        value: (
          blitz.record.endcontext.score / blitz.record.endcontext.piecesplaced
        ).toFixed(2),
        inline: true,
      }
    )
    .addFields(
      { name: "** **\n**Clears**", value: "*Recap of the clears of the run*" },
      {
        name: "Singles",
        value: blitz.record.endcontext.clears.singles + "",
        inline: true,
      },
      {
        name: "Doubles",
        value: blitz.record.endcontext.clears.doubles + "",
        inline: true,
      },
      {
        name: "Triples",
        value: blitz.record.endcontext.clears.triples + "",
        inline: true,
      },
      {
        name: "Quads",
        value: blitz.record.endcontext.clears.quads + "",
        inline: true,
      },
      {
        name: "TSSs",
        value: blitz.record.endcontext.clears.tspinsingles + "",
        inline: true,
      },
      {
        name: "TSDs",
        value: blitz.record.endcontext.clears.tspindoubles + "",
        inline: true,
      },
      {
        name: "TSTs",
        value: blitz.record.endcontext.clears.tspintriples + "",
        inline: true,
      },
      {
        name: "PCs",
        value: blitz.record.endcontext.clears.allclear + "",
        inline: true,
      }
    )
    .setTimestamp(Date.now())
    .setFooter("TetoBot by ThatCookie", "https://i.imgur.com/gpDYBon.png");
};

module.exports.sprintEmbed = (sprint, { uname, uid, arv }, country, color) => {
  return new MessageEmbed()
    .setColor(color)
    .setTitle(
      `${(sprint.record.endcontext.finalTime / 60000).toString()[0]}:${(
        sprint.record.endcontext.finalTime / 1000
      ).toFixed(3)} by **${uname}** ${
        country !== "XM"
          ? ":flag_" + country.toLowerCase() + ":"
          : "<:flag_moon:807899485946511360>"
      }`
    )
    .setDescription("Here is a quick recap of this run")
    .setThumbnail(`https://tetr.io/user-content/avatars/${uid}.jpg?rV=${arv}`)
    .addFields(
      {
        name: "Time",
        value: `${
          (sprint.record.endcontext.finalTime / 60000).toString()[0]
        }:${(sprint.record.endcontext.finalTime / 1000).toFixed(3)}`,
        inline: true,
      },
      {
        name: "PPS",
        value: 
        ( sprint.record.endcontext.piecesplaced /
          (sprint.record.endcontext.finalTime / 1000)
        ).toFixed(2),
        inline: true,
      },
      {
        name: "Pieces placed",
        value: sprint.record.endcontext.piecesplaced + "",
        inline: true,
      },
    )
    .addFields(
      {
        name: "**Clears**",
        value: "*Recap of the clears of the run*",
      },
      {
        name: "Singles",
        value: sprint.record.endcontext.clears.singles + "",
        inline: true,
      },
      {
        name: "Doubles",
        value: sprint.record.endcontext.clears.doubles + "",
        inline: true,
      },
      {
        name: "Triples",
        value: sprint.record.endcontext.clears.triples + "",
        inline: true,
      },
      {
        name: "Quads",
        value: sprint.record.endcontext.clears.quads + "",
        inline: true,
      },
      {
        name: "T-spins",
        value: sprint.record.endcontext.tspins + "",
        inline: true,
      },
      {
        name: "PCs",
        value: sprint.record.endcontext.clears.allclear + "",
        inline: true,
      },
    )
    .addFields(
      {
        name: "**Finesse**",
        value: "*Overall finesse of the run*",
      },
      {
        name: "Faults",
        value: sprint.record.endcontext.finesse.faults + "",
        inline: true,
      },
      {
        name: "Best combo",
        value: sprint.record.endcontext.finesse.combo + "",
        inline: true,
      },
      {
        name: "Perfect pieces",
        value: sprint.record.endcontext.finesse.faults + "",
        inline: true,
      },
    )
    .setTimestamp(Date.now())
    .setFooter("TetoBot by ThatCookie", "https://i.imgur.com/gpDYBon.png");
};
