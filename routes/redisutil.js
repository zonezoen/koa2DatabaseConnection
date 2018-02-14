/**
 * Created by zone on 2018/2/12.
 */

const redisConn = require('../db/redisConnection')
class RedisTest {
    constructor() {
        this.redis = redisConn();
    }

    // connToredis() {  //创建连接对象
    //     return new Promise((resolve, reject) => {
    //         if(this.redis) {
    //             resolve(true) //已创建
    //         } else {
    //             redisConn().then(resp =>  {
    //                 this.redis = resp
    //                 resolve(true) }
    //             ).catch(err => { reject(err) })
    //         }
    //     })
    // }
    setCommand(id, data, expire) {  //增/改
        if (expire === null || expire === undefined) {
            this.redis.set(`test-${id}`, JSON.stringify(data)).then(resp => {
                console.log('set', resp)
                console.log('save success')

            }).catch(err => {
                console.log('err', err)
                console.log('save fail')

            })
        } else {
            this.redis.set(`test-${id}`, JSON.stringify(data), 'ex', expire).then(resp => {  //ex 为过期时间，单位为 秒
                console.log('set', resp)
                console.log('save success')

            }).catch(err => {
                console.log('err', err)
                console.log('save fail')

            })
        }
    }

    getCommand(id) {  //查
        return this.redis.get(`test-${id}`)
        //     .then(resp => {
        //     console.log('get', resp)
        //     console.log('query success')
        //     return resp
        // }).catch(err => {
        //     console.log('err', err)
        //     console.log('query fail')
        // })
    }

    delCommand(id) {
        this.redis.del(`test-${id}`).then(resp => {
            console.log('resp', resp)
        })
    }

    multiCommand(id, data) {
        this.redis.multi().set(`test-${id}`, JSON.stringify(data))
            .get(`test-${id}`).exec((err, resp) => {
            if (err) {
                console.log('save fail')
                console.log('err', err)
            } else {
                console.log('save success')
                console.log('resp', resp)
            }
        })
    }
}
let redisUtil = new RedisTest();
module.exports = redisUtil
//调用上面的对象，实现redis操作
// let redisTest = new RedisTest()  //实例对象
// redisTest.connToredis().then(resp => {  //连接成功后，进行redis操作
//     if(resp) {
//         redisTest.setCommand(123456, {name: 'feifeiyu'})  //增
//         redisTest.getCommand(123456) //查
//         redisTest.setCommand(123456, {name: 'feifeiyu3'}) //改
//         redisTest.getCommand(123456)//查
//         redisTest.delCommand(123456) //删
//         redisTest.getCommand(123456) //差
//         redisTest.multiCommand(123457, {name: 'feifeiyu2'})
//     }
// }).catch(err => {
//     console.log('err', err)
// })
// setTimeout(() => { //再进行一次redis操作
//     redisTest.connToredis().then(resp => {
//         redisTest.setCommand(123458, {name: 'feifeiyu'}, 1)  //过期时间 1秒
//         setTimeout(() => {  //等待过期
//             redisTest.getCommand(123458) //过期返回结果为null
//         }, 2000)
//     })
// }, 2000)