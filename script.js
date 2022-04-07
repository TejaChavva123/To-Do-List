const input_box = document.querySelector(".adder input");
const add_btn = document.querySelector(".adder button");

input_box.onkeyup = () =>{
    let data = input_box.value;
    if (data.trim()!=0){
        add_btn.classList.add("active");
    }
    else{
        add_btn.classList.remove("active");
    }
}
function addEle(){
    let data_stored = input_box.value;
    let new_ele = document.createElement("li");
    const node = document.createTextNode(data_stored);
    new_ele.appendChild(node);
    let span_ele = document.createElement("span");
    let i_ele = document.createElement("i");
    i_ele.className += "fa fa-trash";
    i_ele.addEventListener("click",function(){
        i_ele.parentElement.parentElement.remove();
    });
    span_ele.appendChild(i_ele);
    new_ele.appendChild(span_ele);
    let group = document.getElementById("list");
    group.appendChild(new_ele);
}
function delEle(e){
    e.parentElement.parentElement.remove();
}