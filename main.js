

let open = document.querySelector(".md-box");
let op = 0;

document.querySelector("#md-menu").addEventListener("click",function() {

if(op === 0)
{
    open.style.display = "block";
    op = 1;
    

}
else{
    open.style.display = "none";
    op = 0;

}
    
    
    
});

