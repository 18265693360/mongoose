//cls 清屏


// 菲关系型数据库就是JSON
//mongodb 就是菲关系型数据库
// {
//     id:1,
//     name:"3",
//     sex:"nan"
// }
// 关系型数据库 id title author constent

// show dbs:
//
// use book 创建数据库
//
// create collection title 创建集合
//
// title.insert({title："小米怒对华为"，author:"liuliu"})

// db.


// 打开数据库的新命令
// sudo mongod --config 此处有空格/usr/local/etc/mongod.conf
// 除此之外 就是 mongo
//
// 创建集合 insert插入文档
db.title.insert({title:"小米怒对华为",author:"ewfewg"})
//
db.title.find();//查看数据 _id作为数据的唯一标识符 索引值 主键
{ "_id" : ObjectId("5c7609f3d3415bde84f2ab7a"), "title" : "小米怒对华为", "author" : "ewfewg" }
{ "_id" : ObjectId("5c760ae8d3415bde84f2ab7b"), "title" : "苹果好吃", "author" : "fdsf" }


// use 创建数据库 到达数据库但是数据库中没有数据是不会创建成功的
// //创建成功
// > use class;
// switched to db class
// > db.createCollection("group")
// { "ok" : 1 }
// > show dbs;
// admin   0.000GB
// book    0.000GB
// class   0.000GB
// config  0.000GB
// local   0.000GB
//
//
// //删除数据库
// > use class;
// switched to db class
// > db.dropDatabase();
// { "dropped" : "class", "ok" : 1 }
// > show dbs;
// admin   0.000GB
// book    0.000GB
// config  0.000GB
// local   0.000GB
// >
//
// show tables;
// title
//
// //去除前面的id
// > db.title.find({name:"西游记"},{_id:0})
// > db.title.find({name:"fg"},{_id:0})
// { "name" : "fg", "sex" : "rege" }
//获取 唯一ID值
// > db.title.find({name:"fg"},{_id:1})
// { "_id" : ObjectId("5c7670a38b5ce880ab6b8372") }

//覆盖性更新 更新后只剩更新的东西 其他的都被覆盖
// db.title.update({name:"西游记"},{name:"红楼梦"})
// WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
// > db.title.find()
// { "_id" : ObjectId("5c7670a38b5ce880ab6b8372"), "name" : "fg", "sex" : "rege" }
// { "_id" : ObjectId("5c7673838b5ce880ab6b8373"), "name" : "红楼梦" }

//移除所有信息  后面加({})
// > db.title.remove({})
// WriteResult({ "nRemoved" : 2 })
// > db.title.find()

//记得在键后面添加冒号"："
// > db.user.find({age:{$ne:58}})
// { "_id" : ObjectId("5c7675e28b5ce880ab6b8374"), "name" : "aa", "age" : 18, "sex" : "woman" }
// { "_id" : ObjectId("5c7676288b5ce880ab6b8375"), "name" : "bb", "age" : 28, "sex" : "man" }
// { "_id" : ObjectId("5c76765a8b5ce880ab6b8376"), "name" : "cc", "age" : 38, "sex" : "woman" }
// { "_id" : ObjectId("5c7676708b5ce880ab6b8377"), "name" : "dd", "age" : 48, "sex" : "man" }
// { "_id" : ObjectId("5c7676a28b5ce880ab6b8379"), "name" : "ff", "age" : 68, "sex" : "man" }
// > db.user.find({sex:{$ne"man"8}})
// 2019-02-27T19:53:53.528+0800 E QUERY    [js] SyntaxError: missing : after property id @(shell):1:22
// > db.user.find({sex:{$ne"man"}})
// 2019-02-27T19:54:05.288+0800 E QUERY    [js] SyntaxError: missing : after property id @(shell):1:22
// > db.user.find({sex:{$ne:"man"}})

//大于小于
// > db.user.find({age:{$gt:28,$lt:48}})
// { "_id" : ObjectId("5c76765a8b5ce880ab6b8376"), "name" : "cc", "age" : 38, "sex" : "woman" }
// >

