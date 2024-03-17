let add = document.getElementById('add')
let remove = document.getElementById('remove')
let ul = document.querySelector('ul')
let inp = document.querySelector('input')

let li;

add.addEventListener("click", ()=>{
 li = document.createElement('li')

 li.textContent = inp.value;

 ul.appendChild(li)

})
remove.addEventListener("click", ()=>{


 ul.removeChild(li)

})
