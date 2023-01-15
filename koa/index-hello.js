const Koa = require('koa')
const app = new Koa()

app.use(async ctx => {
    console.log(ctx);
    console.log(ctx.request);
    ctx.body = 'Hi';
})

app.listen(3000)