//多键值寻找
// > db.user.find({$and:[{age:{$gt:28,$lt:58}},{sex:"man"}]})
// { "_id" : ObjectId("5c7676708b5ce880ab6b8377"), "name" : "dd", "age" : 48, "sex" : "man" }

//或
// > db.user.find({$or:[{age:28},{age:58}]})
// { "_id" : ObjectId("5c7676288b5ce880ab6b8375"), "name" : "bb", "age" : 28, "sex" : "man" }
// { "_id" : ObjectId("5c7676908b5ce880ab6b8378"), "name" : "ee", "age" : 58, "sex" : "woman" }

//in or 存在区别 in都是同样的键值 or 可以有不同的键值
// db.user.find({$or:[{age:28},{sex:"woman"}]})
//> db.user.find({age:{$in:[28,58]}})
// { "_id" : ObjectId("5c7676288b5ce880ab6b8375"), "name" : "bb", "age" : 28, "sex" : "man" }
// { "_id" : ObjectId("5c7676908b5ce880ab6b8378"), "name" : "ee", "age" : 58, "sex" : "woman" }

//不包括 18-38
// > db.user.find({age:{$not:{$gte:18,$lte:38}}})
// { "_id" : ObjectId("5c7676708b5ce880ab6b8377"), "name" : "dd", "age" : 48, "sex" : "man" }
// { "_id" : ObjectId("5c7676908b5ce880ab6b8378"), "name" : "ee", "age" : 58, "sex" : "woman" }
// { "_id" : ObjectId("5c7676a28b5ce880ab6b8379"), "name" : "ff", "age" : 68, "sex" : "man" }

// > db.fruit.insert({market:"ml",fruitsa:["apple","pear","banana"]})
// WriteResult({ "nInserted" : 1 })
// > db.fruit.insert({market:"m2",fruitsa:["apple","orange","banana"]})
// WriteResult({ "nInserted" : 1 })
// > db.fruit.insert({market:"m3",fruitsa:["orange","pear","banana"]})
// WriteResult({ "nInserted" : 1 })
// > db.fruit.insert({market:"m4",fruitsa:["mongo","lemon"]})
// WriteResult({ "nInserted" : 1 })
// > db.fruit.find()
// { "_id" : ObjectId("5c7689648b5ce880ab6b837a"), "market" : "ml", "fruitsa" : [ "apple", "pear", "banana" ] }
// { "_id" : ObjectId("5c768b3a8b5ce880ab6b837b"), "market" : "m2", "fruitsa" : [ "apple", "orange", "banana" ] }
// { "_id" : ObjectId("5c768b608b5ce880ab6b837c"), "market" : "m3", "fruitsa" : [ "orange", "pear", "banana" ] }
// { "_id" : ObjectId("5c768b848b5ce880ab6b837d"), "market" : "m4", "fruitsa" : [ "mongo", "lemon" ] }
// > db.fruit.find(fruitsa:"apple")
// 2019-02-27T21:08:43.433+0800 E QUERY    [js] SyntaxError: missing ) after argument list @(shell):1:21
// > db.fruit.find({fruitsa:"apple"}))
// 2019-02-27T21:09:27.763+0800 E QUERY    [js] SyntaxError: missing ; before statement @(shell):1:32

//找苹果
// > db.fruit.find({fruitsa:"apple"})
// { "_id" : ObjectId("5c7689648b5ce880ab6b837a"), "market" : "ml", "fruitsa" : [ "apple", "pear", "banana" ] }
// { "_id" : ObjectId("5c768b3a8b5ce880ab6b837b"), "market" : "m2", "fruitsa" : [ "apple", "orange", "banana" ] }
// >

//既要苹果又要梨子
// > db.fruit.find({fruitsa:{$all:["apple","pear"]}})
// { "_id" : ObjectId("5c7689648b5ce880ab6b837a"), "market" : "ml", "fruitsa" : [ "apple", "pear", "banana" ] }

