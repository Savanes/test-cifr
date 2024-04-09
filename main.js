const elems = document.querySelectorAll('.flex-con__elem');

for(let i = 0; i < elems.length; i++){
    elems[i].addEventListener("click", function(){
        elems[i].classList.toggle("active")
    })
}
