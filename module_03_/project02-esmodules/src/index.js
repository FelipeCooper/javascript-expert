import database from "../database.json" assert { type: "json" };
import Person from "./Person.js";
import TerminalController from "./terminalController.js";

const terminal = new TerminalController();
const DEFAULT_LANGUAGE = "pt-Br";
const EXIT_WORD = ":q";

terminal.initializeTable(database, DEFAULT_LANGUAGE);

async function mainLoop() {
  try {
    const msg = await terminal.question("Hello?  ");
    if (msg === EXIT_WORD) {
      terminal.closeTerminal();
      return;
    }
    const person = Person.generateInstanceFromString(msg);
    console.log(person.formatted(DEFAULT_LANGUAGE));
    mainLoop();
  } catch (error) {
    console.log("Problem: ", error);
    mainLoop();
  }
}

await mainLoop();
