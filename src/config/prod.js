import * as dotenv from "dotenv";

const envProd = dotenv.config({ path: ".env" });
if (!envProd) {
  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

let prod = {
  env: "prod",
  appName: "ProlinkUP",
  port: 4000,
  jwtSecret: "3p48-94i1u08qfhdj489135u0t9324i=2r02jf449u130",
  tokenType: "Bearer",
  logs: {
    level: process.env.LOG_LEVEL || "silly",
  },
  api: {
    prefix: "https://prolinup-api.herokuapp.com/api/v1",
  },
};
export default prod;
