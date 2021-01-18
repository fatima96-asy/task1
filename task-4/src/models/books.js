const mongoose = require('mongoose')
/*mongoose.connect('mongodb://127.0.0.1:27017/g3api',{
    useNewUrlParser:true,
    useCreateIndex: true,
    useUnifiedTopology:true
})*/

const Books = mongoose.model('Books',{
    author:{ 
        type: String,
        required:true,
        trim:true,
        minLength: 2,
        maxLength: 50
    },
    name:{
        type: String,
        required:true,
        trim:true,
        minLength: 2,
        maxLength: 50
        
    },
    date:{
        type:String,
        require:true,
        trim:true,
        updatedAt: Number
    }
})
/*const books =new Books({
    author:'ekhart tol ',
    name:'power of now',
    date: new Date()
})
books.save()
.then(()=>{console.log('inserted')})
.catch((err)=>{console.log('err')})
*/
module.exports = Books