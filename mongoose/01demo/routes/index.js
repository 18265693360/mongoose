var express = require('express');
var router = express.Router();
var bookModel = require("../model/book");

/* GET home pages. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//路由引入 model
//增加
router.post('/book',(req,res,next)=>{
  const {title,author} = req.body;//解构赋值
  bookModel.create({title,author}).then(data =>{
    //data 不是date
    //字面量拓展
    console.log(data);
    res.json({
      code:200,
      data
    })
  })
});

// 查询
router.get('/book',(req,res, next) =>{
  let{pn=1,size=2} = req.query;//此处传的是字符串 要的是数字
  //该字符串为数据
  size = Number(size);
  pn = Number(pn);

  bookModel
      .find()
      .limit(size)
      //分页
      .skip((pn-1)*size)
      .then(data =>{
    res.json({
      code:200,
      data
    })
  })
})


// 修改 .put在服务器更新资源（在客户端提供改变后的完整资源 改变全部
// .patch服务器端 客户端提供更改属性）
router.patch("/book",(req,res,next)=> {
  const{_id, author} = req.body;
  // $set后面接一个对象
  bookModel.updateOne({_id},{$set:{author}}).then
  (change => {
        res.json({
          code:200,
          data:change
        })
      })
});

//删除
router.delete("/book/:id",(req,res)=>{
  const{id} = req.params;
  bookModel.deleteOne({_id: id}).then(del =>{
    res.json({
      code:200,
      data:del
    })
  })
});




module.exports = router;
