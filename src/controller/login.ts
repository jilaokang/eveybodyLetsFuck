import * as fs from "fs";
import * as jwt from "jsonwebtoken";
import  config  from "../config/config";
// 无{}为default
import userModel, { User } from "../models/user";

export default class userController {
  public static async login(ctx) {
    ctx.response.body = await fs.readFileSync("views/dist/index.html", "utf-8");

    console.log(await ctx.cookies.get("username"));
  }

  public static async getUser(ctx) {
    let message: String;
    // 获取并查找用户
    const { username, password } = ctx.request.body as User,
      user = (await userModel.findOne({ username })) as User;

    // 根据用户情况进行操作
    if (user) {
      user.password == password
        ? (message = "登陆成功")
        : (message = "密码错误");
    } else {
      new userModel({
        username: username,
        password: password
      }).save();
      message = "注册成功";
    }

    let makeToken = function(username, message) {
      if (message == "登陆成功" || message == "注册成功") {
        const token = jwt.sign({ name: user.username }, config.jwt.secret, {
          expiresIn: config.jwt.expiresIn
        });
        return token;
      }
    };

    ctx.body = {
      message: message,
      token: makeToken(username, message)
    };
  }

  public static async logout(ctx) {
    ctx.response.redirect("/");
  }
}
