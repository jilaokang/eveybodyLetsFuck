import * as koa from "koa";
import * as Router from "koa-router";
import * as server from "koa-static";
import * as fs from "fs";

import * as koaBody from "koa-body";

import * as mongoose from "mongoose";

import * as Config from "./src/config/config";

const app = new koa();
const router = new Router();
const config = new Config("dd");

app.use(koaBody());
app.use(server("./views/dist"));
app.use(router.routes());

mongoose.connection();

router.get("/", async (ctx: koa.Context, next: Function) => {
  ctx.response.body = await fs.readFileSync("./views/dist/index.html", "utf-8");
  next();
});

app.listen(8083, () => {
  console.log("server has been start");
});
