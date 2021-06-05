import * as dotenv from "dotenv";

const envDev = dotenv.config({ path: ".env" });
if (!envDev) {
  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

let dev = {
  env: "dev",
  appName: "ProlinkUP",
  port: 4000,
  jwtSecret: "3p48-94i1u08qfhdj489135u0t9324i=2r02jf449u130",
  tokenType: "Bearer",
  logs: {
    level: process.env.LOG_LEVEL || "silly",
  },
  api: {
    prefix: "http://localhost:4000/api/v1",
  },
};

export default dev;
