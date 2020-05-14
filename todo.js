var li;
var ul = document.getElementById('list')
var addTodo = document.getElementById('add').addEventListener('click',addItem)
var removeTodo = document.getElementById('remove').addEventListener('click',removeItem)
var removeAllTodo = document.getElementById('removeAll').addEventListener('click',removeAllItem)



function addItem(){
    console.log('add button clicked');
    
}

function removeItem(){
   li = ul.children
   for (let index = 0; index < li.length; index++) {
      while (li[index] && li[index].children[0].checked) {
        ul.removeChild(li[index])
    }
       
   }
}

function removeAllItem(){
    li = ul.children;
     for (let index = 0; index < li.length; index++) {
         ul.remove(li[index])
     }
 } 