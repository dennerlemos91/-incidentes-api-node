const mongoose = require('mongoose');

const URL = `mongodb+srv://incidentes:incidentes123456@meucluster-4vqf2.mongodb.net/test?retryWrites=true&w=majority`;

mongoose.Promise = global.Promise;

mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Successfully connected to the database');
  })
  .catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
  });
