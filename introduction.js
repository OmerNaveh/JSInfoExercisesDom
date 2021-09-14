
/*task 1 - make the text dissapear using the button*/
function removeText()
{
    text.hidden="true"
} 
const text= document.getElementById("text");
const button= document.getElementById("btn1");
button.addEventListener("click", removeText)

/*task 2 - make the button dissapear using the button*/
function hideButton()
{
    button.hidden="true";
}
button.addEventListener("click", hideButton)

/*task 3- Which handlers run on click after the following code? Which alerts show up?*/
/*
button.addEventListener("click", () => alert("1"));
button.removeEventListener("click", () => alert("1"));
button.onclick = () => alert(2);
*/
//the button alerts 1 then 2 => because the remove method doesn't recieve the same function as the add method.

/* task 4- Move the ball across the field to a click */

const field= document.getElementById("field");
const ball=document.getElementById("ball");
field.addEventListener("click", (e)=>moveBall(e.clientX,e.clientY));
function moveBall(x,y)
{
    ball.style.top=y+"px";
    ball.style.left=x+"px";
    ball.style.position="fixed"
}
/* task 5- open list when button is clicked */
let menuElem = document.getElementById('sweeties');
let titleElem = menuElem.querySelector('.title');
titleElem.onclick = function() {
  menuElem.classList.toggle('open');
};
/* task 6- remove div on button */
const paragraphs= document.querySelectorAll(".pane");
for(let i of paragraphs)
{
    const removebutton= document.createElement("button");
    removebutton.classList.add("remove-button")
    i.appendChild(removebutton);
    removebutton.addEventListener("click",()=>i.hidden="true");
}
