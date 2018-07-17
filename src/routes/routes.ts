import * as fs from "fs";
import * as Router from "koa-router";

import user from "../controller/user";

const router = new Router();

router.get("/", user.login);
router.get("/login", user.login);

router.get("*", ctx => {
  ctx.response.redirect("/");
});
export default router;
