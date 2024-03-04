let one = document.getElementById('one');
let two = document.getElementById('two');

let btn= document.getElementById('btn')
btn.addEventListener('click',()=>{
    let img1 = one.src
    let img2 = two.src

    one.src =img2
    two.src = img1
})