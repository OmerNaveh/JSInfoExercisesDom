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

let isDragging = false;

document.addEventListener('mousedown', function(event) {
  let draggable = event.target.closest('.draggable');
  if (!draggable) return;
  event.preventDefault();
  draggable.ondragstart = function() { //removes default browser
      return false;
  };
  let coords, shiftX, shiftY;
  startDrag(draggable, event.clientX, event.clientY);
  function onMouseUp(event) {
    finishDrag();
  };

  function onMouseMove(event) {
    moveAt(event.clientX, event.clientY);
  }

  // on drag start:
  //   remember the initial shift
  //   move the element position:fixed and a direct child of body
  function startDrag(element, clientX, clientY) {
    if(isDragging) {
      return;
    }

    isDragging = true;

    document.addEventListener('mousemove', onMouseMove);
    element.addEventListener('mouseup', onMouseUp);

    shiftX = clientX - element.getBoundingClientRect().left;
    shiftY = clientY - element.getBoundingClientRect().top;

    element.style.position = 'fixed';

    moveAt(clientX, clientY);
  };

  // switch to absolute coordinates at the end, to fix the element in the document
  function finishDrag() {
    if(!isDragging) {
      return;
    }

    isDragging = false;

    draggable.style.top = parseInt(draggable.style.top) + window.pageYOffset + 'px';
    draggable.style.position = 'absolute';

    document.removeEventListener('mousemove', onMouseMove);
    draggable.removeEventListener('mouseup', onMouseUp);
  }

  function moveAt(clientX, clientY) {
    // new window-relative coordinates
    let newX = clientX - shiftX;
    let newY = clientY - shiftY;

    // check if the new coordinates are below the bottom window edge
    let newBottom = newY + draggable.offsetHeight; // new bottom

    // below the window? let's scroll the page
    if (newBottom > document.documentElement.clientHeight) {
      // window-relative coordinate of document end
      let docBottom = document.documentElement.getBoundingClientRect().bottom;

      // scroll the document down by 10px has a problem
      // it can scroll beyond the end of the document
      // Math.min(how much left to the end, 10)
      let scrollY = Math.min(docBottom - newBottom, 10);

      // calculations are imprecise, there may be rounding errors that lead to scrolling up
      // that should be impossible, fix that here
      if (scrollY < 0) scrollY = 0;

      window.scrollBy(0, scrollY);

      // a swift mouse move make put the cursor beyond the document end
      // if that happens -
      // limit the new Y by the maximally possible (right at the bottom of the document)
      newY = Math.min(newY, document.documentElement.clientHeight - draggable.offsetHeight);
    }

    // check if the new coordinates are above the top window edge (similar logic)
    if (newY < 0) {
      // scroll up
      let scrollY = Math.min(-newY, 10);
      if (scrollY < 0) scrollY = 0; // check precision errors

      window.scrollBy(0, -scrollY);
      // a swift mouse move can put the cursor beyond the document start
      newY = Math.max(newY, 0); // newY may not be below 0
    }


    // limit the new X within the window boundaries
    // there's no scroll here so it's simple
    if (newX < 0) newX = 0;
    if (newX > document.documentElement.clientWidth - draggable.offsetWidth) {
      newX = document.documentElement.clientWidth - draggable.offsetWidth;
    }

    draggable.style.left = newX + 'px';
    draggable.style.top = newY + 'px';
  }

});