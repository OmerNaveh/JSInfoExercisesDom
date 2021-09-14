const ul=document.getElementById("ul");
ul.addEventListener("click" , function(e)
{
    const li = e.target;
    if(e.ctrlKey ||e.metaKey)
    {
        li.classList.toggle("selected");
    }
    else{
        let selectedclass= document.querySelectorAll(".selected");
        for(let remove of selectedclass)
        {
            remove.classList.remove("selected");
        }
        li.classList.add("selected");
    }
})