//索引值为1 的水果店 找卖梨子的店铺
// > db.fruit.find({"fruitsa.1":"pear"})
// { "_id" : ObjectId("5c7689648b5ce880ab6b837a"), "market" : "ml", "fruitsa" : [ "apple", "pear", "banana" ] }
// { "_id" : ObjectId("5c768b608b5ce880ab6b837c"), "market" : "m3", "fruitsa" : [ "orange", "pear", "banana" ] }

//只卖两种水果的店
// > db.fruit.find({fruitsa:{$size:2}})
// { "_id" : ObjectId("5c768b848b5ce880ab6b837d"), "market" : "m4", "fruitsa" : [ "mongo", "lemon" ] }

//只取前两种
// > db.fruit.find({fruitsa:"apple"},{_id:0,fruitsa:{$slice:2}})
// { "market" : "ml", "fruitsa" : [ "apple", "pear" ] }
// { "market" : "m2", "fruitsa" : [ "apple", "orange" ] }

//内嵌文档查询

//内嵌文档查询
// > db.people.find({"name.first":"michael","name.last":"jordan"})
// { "_id" : ObjectId("5c7690868b5ce880ab6b837e"), "name" : { "first" : "michael", "last" : "jordan" } }

//> db.user1.find({tel:null})
// { "_id" : ObjectId("5c7693238b5ce880ab6b8383"), "name" : "l4", "tel" : null }
// { "_id" : ObjectId("5c7693448b5ce880ab6b8384"), "name" : "w5" }

//上面不够精细
//下面先判断键存在没有 然后 $in键

// > db.user1.find({tel:{$exists:true,$in:[null]}})
// { "_id" : ObjectId("5c7693238b5ce880ab6b8383"), "name" : "l4", "tel" : null }
// >


//前两个 limit限制
// db.user.find().limit(2)
// { "_id" : ObjectId("5c7675e28b5ce880ab6b8374"), "name" : "aa", "age" : 18, "sex" : "woman" }
// { "_id" : ObjectId("5c7676288b5ce880ab6b8375"), "name" : "bb", "age" : 28, "sex" : "man" }

//跳过前两个
// > db.user.find().skip(2)
// { "_id" : ObjectId("5c76765a8b5ce880ab6b8376"), "name" : "cc", "age" : 38, "sex" : "woman" }
// { "_id" : ObjectId("5c7676708b5ce880ab6b8377"), "name" : "dd", "age" : 48, "sex" : "man" }
// { "_id" : ObjectId("5c7676908b5ce880ab6b8378"), "name" : "ee", "age" : 58, "sex" : "woman" }
// { "_id" : ObjectId("5c7676a28b5ce880ab6b8379"), "name" : "ff", "age" : 68, "sex" : "man" }

//找两个 跳过前三个
// db.user.find().limit(2).skip(3)
// { "_id" : ObjectId("5c7676708b5ce880ab6b8377"), "name" : "dd", "age" : 48, "sex" : "man" }
// { "_id" : ObjectId("5c7676908b5ce880ab6b8378"), "name" : "ee", "age" : 58, "sex" : "woman" }

//没有前后顺序

// > db.user.find().skip(3).limit(2)
// { "_id" : ObjectId("5c7676708b5ce880ab6b8377"), "name" : "dd", "age" : 48, "sex" : "man" }
// { "_id" : ObjectId("5c7676908b5ce880ab6b8378"), "name" : "ee", "age" : 58, "sex" : "woman" }

//排序 倒序
// > db.user.find().sort({_id:-1})
// { "_id" : ObjectId("5c7676a28b5ce880ab6b8379"), "name" : "ff", "age" : 68, "sex" : "man" }
// { "_id" : ObjectId("5c7676908b5ce880ab6b8378"), "name" : "ee", "age" : 58, "sex" : "woman" }
// { "_id" : ObjectId("5c7676708b5ce880ab6b8377"), "name" : "dd", "age" : 48, "sex" : "man" }
// { "_id" : ObjectId("5c76765a8b5ce880ab6b8376"), "name" : "cc", "age" : 38, "sex" : "woman" }
// { "_id" : ObjectId("5c7676288b5ce880ab6b8375"), "name" : "bb", "age" : 28, "sex" : "man" }
// { "_id" : ObjectId("5c7675e28b5ce880ab6b8374"), "name" : "aa", "age" : 18, "sex" : "woman" }

