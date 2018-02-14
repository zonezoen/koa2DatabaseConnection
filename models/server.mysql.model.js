/**
 * Created by zone on 2018/1/8.
 */
const mSequelize = require('../db/mysqlConnection')
const Sequelize = require('sequelize');
const DataTypes = require('sequelize');


var One = mSequelize.define('one', {
    id: {type: DataTypes.BIGINT(11), autoIncrement: true, primaryKey: true, unique: true, comment: '主键'},
    name: Sequelize.STRING(100)
}, {
    timestamps: true
});

var Two = mSequelize.define('two', {
    // id: {type: DataTypes.BIGINT(11), autoIncrement: true, primaryKey: true, unique: true, comment: '主键'},
    name: Sequelize.STRING(100)
    , oneId: {type: DataTypes.BIGINT(11), field: 'one_id', allowNull: false, comment: '用户Id'}
}, {
    timestamps: false
    , indexes: [{
        // name: 'userAddress_userId',// tableName + field
        method: 'BTREE',
        fields: ['one_id']
    }]
});


One.hasMany(Two, {foreignKey: 'one_id', as: 'two'})

var Tag = mSequelize.define('tag', {
    name: Sequelize.STRING
});

var Product = mSequelize.define('product', {
    title: Sequelize.STRING
});


Product.hasMany(Tag);


//嘉应子 Model
var User = mSequelize.define('user', {
    // id: {type: DataTypes.BIGINT(11), autoIncrement: true, primaryKey: true, unique: true, comment: '主键'},
    nickName: {
        type: DataTypes.STRING,
        defaultValue: "匿名"
    },//昵称
    stuNumber: DataTypes.STRING,//学号
    password: DataTypes.STRING//密码
}, {
    timestamps: true
    , indexes: [{
        // name: 'userAddress_userId',// tableName + field
        method: 'BTREE',
        fields: ['stuNumber']
    }]
});

var Task = mSequelize.define('task', {
    // id: {type: DataTypes.BIGINT(11), autoIncrement: true, primaryKey: true, unique: true, comment: '主键'},
    message: DataTypes.STRING
    , praise: DataTypes.INTEGER
    , userId: {type: DataTypes.INTEGER, field: 'userId', allowNull: false, comment: '用户Id'}
}, {
    timestamps: true
    , indexes: [{
        // name: 'userAddress_userId',// tableName + field
        method: 'BTREE',
        fields: ['userId']
    }]
});

var TaskComment = mSequelize.define('taskComment', {
    // id: {type: DataTypes.BIGINT(11), autoIncrement: true, primaryKey: true, unique: true, comment: '主键'},
    message: DataTypes.STRING
    , creator: DataTypes.STRING
    , taskUser: DataTypes.STRING
    , taskId: {type: DataTypes.INTEGER, field: 'taskId', allowNull: false, comment: '任务Id'}
}, {
    timestamps: true
    , indexes: [{
        // name: 'userAddress_userId',// tableName + field
        method: 'BTREE',
        fields: ['taskId']
    }]
});

User.hasMany(Task,{as:"task"})
Task.hasMany(TaskComment,{as:"taskcomment"})


mSequelize.sync();


// Person.sync({force: true});
module.exports = new Map([
    ['One', One]
    , ['Two', Two]
    , ['Tag', Tag]
    , ['Product', Product]
    , ['User', User]
    , ['Task', Task]
    , ['TaskComment', TaskComment]
]);

