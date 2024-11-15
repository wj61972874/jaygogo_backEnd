const Router = require('koa-router');
const request = require('request');

const router = new Router();

// 设置 API 前缀
router.prefix('/api/jayBlog');

// 示例 API 端点
router.get('/dujitang/index', async (ctx) => {
    await new Promise((resolve, reject) => {
        request.post({
            url: 'https://apis.tianapi.com/dujitang/index',
            form: {
                key: '01fa7878b499ab53f6b6fe8ab77c1d2c'
            }
        }, function (err, response, tianapi_data) {
            if (err) {
                console.error("天行数据接口调用失败----", err);
                ctx.status = 500;
                ctx.body = { error: 'Internal Server Error' };
                return reject(err);
            }
            // 处理数据
            ctx.body = JSON.parse(tianapi_data);
            resolve();
        });
    });
});

module.exports = router;