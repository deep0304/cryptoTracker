const neo4j = require("neo4j-driver");
require("dotenv").config();
const uri = process.env.NEO_URI;
const username = process.env.NEO_USERNAME;
const password = process.env.NEO_PASSWORD;
const driver = neo4j.driver(uri, neo4j.auth.basic(username, password));
const connectFunction = async () => {
  try {
    await driver.verifyConnectivity();
    console.log("connected successfully");
  } catch (error) {
    console.log("error");
  } finally {
    await driver.close();
    console.log("closed the driver");
  }
};
connectFunction();
