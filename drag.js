// let thumb=document.getElementById("thumb");
// let slider=document.getElementById("slider");

// thumb.onmousedown=function(e){
//     e.preventDefault();
//     let shiftX = e.clientX - thumb.getBoundingClientRect().left;
//     document.addEventListener("mousemove",moveslider);
//     document.addEventListener("mouseup",onMouseUp);
 

//     function moveslider(e)
//         {
//            let newLeft=  e.clientX - shiftX - slider.getBoundingClientRect().left;
//             if (newLeft < 0)
//              {
//                 newLeft = 0;
//              }
//             let rightEdge = slider.offsetWidth - thumb.offsetWidth;
//             if (newLeft > rightEdge)
//              {
//                 newLeft = rightEdge;
//             }
  
//              thumb.style.left = newLeft + 'px';
//         }
    

//         function onMouseUp() {
//             document.removeEventListener('mouseup', onMouseUp);
//             document.removeEventListener('mousemove', moveslider);
//           }
// }
// thumb.ondragstart=function(){return false};

let field=document.getElementById("field");
field.onmousedown=function(e){
    e.preventDefault();
    let shiftY = e.clientY - field.getBoundingClientRect().top;
    document.addEventListener("mousemove",moveheroes);
    document.addEventListener("mouseup",onMouseTop);

    function moveheroes(e)
    {
       let newTop=  e.clientY - shiftY;
        if (newTop < 0)
         {
            newTop = 0;
         }

         field.style.top = newTop + 'px';
    }


    function onMouseTop() {
        document.removeEventListener('mouseup', onMouseTop);
        document.removeEventListener('mousemove', moveheroes);
      }
}

field.ondragstart=function(){return false};