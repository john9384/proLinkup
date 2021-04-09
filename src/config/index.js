import prodEnv from "./prod";
// import ciEnv from "./ci";
import devEnv from "./dev";
let env;
if (process.env.NODE_ENV === "production") {
  env = prodEnv;
} else if (process.env.NODE_ENV === "ci") {
  //env = ciEnv;
} else {
  env = devEnv;
}
export default env;
