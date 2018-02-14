const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

// MongoDB mongoose 增删改查
router.get('/mongodb/add', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/mongodb/delete', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

router.get('/mongodb/update', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

router.get('/mongodb/query', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})


// Mysql sequelize 增删改查
router.get('/mysql/add', async (ctx, next) => {
    ctx.body = 'koa2 string'
})

router.get('/mysql/delete', async (ctx, next) => {
    ctx.body = {
        title: 'koa2 json'
    }
})

router.get('/mysql/update', async (ctx, next) => {
    ctx.body = {
        title: 'koa2 json'
    }
})

router.get('/mysql/query', async (ctx, next) => {
    ctx.body = {
        title: 'koa2 json'
    }
})

// Redis ioredis 增删改查
router.get('/redis/add', async (ctx, next) => {
    ctx.body = 'koa2 string'
})

router.get('/redis/delete', async (ctx, next) => {
    ctx.body = {
        title: 'koa2 json'
    }
})

router.get('/redis/update', async (ctx, next) => {
    ctx.body = {
        title: 'koa2 json'
    }
})

router.get('/redis/query', async (ctx, next) => {
    ctx.body = {
        title: 'koa2 json'
    }
})

module.exports = router
