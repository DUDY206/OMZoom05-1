let MyConfig = {};

//Nhận 1 trong các giá trị sau: dev | production
let environment = "dev";

if (environment == "dev") {
  MyConfig.language = "vi";
  MyConfig.host = "http://localhost:9899/";
}
if (environment == "production") {
  MyConfig.language = "vi";
  MyConfig.host = "http://34.87.187.198:9999/";
}
export default MyConfig;
