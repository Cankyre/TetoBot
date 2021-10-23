const { TetraChannel } = require("tetr.js");

module.exports = (record) => {
  record.endcontext.clears.allclear = 0;
  return (
    (10 / Object.values(record.endcontext.clears).reduce((a, c) => a + c) +
      100 / record.endcontext.piecesplaced +
      3 / (record.endcontext.inputs / record.endcontext.piecesplaced) +
      0.5 / (1 + record.endcontext.finesse.faults)) /
    4
  );
};
