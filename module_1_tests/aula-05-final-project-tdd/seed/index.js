const faker = require("faker");
const Car = require("../src/entities/car");
const CarCategory = require("../src/entities/carCategory");
const Customer = require("../src/entities/customer");

const { writeFile } = require("fs/promises");
const { join } = require("path");

const seederBaseFolder = join(__dirname, "../", "database");
const ITEMS_AMOUNT = 3;

const carCategory = new CarCategory({
  id: faker.datatype.uuid(),
  name: faker.vehicle.type(),
  carIds: [],
  price: faker.finance.amount(20, 100),
});

const cars = [];
const customers = [];
for (let i = 0; i < ITEMS_AMOUNT; i++) {
  const car = new Car({
    id: faker.datatype.uuid(),
    name: faker.vehicle.model(),
    available: true,
    gasAvailable: true,
    releaseYear: faker.date.past().getFullYear(),
  });
  carCategory.carIds.push(car.id);
  cars.push(car);

  const customer = new Customer({
    id: faker.datatype.uuid(),
    name: `${faker.name.firstName()} ${faker.name.lastName()} `,
    age: faker.datatype.number({
      min: 10,
      max: 50,
    }),
  });
  customers.push(customer);
}

const writeSeed = (fileName, data) =>
  writeFile(join(seederBaseFolder, fileName), JSON.stringify(data));

(async () => {
  await writeSeed("cars.json", cars);
  await writeSeed("carCategory.json", carCategory);
  await writeSeed("customers.json", customers);
})();
