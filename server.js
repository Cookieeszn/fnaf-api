require('./database/connect');
const express = require('express');
const anima = require('./controllers/anima');
const animaRoutes = require('./routes/route');
const connectDB = require('./database/connect');
const app = express();
require('dotenv').config();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/animatronics', animaRoutes);

// If we can't connect to the DB, the server won't start
const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is open on port ${port}...`));
  } catch (err) {
    console.log(err);
  }
};

start();
