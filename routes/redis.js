const router = require('koa-router')()
const config = require('../config/config')
const redisUtil = require('./redisutil')


router.prefix('/redis')

// Redis ioredis 增删改查
router.get('/add1', async (ctx, next) => {//增
    let data = await redisUtil.set(123456, {name: 'this message set by zone'})
    ctx.body = 'this is add page . data ==> ' + data
})

router.get('/delete1', async (ctx, next) => {//删
    let data = await redisUtil.del(123456).then(response => {
        console.log(response)
    })
    ctx.body = 'this is delete page . data ==> ' + data
})

router.get('/update1', async (ctx, next) => {
    let data = await redisUtil.set(123456, {name: 'another message update by zone'}) //改
    ctx.body = 'this is update page . data ==> ' + data
})

router.get('/query1', async (ctx, next) => {//查
    let data = await redisUtil.get(123456)
    ctx.body = 'this is query page . data ==> ' + data
})

module.exports = router
