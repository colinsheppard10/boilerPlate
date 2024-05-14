import * as express from "express";
import * as bodyParser from "body-parser";
import publicRoutes from "./routes/publicRoutes";
import { AppDataSource } from "./entity/initOrm";
import * as dotenv from "dotenv";
import path = require("path");

dotenv.config();
const app = express();

// Initialize typeOrm
AppDataSource.initialize()
  .then(() => {
    // set the port of our application
    // process.env.PORT lets the port be set by Heroku
    let port: any = 3001;

    // Configure App
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    // only using /public routes in boilerplate
    // looking into journal app for example of using auth middleware
    app.use("/public", publicRoutes);

    // start the server
    app.listen(port, () => {
      console.log(`server is listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

export default app;
/*
  start server: 
    - tsc
    - node dist/index.js

  start client
    - yarn start
*/
