import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';


dotenv.config();

const sequelize = new Sequelize(
  process.env.POSTGRES_DB as string,
  process.env.POSTGRES_USER as string,
  process.env.POSTGRES_PASSWORD as string,
  {
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT as string, 10),
    dialect: 'postgres',
    logging: console.log
  }
);

export default sequelize;
