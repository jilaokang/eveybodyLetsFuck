import * as koa from "koa";
import * as koaStatic from "koa-static";
import * as koaBody from "koa-body";
import * as mongoose from "mongoose";
import * as path from "path";
import * as cors from "koa2-cors";

import * as jwt from "jsonwebtoken";
import * as jwtKoa from "koa-jwt";

import routes from "./src/routes/routes";
import { config } from "./src/config/config";

const app = new koa();

mongoose.connect(
  config.mongodb,
  { useNewUrlParser: true }
);

app.use(
  cors({
    origin: "*"
  })
);
app.use(koaBody());
app.use(routes.routes());
app.use(koaStatic(path.join(__dirname, "../views/dist/")));

app.listen(config.PORT);
