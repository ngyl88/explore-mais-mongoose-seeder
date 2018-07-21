# explore-mais-mongoose-seeder

Often we need to create dummy data with dependencies to test an application. I've made this example project to explore Max Eremin's [mais-mongoose-seeder](https://github.com/ermaxnet/mais-mongoose-seeder) package.

As opposed to Sam Verschueren's [mongoose-seeder](https://github.com/SamVerschueren/mongoose-seeder) package, the package requires the seeding options to seed the data.

### How to use mais-mongoose-seeder
index.test.js

```js
const mongoose = require("mongoose");
const seeder = require('mais-mongoose-seeder');
// ...
const data = require('./seed/data.json');
try {
    await seeder(mongoose).seed(data, { dropDatabase: true });
} catch (err) {
    // handle error
}
```

## To run the example

Run the following in terminal.

```
git clone https://github.com/ngyl88/explore-mais-mongoose-seeder
npm install
npm test
```

## Built With

- [Mongoose](http://mongoosejs.com/) - MongoDB object modeling
- [mais-mongoose-seeder](https://github.com/ermaxnet/mais-mongoose-seeder) - MongoDB object modeling
- [mongodb-memory-server](https://github.com/nodkz/mongodb-memory-server) - Testing with MongoDB Memory Server

## References

- [mongoose-seeder](https://github.com/SamVerschueren/mongoose-seeder) - data json set up
