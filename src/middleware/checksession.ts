import * as jwt from 'jsonwebtoken'
import * as config from '../config/config'

export default {
  checkLogin: (ctx, next) => {
    if (!ctx.session.user) {
      ctx.body = { message: "未登录" };
      ctx.response.redirect("/");
    }
    next();
  },

  checkLoginout: (ctx, next) => {
    if (ctx.session.user) {
      ctx.body = { message: "已登录" };
      ctx.response.redirect("/#/home");
    }
  }
};

module.exports = {
  checkToken: async ctx => {
    let token = ctx.get("token");
    var data = ctx.request.body;
    let { username } = data;

    return new Promise((reslove, reject) => {
      jwt.verify(token, config.jwt_secret, (err, decoded) => {
        if (err) {
          console.log(err.name, err.message);
          if (err.message == "jwt expired") {
            reject({
              code: 404,
              message: "用户权限过期"
            });
          } else {
            reject({
              code: 404,
              message: "无效的用户权限，请重新登录"
            });
          }
        } else {
          console.log("token success", decoded);
          if (username === decoded.userName) {
            reslove({
              code: 200,
              message: "验证成功"
            });
          } else {
            reject({
              code: 404,
              message: "用户身份不一致"
            });
          }
        }
      });
    });
  }
};
