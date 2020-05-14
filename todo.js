var li;
var ul = document.getElementById('list')
var addTodo = document.getElementById('add').addEventListener('click',addItem)
var removeTodo = document.getElementById('remove').addEventListener('click',removeItem)
var removeAllTodo = document.getElementById('removeAll').addEventListener('click',removeAllItem)



function addItem(){
   var input = document.getElementById('input');
   var myValue = input.value;
   console.log(myValue);
   
   var textnode = document.createTextNode(myValue)
   
    //create li

    li = document.createElement('li')

    //create checkbox
    var checkBox = document.createElement('input')
    checkBox.type = 'checkbox';
    checkBox.setAttribute('id','check')

    //create label
    var label = document.createElement('label')
    label.setAttribute('for','item')

    //aad these elements on the web

    ul.appendChild(li)
    li.appendChild(checkBox)
    label.appendChild(textnode)
    li.appendChild(label)
    ul.insertBefore(li,ul.childNodes[0])

    setTimeout(() => {
        li.className = "visual"
    }, 2); 
    
   
    
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