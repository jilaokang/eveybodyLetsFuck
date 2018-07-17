import * as fs from "fs";
import * as Router from "koa-router";

import user from "../controller/user";

const router = new Router();

router.get("/", user.login);


export default router;
