class User {
  constructor({ name, id, professional, age }) {
    this.name = name;
    this.id = parseInt(id);
    this.professional = professional;
    this.birthDay = new Date().getFullYear() - age;
  }
}

module.exports = User;
