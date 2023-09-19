const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

const heroRouter = require('./routes/HeroRoutes');

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use('/api/heros', heroRouter);

const PORT =  3001;

async function startServer() {
  try {
    await connectToMongoDB(); // Connect to MongoDB before starting the server

    const Hero = mongoose.model('Hero');
    const count = await Hero.countDocuments();
    if (count === 0) {
      console.warn('База даних пуста');
    } else {
      console.log(`Кількість записів в базі даних: ${count}`);
    }

    app.listen(PORT, () => {
      console.log(`Server is running on ${PORT}`);
    });
  } catch (error) {
    console.error('Error starting server:', error);
  }
}

async function connectToMongoDB() {
  try {
    await mongoose.connect(
      process.env.MONGODB_URI ||
        'mongodb+srv://admin:12345678FOK@cluster0.etocy3l.mongodb.net/heroes?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

startServer();

module.exports = app;