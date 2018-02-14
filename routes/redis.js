const router = require('koa-router')()
const config = require('../config/config')
const Redis = require('ioredis');
const redisUtil = require('./redisutil')


router.prefix('/redis')

// Redis ioredis 增删改查
router.get('/index', async (ctx, next) => {
    ctx.body = 'this is index page'
})
router.get('/add1', async (ctx, next) => {
    redisUtil.setCommand(123456, {name: 'feifeiyu'})  //增
    ctx.body = 'this is add page'

})

router.get('/delete1', async (ctx, next) => {
    redisUtil.delCommand(123456) //删
    ctx.body = 'this is delete page'

})

router.get('/update1', async (ctx, next) => {
    redisUtil.setCommand(123456, {name: 'feifeiyu3'}) //改
    ctx.body = 'this is update page'

})

router.get('/query1', async (ctx, next) => {
    let data = await redisUtil.getCommand(123456)
    ctx.body = data
    //查
    // ctx.body = 'this is query page'

})

module.exports = router
