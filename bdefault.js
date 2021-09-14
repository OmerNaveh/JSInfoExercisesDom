/* task 1: catch links*/
const p=document.getElementById("p");
p.addEventListener("click" , function (e)
{
    if(!e.target.matches("a"))
    {
        return;
    }
    else
    {

        let a=e.target;
        let leave= confirm("sure you wanna go to : " + a.href)
        if(leave)
        {
            return    
        }
        else
        {
            e.preventDefault();
        }
    }
    })

/*task 2: image gallery*/
const targetphoto= document.getElementById("largeImg");
const allphotos= document.getElementById("thumbs");
allphotos.addEventListener("click", function(e)
{
    let imglink=e.target.closest("a");
    if(!imglink)
    {
        return
    }

        imglink.preventDefault();
        e.target.preventDefault();
        targetphoto.src=showThumbnail(imglink.href,imglink.title);

        function showThumbnail(href, title) {
            targetphoto.src = href;
            targetphoto.alt = title;
          }
})