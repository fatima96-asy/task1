const request = require('request')
const getData =(callback)=>{
    const url=`https://jsonplaceholder.typicode.com/todos`
    request({ url, json:true },(error,response)=>{
        if(error){
        callback('elcode feh error')
        }
        else{
            callback(undefined,response)
        }
    })
   
}
module.exports=getData;