//.sort 有优先级排序 谁在前面谁就是优先
// > db.user.find().sort({age:-1,_id:1})
// { "_id" : ObjectId("5c7676a28b5ce880ab6b8379"), "name" : "ff", "age" : 68, "sex" : "man" }
// { "_id" : ObjectId("5c7676908b5ce880ab6b8378"), "name" : "ee", "age" : 58, "sex" : "woman" }
// { "_id" : ObjectId("5c7676708b5ce880ab6b8377"), "name" : "dd", "age" : 48, "sex" : "man" }
// { "_id" : ObjectId("5c76765a8b5ce880ab6b8376"), "name" : "cc", "age" : 38, "sex" : "woman" }
// { "_id" : ObjectId("5c7676288b5ce880ab6b8375"), "name" : "bb", "age" : 28, "sex" : "man" }
// { "_id" : ObjectId("5c7675e28b5ce880ab6b8374"), "name" : "aa", "age" : 18, "sex" : "woman" }
// > db.user.find().sort({_id:1,age:-1})
// { "_id" : ObjectId("5c7675e28b5ce880ab6b8374"), "name" : "aa", "age" : 18, "sex" : "woman" }
// { "_id" : ObjectId("5c7676288b5ce880ab6b8375"), "name" : "bb", "age" : 28, "sex" : "man" }
// { "_id" : ObjectId("5c76765a8b5ce880ab6b8376"), "name" : "cc", "age" : 38, "sex" : "woman" }
// { "_id" : ObjectId("5c7676708b5ce880ab6b8377"), "name" : "dd", "age" : 48, "sex" : "man" }
// { "_id" : ObjectId("5c7676908b5ce880ab6b8378"), "name" : "ee", "age" : 58, "sex" : "woman" }
// { "_id" : ObjectId("5c7676a28b5ce880ab6b8379"), "name" : "ff", "age" : 68, "sex" : "man" }

//改变键值的值
// > db.user.update({name:"aa"},{$set:{sex:"man"}})
// WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
// > db.user.find()
// { "_id" : ObjectId("5c7675e28b5ce880ab6b8374"), "name" : "aa", "age" : 19, "sex" : "man" }
// { "_id" : ObjectId("5c7676288b5ce880ab6b8375"), "name" : "bb", "age" : 28, "sex" : "man" }
// { "_id" : ObjectId("5c76765a8b5ce880ab6b8376"), "name" : "cc", "age" : 38, "sex" : "woman" }
// { "_id" : ObjectId("5c7676708b5ce880ab6b8377"), "name" : "dd", "age" : 48, "sex" : "man" }
// { "_id" : ObjectId("5c7676908b5ce880ab6b8378"), "name" : "ee", "age" : 58, "sex" : "woman" }
// { "_id" : ObjectId("5c7676a28b5ce880ab6b8379"), "name" : "ff", "age" : 68, "sex" : "man" }

//增加键值
// > db.user.update({name:"aa"},{$set:{love:"美女"}})
// WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
// > db.user.find()
// { "_id" : ObjectId("5c7675e28b5ce880ab6b8374"), "name" : "aa", "age" : 19, "sex" : "man", "love" : "美女" }
// { "_id" : ObjectId("5c7676288b5ce880ab6b8375"), "name" : "bb", "age" : 28, "sex" : "man" }
// { "_id" : ObjectId("5c76765a8b5ce880ab6b8376"), "name" : "cc", "age" : 38, "sex" : "woman" }
// { "_id" : ObjectId("5c7676708b5ce880ab6b8377"), "name" : "dd", "age" : 48, "sex" : "man" }
// { "_id" : ObjectId("5c7676908b5ce880ab6b8378"), "name" : "ee", "age" : 58, "sex" : "woman" }
// { "_id" : ObjectId("5c7676a28b5ce880ab6b8379"), "name" : "ff", "age" : 68, "sex" : "man" }
// 删除键值
// > db.user.update({name:"aa"},{$unset:{love:1}})
// WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })

