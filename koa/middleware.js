const Koa = require('koa');
const app = new Koa();

const middleware = function async(ctx, next) {
    console.log('this mw');
    console.log(ctx.request.path);
    next();
    console.log('this mw end');
}

const middleware1 = function async(ctx, next) {
    console.log('this mw1');
    console.log(ctx.request.path);
    next();
    console.log('this mw1 end');
}

const middleware2 = function async(ctx, next) {
    console.log('this mw2');
    console.log(ctx.request.path);
    next();
    console.log('this mw2 end');
} 

app.use(middleware1);
app.use(middleware2);
app.use(middleware);

app.listen(3000);