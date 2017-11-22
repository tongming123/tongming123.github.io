// JavaScript Document
window.onload=function(){
	var time=document.getElementById("time");
	var arr = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
	var but=document.getElementById("button");
	var b=document.getElementsByClassName("b")[0];
	var i=true;
	//时间
	var time1=new Date();
	time.innerHTML='今天是'+time1.getFullYear()+'年'+(time1.getMonth()+1)+'月'+time1.getDate()+'号'
	+arr[time1.getDay()];
	//按钮
	but.onclick=function(){
			if(i){
				b.style.animationPlayState="paused";
				i=false;
				but.innerHTML='点我继续';
			}
			else{
				b.style.animationPlayState="running";
				i=true;
				but.innerHTML='点我暂停';
				}
		}
}