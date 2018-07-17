// jwt -> json web token
import * as fs from "fs";
import { userModel } from "./../models/user";

export default class userController {
  // * public 表示可在外部被访问
  public static async login(ctx) {
    // const { username, password } = ctx.request.body;
    // const user = (await userModel.findOne({ username })) || null;
    // if (user) {
    // }
    let data = await fs.readFileSync("views/dist/index.html","utf-8")
    ctx.response.body=data
    console.log(__dirname)

    console.log(data)

    new userModel({
      username: "dsadsadsa",
      password: "hahaha"
    }).save();
  }

  public static async getUser(ctx) {}
  public static async logout(ctx) {}
}


