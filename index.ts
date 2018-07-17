import * as koa from "koa";
import * as server from "koa-static";
import * as koaBody from "koa-body";
import * as mongoose from "mongoose";

import routes from "./src/routes/routes";
import { config } from "./src/config/config";

const app = new koa();

mongoose.connect(
  config.mongodb,
  { useNewUrlParser: true }
);

app.use(koaBody());
app.use(server("./views/dist"));
app.use(routes.routes());

app.listen(config.PORT);