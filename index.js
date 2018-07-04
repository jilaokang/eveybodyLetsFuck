const koa = require('koa')
const koaBody = require('koa-body')
const Router = require('koa-router')
const fs = require('fs')
const server = require('koa-static')

const app = new koa()
const router = new Router()

app.use(koaBody());
app.use(server(__dirname + '/views/dist'))

router.get('/', (ctx, next) => {
    ctx.response.body = fs.readFile('index.html', 'utf-8')
})

app.use(router.routes())

app.listen(3001)