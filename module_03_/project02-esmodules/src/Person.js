export default class Person {
  constructor({ id, veichles, kmTraveled, to, from }) {
    this.id = id;
    this.veichles = veichles;
    this.kmTraveled = kmTraveled;
    this.to = to;
    this.from = from;
  }

  static generateInstanceFromString(string) {
    const EMPTY_SPACE = " ";
    const [id, veichles, kmTraveled, to, from] = string.split(EMPTY_SPACE);
    return new Person({
      id,
      kmTraveled,
      to,
      from,
      veichles: veichles.split(","),
    });
  }

  formatted(language) {
    const mapDate = (date) => {
      const [day, month, year] = date.split("-").map(Number);
      return new Date(year, month - 1, day);
    };
    return {
      id: Number(this.id),
      veichles: new Intl.ListFormat(language, {
        style: "long",
        type: "conjunction",
      }).format(this.veichles),
      kmTraveled: new Intl.NumberFormat(language, {
        style: "unit",
        unit: "kilometer",
      }).format(this.kmTraveled),
      from: new Intl.DateTimeFormat(language, {
        month: "long",
        day: "2-digit",
        year: "numeric",
      }).format(mapDate(this.from)),
      to: new Intl.DateTimeFormat(language, {
        month: "long",
        day: "2-digit",
        year: "numeric",
      }).format(mapDate(this.to)),
    };
  }
}
