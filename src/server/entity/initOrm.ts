import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./User";

const username = process.env.TYPE_ORM_USER_NAME;
const host = process.env.TYPE_ORM_HOST;
const password = process.env.TYPE_ORM_PASSWORD;
const database = process.env.TYPE_ORM_DATABASE;

export const AppDataSource = new DataSource({
  type: 'postgres',
  host,
  port: 5432,
  username,
  password,
  database,
  synchronize: true,
  logging: true,
  entities: [User],
  subscribers: [],
  migrations: [],
  ssl: false
});