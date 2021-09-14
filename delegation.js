
/*task 1 : hide messages using btn - with delegation */ 
const container=document.getElementById("container");
container.addEventListener("click", function (e){
    let btn =e.target
    if(!btn.matches("button"))
    {
        return 
    }
    let pane=e.target.closest(".pane");
    pane.hidden="true";
} );

/*task 2- tree */
const tree= document.getElementById("tree");
tree.addEventListener("click", function (e)
{
    let li=e.target;
    if(!li.matches("li")){return}
    let showhideUl=e.target.closest("ul");
    if(showhideUl.hidden==="true")
    {
        showhideUl.hidden="false";
    }
    else
    {
        showhideUl.hidden="true";
    }
})
