export const config = {
  PORT: 3000,
  mongodb: "mongodb://localhost:27017/wechat",
  jwt:{
    secret:"jwtdemo",
    expiresIn:"1h"
  }
};
