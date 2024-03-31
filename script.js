let inputbox=document.querySelector("#your-text")
let listContainer=document.querySelector("#list-container")
let addtask =document.querySelector("#submit")
let f=/[0-9]/

addtask.addEventListener("click",(event)=>{
    event.preventDefault();

    if(inputbox.value.trim()===""){
        alert("Input-box should not be Empty")
        inputbox.value=""

        // if(event.keyCode>=48 && event.keyCode<=57){
        //     alert("Number format should not be Accepted here")
        // }

        // inputbox= inputbox.replace(/[0-9]/g,"")

        inputbox.focus();
        ajith()
    }
    else if(inputbox.value.length<5){
        alert("The value should be in brief format")
        inputbox.value=""
        // inputbox=inputbox.replace(/[0-9]/g,"")
        inputbox.focus();
    }


    else if(inputbox.value.match(f))
    {
        alert("Numbers are not allowed here")
        inputbox.value=""
    }


    else{
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        inputbox.value=""
        inputbox.focus();
        savedata();
    }
})

listContainer.addEventListener("click",(event)=>{
    event.preventDefault();
    if(event.target.tagName==="LI")
    {
        event.target.classList.toggle("checked")
        savedata();
    }
    else if(event.target.tagName ==="SPAN")
    {
        event.target.parentElement.remove()
        savedata();
    }

}) 


//Usage of the Local storage to store the items Locally in the Browsers.

function savedata(){
    localStorage.setItem("data",listContainer.innerHTML);
}


function showtask(){
    listContainer.innerHTML=localStorage.getItem("data")
}
showtask();

//Set item is to store the item in the browser
//  get item is to get the item in the browser(To-Display)..

// Trim => It is a functionality in Javascript it is used to reduce the empty white spaces in Strings.