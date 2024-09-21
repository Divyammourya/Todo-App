let input = document.querySelector("input");
let ul= document.querySelector("ul");
let btn= document.querySelector("button");

btn.addEventListener("click",function(){
    let item = document.createElement("li");
    item.innerText=input.value;
    ul.appendChild(item);

    input.value="";

    let delbtn=document.createElement("button");
    delbtn.innerText="Delete";
    delbtn.classList.add("delete");
    item.appendChild(delbtn);

})

ul.addEventListener("click",function(event){
    let listitem=event.target.parentElement;
    listitem.remove();
    console.log("Deleted")
})