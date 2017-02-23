$(document).ready(function(){
var container=$("#container");
var list=$("#list");
var buttons=$("#buttons span");
var pre=$("#pre");
var next=$("#next");
var index=1;
var annimated=false;
var timer;
next.click(function(){
if(!annimated){
annimate(-500);}
index+=1;
if(index==6){
index=1;
}  
showButton();
})

pre.click(function(){
if(!annimated){
annimate(500);}
index-=1;
if(index==0){
index=5;
}  
showButton();
})

function annimate(y){
 annimated=true;      // 表示是否正在执行动画	
var x=parseInt(list.css("left"))+y+'px';
var time=500;
var interval=10;
var speed=y/(time/interval);
go();
function go(){
if((speed <0 && parseInt(list.css("left"))>parseInt(x))||(speed >0 && parseInt(list.css("left"))<parseInt(x)))
{	
	z=parseInt(list.css("left"))+speed+"px";
	list.css("left",z);
	setTimeout(go,interval);
}
else{
annimated=false;
if(parseInt(x)<=-500&&parseInt(x)>=-2500)
list.css("left",x);
else if(parseInt(x)>-500){
	list.css("left","-2500px");
}
else if(parseInt(x)<-2500) {list.css("left","-500px");}
}}}

function play(){
	timer=setInterval(function(){
		next.click();},3000)
}
function stop(){
	clearInterval(timer);
}

container.mouseover(stop);
container.mouseout(play);
play();

function showButton(){
	for(var i=0;i<buttons.length;i++)
		if(buttons[i].className=="on"){
			buttons[i].className="";
			break;
		}
		buttons[index-1].className="on"; 
}

for (var i=0; i< buttons.length ; i++) {
 $(buttons[i]).click(function(){
 	  var buttonIndex=parseInt(this.getAttribute("index"));
      var z=(index-buttonIndex)*500;
      if(!annimated){
      annimate(z);}
      index=buttonIndex;
      showButton();
 })
}
})