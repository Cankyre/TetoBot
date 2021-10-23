const { TetraChannel } = require('tetr.js')
const { sprintEmbed } = require("../functions/embeds")

module.exports = (username, message) => {
  TetraChannel.users.records(username).then((res) => {
    if (!res) {
      message.channel.send(":x: Couldn't find anything for that username");
    } else {
      TetraChannel.users.infos(username).then((res2) => {
        if (Object.is(res.records.sprint, null)) {
          message.channel.send(
            "Hmmm, looks like this user has never played sprint :thinking:"
          );
        } else {
          message.channel.send({
            embeds: [sprintEmbed(
              res.records["40l"],
              {
                uname: username.toUpperCase(),
                uid: res2._id,
                arv: res2.avatar_revision,
              },
              res2.country,
              message.member.displayColor
            )],
          });
        }
      });
    }
  });
}
