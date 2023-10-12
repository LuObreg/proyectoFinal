import mongoose from 'mongoose';
import config from '../config.js';

const mongoURI = `${config.mongoURI}/citizenia`;

const connectToDatabase = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conectado a la base de datos "citizenia"');
  } catch (error) {
    console.error('Error de conexión a la base de datos "citizenia":', error);
  }
};

export default connectToDatabase;
