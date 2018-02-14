const router = require('koa-router')()


router.prefix('/mysql')

// Mysql sequelize 增删改查
router.get('/add', async (ctx, next) => {
    ctx.body = 'koa2 string'
})

router.get('/delete', async (ctx, next) => {
    ctx.body = {
        title: 'koa2 json'
    }
})

router.get('/update', async (ctx, next) => {
    ctx.body = {
        title: 'koa2 json'
    }
})

router.get('/query', async (ctx, next) => {
    ctx.body = {
        title: 'koa2 json'
    }
})


module.exports = router
