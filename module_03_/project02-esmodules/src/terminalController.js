import DraftLog from "draftlog";
import chalk from "chalk";
import chalkTable from "chalk-table";
import Person from "./Person.js";
import readline from "readline";
DraftLog(console).addLineListener(process.stdin);

export default class TerminalController {
  constructor() {
    this.terminal = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  initializeTable(database, languague) {
    const data = database.map((p) => new Person(p).formatted(languague));
    const table = chalkTable(
      this.getTableOptions(),
      database.map((p) => new Person(p).formatted(languague))
    );
    this.print = console.draft(table);
    this.data = data;
  }

  question(msg = "") {
    return new Promise((resolve) => this.terminal.question(msg, resolve));
  }

  closeTerminal() {
    this.terminal.close();
  }

  getTableOptions() {
    return {
      leftPad: 2,
      columns: [
        {
          field: "id",
          name: chalk.cyan("ID"),
        },
        {
          field: "veichles",
          name: chalk.green("Veichles"),
        },
        {
          field: "kmTraveled",
          name: chalk.red("KM traveled"),
        },
        {
          field: "to",
          name: chalk.blue("To"),
        },
        {
          field: "from",
          name: chalk.blue("From"),
        },
      ],
    };
  }
}