// @(shell):1:1
// > db.user.find()
// { "_id" : ObjectId("5c7675e28b5ce880ab6b8374"), "name" : "aa", "age" : 19, "sex" : "man" }
// { "_id" : ObjectId("5c7676288b5ce880ab6b8375"), "name" : "bb", "age" : 28, "sex" : "man" }
// { "_id" : ObjectId("5c76765a8b5ce880ab6b8376"), "name" : "cc", "age" : 38, "sex" : "woman" }
// { "_id" : ObjectId("5c7676708b5ce880ab6b8377"), "name" : "dd", "age" : 48, "sex" : "man" }
// { "_id" : ObjectId("5c7676908b5ce880ab6b8378"), "name" : "ee", "age" : 58, "sex" : "woman" }
// { "_id" : ObjectId("5c7676a28b5ce880ab6b8379"), "name" : "ff", "age" : 68, "sex" : "man" }

// 据库相关的指令
// show dbs;  // 查看都有哪些数据库
// use dbname;  // 切换到哪个数据库， 创建一个数据库
// db.dropDatabase();  // 删除数据库
//
// 集合相关的指令
// show collections;  // 查看都有哪些集合
// db.createCollection(name);  // 创建一个集合
// db.集合名.drop();  // 删除一个集合
//
// 文档相关的指令
// db.集合名.insert(); // 插入一个文档
// db.集合名.remove();  // 删除一个文档
// db.集合名.update(); // 修改一个文档
// db.集合名.find(); // 查看都有哪些文档

// $inc  increment 增加
// $set  set 是集合，设置 db.user.update({name:"aa"},{$set:{friends:["小明","小红","小学妹"]}})
// $unset  删除
// $push  向数组中增加一个  db.user.update({name:"aa"},{$push:{friends:"小学弟"}})
//   向数组中增加多个  找数据库命令 mongoDB Documetation  MongoDB.server
// > db.user.update({name:"aa"},{$push:{friends:{$each:["杨幂","谢霆锋","佟丽娅"]}}})
// WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
// > db.user.find()
// { "_id" : ObjectId("5c7675e28b5ce880ab6b8374"), "name" : "aa", "age" : 19, "sex" : "man", "love" : "美女", "friends" : [ "小明", "小红", "小学妹", "小学弟", "杨幂", "谢霆锋", "佟丽娅" ], "friend" : [ "小学弟" ] }


// $pop  删除数组最后一个或第一个
// db.user.update({name:"aa"},{$pop:{friends:-1}})
// > db.user.update({name:"aa"},{$pop:{friends:1}})
// WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })


// $pull  从数组中删除指定的一个
// db.user.update({name:"aa"},{$pull:{friends:"谢霆锋"}})

// $pullAll  从数组中删除多个
// db.user.update({name:"aa"},{$pullAll:{friends:["小红","小学弟"]}})

// $addToSet  向数组中添加一个内容 $push也能添加 不同的是$push能添加重复的 $addToSet他不能
// db.user.update({name:"aa"},{$addToSet:{friends:"杨幂"}})

// （3）	save
// db.user.save({name:"ss"},{age:"3423"})
// 在update语句是，后面的四个参数:
//     参数1：更新条件，同查询条件
// 参数2：具体更新有内容
// 参数3：是一个布尔值，表示如果不存在update的文档，是否插入这个文档，默认是false，不插入
// 参数4：是更新查询所有的文档，true表示更新所有的，false表示只更新第一条记录，默认是false.
//
// db.集合名.save()  相当于update语句中参数3为true,参数4为fals