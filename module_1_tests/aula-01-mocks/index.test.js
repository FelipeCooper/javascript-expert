const { error } = require("./src/constants");
const { rejects, deepStrictEqual } = require("assert");
const File = require("./src/file");

(async () => {
  {
    const filePath = "./mocks/emptyFile-invalid.csv";
    const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE);
    const result = File.csvToJson(filePath);
    await rejects(result, rejection);
  }
  {
    const filePath = "./mocks/fourItems-invalid.csv";
    const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE);
    const result = File.csvToJson(filePath);
    await rejects(result, rejection);
  }
  {
    const filePath = "./mocks/threeItems-valid.csv";
    const result = await File.csvToJson(filePath);
    const expected = [
      {
        name: "Erick Wendel",
        id: 123,
        professional: "Javascript Instructor",
        birthDay: 1998,
      },
      {
        name: "Maria",
        id: 12,
        professional: "Go Instructor",
        birthDay: 2000,
      },
      {
        name: "Joao",
        id: 321,
        professional: "Python Instructor",
        birthDay: 1995,
      },
    ];
    deepStrictEqual(JSON.stringify(result), JSON.stringify(expected));
  }
})();
