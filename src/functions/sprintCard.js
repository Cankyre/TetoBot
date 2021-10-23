const { createCanvas, loadImage, registerFont } = require("canvas");

registerFont("./assets/hun.ttf", { family: "hun", weight: 400 });

module.exports = async (username, time, E, S, aurl) => {
  const canvas = createCanvas(1866, 624);
  const ctx = canvas.getContext("2d");
  const bg = await loadImage("./assets/card_bg.png");
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, 1866, 624);
  ctx.drawImage(bg, 0, 0);

  if (aurl) {
    ctx.font = "100px hun";
    ctx.fillStyle = "white";
    ctx.fillText(username, 624, 142, 1866 - 624);
    ctx.fillStyle = "#888888";
    ctx.font = "80px hun";
    ctx.fillText("Sprint time: " + time, 624, 242, 1866 - 624);
    ctx.fillText("Sprint efficienty: " + E, 624, 342, 1866 - 624);
    ctx.fillText("Sprint score: " + S, 624, 442, 1866 - 624);

    ctx.beginPath();
    ctx.arc(314, 314, 260, 0, Math.PI * 2);
    ctx.closePath();
    ctx.clip();

    const avatar = await loadImage(aurl);
    // draw the image into the clipping region
    ctx.drawImage(avatar, 42, 42, 540, 540);

    ctx.restore();
  } else {
    ctx.font = "100px hun";
    ctx.fillStyle = "white";
    ctx.fillText(username, 42, 142, 1866 - 624);
    ctx.fillStyle = "#888888";
    ctx.font = "80px hun";
    ctx.fillText("Sprint time: " + time, 42, 242, 1866 - 624);
    ctx.fillText("Sprint efficienty: " + E, 42, 342, 1866 - 624);
    ctx.fillText("Sprint score: " + S, 42, 442, 1866 - 624);
  }

  return canvas.toBuffer();
};
