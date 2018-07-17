// jwt -> json web token
import * as fs from "fs";
import { userModel } from "./../models/user";

export default class userController {
  // * public 表示可在外部被访问
  public static async login(ctx) {
    const { username, password } = ctx.request.body;
    const user = (await userModel.findOne({ username })) || null;
    if (user) {
    }
    new userModel({
      username: "dsadsadsa",
      password: "hahaha"
    }).save(err => {
      console.log("ddd");
    });
  }

  public static async getUser(ctx) {}
  public static async logout(ctx) {}
}

// json web token
// - header 头部 声明加密方式和类型
// - payload 载体 存放非铭感信息
// - signature 签名   signature = [header(加密方式)](base64编码(header) + '.' + base64编码(payload), [服务器的私钥])

//  JWT = base64编码(header) + '.' + base64编码(payload) + '.' + signature
