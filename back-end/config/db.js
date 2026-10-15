import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const env = process.env.ENV || 'dev';

let DB_URL = '';
if (env === 'dev') {
  DB_URL = process.env.LOCAL_DB;
} else if (env === 'test') {
  DB_URL = process.env.LOCAL_TEST_DB;
} else {
  DB_URL = process.env.DOCKER_DB;
}

console.log('Running environment:', env);
console.log('Using DB URL:', DB_URL);

const connectDB = async () => {
  try {
    await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.info("✅ Successfully connected to the database");
  } catch (err) {
    console.error("❌ Failed to connect to the database");
    console.error(err);
    process.exit(1);
  }
};

export default connectDB;
