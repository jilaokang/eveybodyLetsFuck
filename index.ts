import * as koa from "koa";
import * as Static from "koa-views";
import * as koaStatic from "koa-static";
import * as koaBody from "koa-body";
import * as mongoose from "mongoose";
import * as path from "path";

import routes from "./src/routes/routes";
import { config } from "./src/config/config";

const app = new koa();

mongoose.connect(
  config.mongodb,
  { useNewUrlParser: true }
);

app.use(koaBody());
// 静态资源配置
app.use(koaStatic(path.join(__dirname, "../views/dist/")));

app.use(routes.routes());

app.listen(config.PORT);
