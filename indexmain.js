// JavaScript Document
window.onload=function(){
	var box1=document.getElementsByClassName("box");
	var picture=document.getElementsByClassName("body-picture")[0];
	var time=document.getElementById("time");
	var arr = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
	var i=0;
	var timer=null;
	
	
	
	
	//轮播图
	doit();
	timer=setInterval(doit,2000)
	function doit(){
		picture.style.backgroundImage="url(image/xiaoyuanfengjing"+(i+1)+".jpg)";
		for(var t=0;t<box1.length;t++){
			box1[t].style.backgroundColor="";
			}
		box1[i].style.backgroundColor="white";
		i++;
		i=i%4;
		}
	
	
	//时间
	var time1=new Date();
	time.innerHTML='今天是'+time1.getFullYear()+'年'+(time1.getMonth()+1)+'月'+time1.getDate()+'号'
	+arr[time1.getDay()];
	/*for(var c=0;c<box1.length;c++){
		box1[c].onmouseover=function(){
		clearInterval(timer);*/
		
		/*for(var t=0;t<box1.length;t++){
			box1[t].style.backgroundColor="";
			}
		this.style.backgroundColor="yellow"
	}
		box1[c].onmouseout=function(){timer=setInterval(doit,2000)}
		}*/
}