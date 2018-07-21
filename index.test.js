/* Mongo Memory Server Test Setup */
const mongoose = require("mongoose");
const seeder = require("mais-mongoose-seeder");
const { MongoMemoryServer } = require("mongodb-memory-server");
const mongod = new MongoMemoryServer();

const data = require("./seed/data.json");

const User = require("./model/user");
const Team = require("./model/team");

beforeAll(async () => {
  const uri = await mongod.getConnectionString();
  await mongoose.connect(uri, { useNewUrlParser: true });

  try {
    const dbdata = await seeder(mongoose).seed(data, { dropDatabase: true });
    // console.log(dbdata);
  } catch (err) {
    console.error("Error in seeding:", err);
    throw err;
  }
});

test("Test seeding", async () => {
  const users = await User.find();
  expect(users.length).toBe(2);

  const teams = await Team.find();
//   const teams = await Team.find().populate("users");
  expect(teams.length).toBe(2);

  console.log("users:", users);
  console.log("teams:", teams);
});

afterAll(() => {
  mongoose.disconnect();
  mongod.stop();
});
