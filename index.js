import app from "./server.js";
//import mongoose from "mongoose";
import dotenv from "dotenv";
import mongodb from "mongodb"
import accountsDAO from "../auth/dao/accountsDAO.js";

dotenv.config();

const port = process.env.PORT || 8080;
const MongoClient = mongodb.MongoClient;

MongoClient.connect(
    process.env.ACCOUNT_DB_URI,
    {
        maxPoolSize: 50,
        wtimeoutMS: 2500,
        useNewUrlParser: true,
    }
)
.catch(err => {
    console.error(err.stack)
    process.exit(1)
})
.then(async client => {

    await accountsDAO.injectDB(client);

    app.listen(port, () => {
        console.log(`listening on port ${port}`)
    })
})