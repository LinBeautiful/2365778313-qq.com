const express = require('express') //使用commonjs全局引入express
const app = express()
const port = 8081// 设置端口号
// 链接数据库
var mysql = require('mysql')
// 跨域处理
app.all("/*", function(req, res, next) {
    // 跨域处理
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Type", "application/json;charset=utf-8");
    next()
})
// 数据库
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'ijandan'
  })

connection.connect()



// connection.end()
//limit 20
app.get('/index', (req, res)=>{// 创建了一个路由接口、、可以创建多个接口
connection.query('select * from i_index ', function (err, data) {//请求数据库里的数据
    const obj={
        status:200,
        data
    }
    res.json(obj)
})
})

app.get('/ask', (req, res)=>{// 创建了一个路由接口、、可以创建多个接口
    connection.query('select * from i_ask limit '+req.query.limit+",10", function (err, data) {//请求数据库里的数据
        const obj={
            status:200,
            data
        }
        res.json(obj)
    })
    })

app.get('/tree', (req, res)=>{// 创建了一个路由添加数据库内容接口、、可以创建多个接口
    connection.query('select * from i_tree', function (err, data) {//
        const obj={
            status:200,
            data
        }
        res.json(obj)
    })
    })

app.get('/zoo', (req, res)=>{// 创建了一个路由添加数据库内容接口、、可以创建多个接口
        connection.query('select * from i_zoo limit '+req.query.limit+",5", function (err, data) {//
            const obj={
                status:200,
                data
            }
            res.json(obj)
        })
        })
app.get('/ox', (req, res)=>{// 创建了一个路由添加数据库内容接口、、可以创建多个接口
            connection.query('select * from i_ox', function (err, data) {//
                const obj={
                    status:200,
                    data
                }
                res.json(obj)
            })
            })
app.get('/pic', (req, res)=>{// 创建了一个路由添加数据库内容接口、、可以创建多个接口
                connection.query('select * from i_pic', function (err, data) {//
                    const obj={
                        status:200,
                        data
                    }
                    res.json(obj)
                })
                })
app.get('/top', (req, res)=>{// 创建了一个路由添加数据库内容接口、、可以创建多个接口
                    connection.query('select * from i_top', function (err, data) {//
                        const obj={
                            status:200,
                            data
                        }
                        res.json(obj)
                    })
                    })
app.get('/zhoubian', (req, res)=>{// 创建了一个路由添加数据库内容接口、、可以创建多个接口
                connection.query('select * from i_zhoubian', function (err, data) {//
                    const obj={
                        status:200,
                        data
                    }
                    res.json(obj)
                })
                })
app.get('/pond', (req, res)=>{// 创建了一个路由添加数据库内容接口、、可以创建多个接口
                    connection.query('select * from i_pond', function (err, data) {//
                        const obj={
                            status:200,
                            data
                        }
                        res.json(obj)
                    })
                    })
app.listen(port, () => console.log(`Example app listening on port ${port}!`))// 监听端口