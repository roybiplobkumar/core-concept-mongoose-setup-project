import dotenv from 'dotenv';
dotenv.config();

export default {
  port: process.env.PORT,
  db_url: process.env.DB_URL,
  salt_rounds:process.env.BCRIPT_SALT_ROUNDS
};
