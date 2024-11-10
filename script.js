const inputbox = document.getElementById("input-box");
const listbox = document.getElementById("list-box");
function add(){
if(inputbox.value === ""){
    alert("You have to enter something")
}
else{
    let li = document.createElement('li');
    li.innerHTML = inputbox.value;
    listbox.appendChild(li);
    let span = document.createElement('span');
    span.innerHTML = "\u00d7";
    li.appendChild(span)

}
inputbox.value = '';
save()
}
listbox.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        save()
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        save()

    }
}, false)
function save(){
    localStorage.setItem("data", listbox.innerHTML);
}
function display(){
    listbox.innerHTML= localStorage.getItem("data");
}
display();