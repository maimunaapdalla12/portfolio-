
import express from 'express';
import dotenv from 'dotenv';
import chalk from 'chalk';
import Init_App from './config/init_app.js';
import connectDB from './config/db.js';

dotenv.config();

const app = Init_App();
const port = process.env.PORT || 4500;

app.listen(port, '0.0.0.0', () => {
  console.log(
    chalk.blue.bold(`Server is running on port: ${port}`)
  );
});

connectDB();
