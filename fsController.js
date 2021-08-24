const fs = require("fs");

const loadPeopleData = () => {
  const rawData = fs.readFileSync("people.json", "utf-8");
  return rawData.length ? JSON.parse(rawData) : [];
};

const writePeopleData = (data) => {
  fs.writeFileSync("people.json", data);
};

module.exports = { loadPeopleData, writePeopleData };
