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
   ;
   
   if(myValue === ""){
    const myParah = document.createElement('p')
    myParah.textContent = 'Invalid Input, please insert something'
    var invalid = document.querySelector('.controls').appendChild(myParah);
    invalid.style.opacity = "1"
        
    setTimeout(() => {
        invalid.style.opacity = "0"
        myParah.remove(invalid)
    }, 2000);
    

}
   else{

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
    
    input.value = ""
   }
    
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
         ul.removeChild(li[index])
     }
 } 