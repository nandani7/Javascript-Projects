let count=0;

let value=document.getElementById("value");
let btns=document.querySelectorAll(".btn");

console.log(value)

btns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        const style=e.currentTarget.classList
        if(style.contains("decrease")) count--
        else if(style.contains("increase")) count++
        else count=0

        value.textContent=count

        if(count<0) value.style.color="red"
        else if(count>0) value.style.color="green"
        else value.style.color="#222"
    })
});