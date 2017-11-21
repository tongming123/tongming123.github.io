// JavaScript Document
window.onload=function(){
	var time=document.getElementById("time");
	var arr = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
	
	
	//时间
	var time1=new Date();
	time.innerHTML='今天是'+time1.getFullYear()+'年'+(time1.getMonth()+1)+'月'+time1.getDate()+'号'
	+arr[time1.getDay()];

}