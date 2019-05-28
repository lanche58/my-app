const Koa = require('koa');
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
const carouselData = require('./home/carousel');
const discountData = require('./home/discount');
const likeData = require('./home/like');

let app = new Koa();
app.use(bodyParser());

router.get('/api/1', async (ctx, next) => {
    ctx.body = "index";
});

router.get('/home/carousel', async (ctx, next) => {
    ctx.body = carouselData;
});

router.get('/home/:city', async (ctx, next) => {
    ctx.body = discountData;
});

router.get('/homeLike/:city/:page', async (ctx, next) => {
    const params = ctx.params;
    console.log("城市：", params.city);
    console.log("页数：", params.page);
    ctx.body = likeData;
});

router.get('/api/2', async (ctx, next) => {
    ctx.body = {
        title: 'title1',
        text: 'bbb'
    };
});

router.get('/hello/:name', async (ctx, next) => {
    let name = ctx.params.name;
    ctx.body = `hello, ${name}`;
});

router.post('/api/post', async (ctx, next) => {
    ctx.body = JSON.stringify(ctx.request.body);
});

// 开始服务并生成路由
app.use(router.routes())
    .use(router.allowedMethods());

app.listen(4000);


