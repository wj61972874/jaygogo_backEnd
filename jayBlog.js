const Router = require('koa-router');
const axios = require('axios');

const router = new Router();

// 设置 API 前缀
router.prefix('/api/jayBlog');

// 示例 API 端点
router.get('/dujitang/index', async (ctx) => {
    try {
        const response = await axios.post('https://apis.tianapi.com/dujitang/index', null, {
            params: {
                key: '01fa7878b499ab53f6b6fe8ab77c1d2c'
            }
        });

        // 处理数据
        ctx.body = response.data;
    } catch (err) {
        console.error("天行数据接口调用失败----", err);
        ctx.status = 500;
        ctx.body = { error: 'Internal Server Error' };
    }
});

module.exports = router;