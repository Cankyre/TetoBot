const { createCanvas, loadImage, registerFont } = require("canvas");
const { writeFile } = require("fs");
const canvas = createCanvas(1866, 624);
const ctx = canvas.getContext("2d");

registerFont("./assets/hun.ttf", { family: "hun", weight: 400 });

async function makeImage() {
  const bg = await loadImage("./assets/card_bg.png");
  ctx.drawImage(bg, 0, 0);

  ctx.font = "100px hun";
  ctx.fillStyle = "white";
  ctx.fillText("thatcookie", 624, 142, 1866 - 624);
  ctx.fillStyle = "#888888";
  ctx.font = "80px hun";
  ctx.fillText("Sprint time: 29.940", 624, 242, 1866 - 624);
  ctx.fillText("Sprint efficienty: 29.940", 624, 342, 1866 - 624);
  ctx.fillText("Sprint score: 17304", 624, 442, 1866 - 624);

  ctx.beginPath();
  ctx.arc(314, 314, 260, 0, Math.PI * 2);
  ctx.closePath();
  ctx.clip();

  const avatar = await loadImage(
    "https://tetr.io/user-content/avatars/5facd52d3a6a8b21b8974eab.jpg?rv=1605200183600"
  );
  // draw the image into the clipping region
  ctx.drawImage(avatar, 42, 42, 540, 540);

  ctx.restore();

  writeFile("./test.png", canvas.toBuffer(), () => {});
}

makeImage();
