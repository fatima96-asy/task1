//click on add button and add any thing 
var inputList = document .getElementById('items'); //select input
//console.log(inputList)
//--------------------------------------------------------------------

var addButton = document.getElementById('span1');  //select add 
addButton .addEventListener('click',function(){ 
 var   parUl = document.getElementById('parentUl');//select parent 
  var   childLi =document.createElement('li'); //create new element 
 childLi.innerHTML=inputList.value;
 parUl .appendChild(childLi);

 var   childSpan =document.createElement('span') ;//create new element in li as span 
 childSpan.innerHTML='remove';
 childSpan .className='span2'; //conect new span with style in css 
 childLi.appendChild(childSpan);
});



//---------------------------------------------------------------------

//remove the recient list when click on remove button 
var removeButton = document.getElementsByClassName('span2'); //select remove array of li element 
 //console.log(removeButton)
var allItems = document.getElementById('parentUl'); // select ul element 
//console.log(allItems)
for (i=0;i<removeButton.length;i++){
   // console.log(removeButton.length)
removeButton[i].addEventListener("click",function(){
    allItems.removeChild(allItems.childNodes[0]);

});
};
console.log(allItems.childNodes[0])

