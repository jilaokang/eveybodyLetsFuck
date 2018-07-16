import * as koa from "koa";
import * as Router from "koa-router";
import * as server from "koa-static";
import * as fs from "fs";
import * as koaBody from "koa-body";
import * as mongoose from "mongoose";
import * as config from './src/config/config'

const app = new koa();
const router = new Router();

app.use(koaBody());
app.use(server("./views/dist"));
app.use(router.routes());

router.get("/", async (ctx: koa.Context, next: Function) => {
  ctx.response.body = await fs.readFileSync("./views/dist/index.html", "utf-8");
  next();
});

app.listen(8000);
