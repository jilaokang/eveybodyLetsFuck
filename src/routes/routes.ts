import * as Router from "koa-router";
import login from "../controller/login";
import home from "../controller/home";
import chating from "../controller/chating";

import checkLogin from "../middleware/checksession";

const router = new Router();

router.get("/", login.login);
router.post("/", login.getUser);

router.get("/home", home.roomList);
router.post("/home",  home.roomadd);

router.get("/chat", checkLogin.checkLogin, chating.content);
router.post("/chat", checkLogin.checkLogin, chating.push);

export default router;
