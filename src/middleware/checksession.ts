import * as jwt from "jsonwebtoken";
import config from "../config/config";

export default async (ctx, next) => {
  let token = ctx.get("token");
  let { username } = ctx.request.body;
  
  return new Promise((reslove, reject) => {
    jwt.verify(token, config.jwt.secret, (err, decoded) => {
      if (err) {
        err.message == "jwt expired"
          ? reject({ message: "用户权限过期" })
          : reject({ message: "无效的用户权限，请重新登录" });
      } else {
        username === decoded.userName
          ? reslove({ message: "验证成功" })
          : reject({ message: "用户身份不一致" });
      }
    });
  });
  next();
};
