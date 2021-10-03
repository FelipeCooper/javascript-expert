const File = require("./file");
(async () => {
  console.log(await File.csvToJson("../mocks/fourItems-invalid.csv"));
})();
