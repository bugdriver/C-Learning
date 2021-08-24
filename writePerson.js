const fs = require("fs");
const { loadPeopleData, writePeopleData } = require("./fsController");

const [id, name] = process.argv.slice(2);

const newPerson = { id, name };

const updateData = function (newData) {
  const currentData = loadPeopleData();
  currentData.push(newData);
  return JSON.stringify(currentData);
};

writePeopleData(updateData(newPerson));
