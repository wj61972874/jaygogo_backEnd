const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const apiRouter = require('./api');

const app = new Koa();


// 使用 cors 中间件
app.use(cors());

// 中间件
app.use(bodyParser());

// 使用 API 路由
app
    .use(apiRouter.routes())
    .use(apiRouter.allowedMethods());

// 启动服务器
const port = 3399;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});