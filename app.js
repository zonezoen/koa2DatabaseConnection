const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

const redisConn = require('./db/redisConnection')

const index = require('./routes/index')
const users = require('./routes/users')


const mongodb = require('./routes/mongodb')
const mysql = require('./routes/mysql')
const redis = require('./routes/redis')

const redisUtil = require('./routes/redisutil')
// redisConn().set("mykey","my_value")
// redisUtil.setCommand(123456, {name: 'feifeiyu'})  //增


// error handler
onerror(app)

// middlewares
app.use(bodyparser({
    enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
    extension: 'ejs'
}))

// logger
app.use(async (ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())

app.use(mongodb.routes(), mongodb.allowedMethods())
app.use(mysql.routes(), mysql.allowedMethods())
app.use(redis.routes(), redis.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
    console.error('server error', err, ctx)
});

module.exports = app
