const inpBox = document.getElementById("inputBox");
const listcont = document.getElementById("list");

function addtask(){
    if(inpBox.value === ''){
        alert("write something")
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inpBox.value;
        listcont.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; //--> add a 'x' icon.
        li.appendChild(span); //-->append 'x' icon into the list
    }
    inpBox.value = ''; //--> it used for clear the inputbox after add the task.
    saveData() //--> This fn declared in below(it use to save all data)
}

listcont.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("check");
        saveData()
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
});

function saveData(){ //-->to save data before refresh the page
     localStorage.setItem("data", listcont.innerHTML);
}
function showtask(){
    listcont.innerHTML = localStorage.getItem("data");
}
showtask();