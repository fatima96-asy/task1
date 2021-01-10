  document.querySelector('#show').addEventListener('click',function(e){
    this.textContent == "Add new item"? this.textContent="hide items":this.textContent="Add new item";
    document.querySelector('#formSection').classList.toggle('d-none');
});


let inputItems = document.querySelectorAll('.inputItems');//select all inputs as array 
let trElement= document.querySelector('#parenttable');//select parent
document.querySelector('#submitButton').addEventListener('click',function(e){
    e.preventDefault();
var child1=document.createElement('tr');//creat new tr
var  child2 =document.createElement('td');//creat td into tr
var  child3 =document.createElement('td');//creat td into tr
var  child4 =document.createElement('td');//creat td into tr
var  child5 =document.createElement('td');//creat td into tr
trElement .appendChild( child1);          //append child1>>table as a tr 
//child1.appendChild( child2);              //append child2>>table as a td
//child2.innerHTML=inputItems[0].value;     //value in td child 

appendMultipleNodes(child1, child2, child3, child4,child5);
child2.innerHTML=inputItems[0].value; 
child3.innerHTML=inputItems[1].value; 
child4.innerHTML=inputItems[2].value;
child5.innerHTML=inputItems[3].value;  
});
function appendMultipleNodes(){
    var args = [].slice.call(arguments);
   // console.log(args );
    for (var x = 1; x < args.length; x++){
        args[0].appendChild(args[x])
    }
    return args[0]
  }
