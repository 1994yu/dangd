
var autoIndex=1;
function autoChange()
{
    var pic = document.getElementById("pic");
    pic.style.backgroundImage = "url('images/dd_scroll_" + autoIndex + ".jpg')";
    autoIndex++;
    if (autoIndex == 7)
    {
        autoIndex = 1;
    }
}
window.setInterval("autoChange()",1000);

function onclick1(){
    var pic=document.getElementById("pic");
    pic.style.backgroundImage="url('images/dd_scroll_2.jpg')";
}
function onclick2(){
    var pic=document.getElementById("pic");
    pic.style.backgroundImage="url('images/dd_scroll_3.jpg')";
}
function onclick3(){
    var pic=document.getElementById("pic");
    pic.style.backgroundImage="url('images/dd_scroll_4.jpg')";
}
function onclick4(){
    var pic=document.getElementById("pic");
    pic.style.backgroundImage="url('images/dd_scroll_5.jpg')";
}function onclick5(){
    var pic=document.getElementById("pic");
    pic.style.backgroundImage="url('images/dd_scroll_6.jpg')";
}
function onclick6(){
    var pic=document.getElementById("pic");
    pic.style.backgroundImage="url('images/dd_scroll_1.jpg')";
}

/**
 * Created by Administrator on 2016/7/30 0030.
 */
