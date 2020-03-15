window.onload = function(){
    var min = document.querySelector(".min");
    var minimg = document.querySelector(".min img");
    var minbtn = document.querySelector(".min div");
    var max = document.querySelector(".max");
    var maximg = document.querySelector(".max img");

    min.onmouseover = function(){
        minbtn.style.display = "block"
        max.style.display = "block"
        console.log(1)
    }

    min.onmouseout = function(){
        minbtn.style.display = "none"
        max.style.display = "none"
        console.log(2)
    }

    min.onmousemove = function(even) {
        var _x = even.clientX - min.offsetLeft - 50;
        var _y = even.clientY - min.offsetTop - 50;
        console.log(min.offsetTop)
        // console.log(_y)

        minbtn.style.left = _x + "px";
        minbtn.style.top = _y + "px";

        maximg.style.left = -(_x*3) + "px"
        maximg.style.top = -(_y*3) + "px"
    }












}