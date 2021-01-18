//routes 
const express = require('express')
const bookModel = require('../models/books')

const router=new express.Router()

router.post('/add',(req,res)=>{
    const books =new bookModel (req.body)
    res.send(books)
    books.save()
    .then(()=>{res.send('inserted')})
    .catch((err)=>{res.send('err')})

})
module.exports = router