var mongoose = require("mongoose");

//生成骨架
var book = new mongoose.Schema({
    title: String,
    //声明标题数据类型
    author:String
    //声明作者数据类型
});

//传进去 生成model
module.exports = mongoose.model("bookModel",book)



