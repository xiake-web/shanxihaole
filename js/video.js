window.onload = getMsg;
window.onresize = resizeDiv;
window.onerror = function(){}
function $(id) {return document.getElementById(id);}
//短信提示使用(asilas添加)
var divT,divL,divW,divH,docH,docW,docST,docSL,objTimer,i = 0;
function getMsg()
{
try{
divT = parseInt($("eMeng").style.top,10); //层top位置
divL = parseInt($("eMeng").style.left,10); //层left位置
divH = parseInt($("eMeng").offsetHeight,10);//层宽
divW = parseInt($("eMeng").offsetWidth,10);//层高
docW = document.documentElement.clientWidth;//窗口宽
docH = document.documentElement.clientHeight;//窗口高
docST=document.documentElement.scrollTop;
docSL=document.documentElement.scrollLeft;
$("eMeng").style.top = parseInt(docST,10) + docH + 10+"px";
$("eMeng").style.left = parseInt(docSL,10) + docW - divW+"px";
$("eMeng").style.visibility="visible";
objTimer = setInterval("moveDiv()",1);
}
catch(e){}
}
function resizeDiv()
{
try{
divH = parseInt($("eMeng").offsetHeight,10);
divW = parseInt($("eMeng").offsetWidth,10);
docW = document.documentElement.clientWidth;
docH = document.documentElement.clientHeight;
$("eMeng").style.top = docH - divH + parseInt(document.documentElement.scrollTop,10)+"px";
$("eMeng").style.left = docW - divW + parseInt(document.documentElement.scrollLeft,10)+"px";
}
catch(e){}
}
function moveDiv()
{
try{
if(parseInt($("eMeng").style.top,10) <= (docH - divH + parseInt(document.documentElement.scrollTop,10)))
{
window.clearInterval(objTimer)
objTimer = setInterval("resizeDiv()",0)
}
divT = parseInt($("eMeng").style.top,10);
$("eMeng").style.top = divT - 0.1+"px";
}
catch(e){}
}
function closeDiv()
{
$('eMeng').innerHTML='';
$('eMeng').style.visibility='hidden';
if(objTimer) window.clearInterval(objTimer)
}