const yargs = require('yargs');
const fs= require('fs');

readFileData = function(){
    try{
        data = fs.readFileSync('notes.json')
        if(data.toString().length==0) throw new Error('errrr')
        data = JSON.parse(data.toString())
        if(!Array.isArray(data)) throw new Error('')
    }
    catch(e){
        data = []
        fs.writeFileSync('notes.json', "[]")
    }
    return data    
}
showAllData = function(){
    data = readFileData()
    if(data.length>0) console.table(data);
    else console.log("no notes found")
}
addNewData = function(custom) {
    data = readFileData() //=> return array
    data.push(custom)
    fs.writeFileSync('notes.json', JSON.stringify(data))
}


showAccNumber = function(accNumber){
    data = readFileData()
    result = data.find(element=>{
        return element.accNumber==accNumber
    })
    if(!result) console.log("not found")
    else console.table(result)
}

yargs.command({
    command:"showAcc",
    builder:{ accNumber:{type:'number', demandOption:true}},
    handler:function(argv){showAccNumber(argv.accNumber)}

})

yargs.command({
    command:'showAllCustoms',
    describe:'show all stored notes',
    handler: function(){
        showAllData()
    }
})

yargs.command({
    command:'addCusomer',
    describe:'add new customer',
    builder:{
        name:{
            demandOption:true,
            type:'string'
        },
        balance:{
            demandOption:true,
            type:'number'
        },
        accNumber:{
            demandOption:true,
            type:'number'
        },
    },

    handler:function(argv){
       custom={name:argv.name,balance:argv.balance,accNumber:argv.accNumber}//object data of object
      addNewData(custom)
        
    } 
   
});

yargs.argv


