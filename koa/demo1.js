const Koa = require('koa');
const app = new Koa();

var skip = true;
// x-response-time

app.use(async (ctx, next) => {
  const start = Date.now();
  // if (!skip) return await next();   //使用该语句会跳过后面的中间件
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
  console.log(`ms:${ms}`);
});

// logger

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}`);
  console.log(ctx.request.url);
  console.log(ctx.req.url);
});

// response

app.use(async ctx => {
  ctx.response.body = 'Hello World';
});

app.listen(8000);
