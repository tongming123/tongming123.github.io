// JavaScript Document
window.onload=function(){
	function stop(){			//禁用右键
	  	return false;
	}
	document.oncontextmenu=stop;
	var time=document.getElementById("time");
	var arr = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
	var ul=document.getElementById("im");
	var aImg=ul.getElementsByTagName("img");
	var ul2=document.getElementById("ull2");
	var oImg=ul2.getElementsByTagName("img");
	
	//时间
	var time1=new Date();
	time.innerHTML='今天是'+time1.getFullYear()+'年'+(time1.getMonth()+1)+'月'+time1.getDate()+'号'
	+arr[time1.getDay()];
	
	aImg[0].onmouseover=function(){
		oImg[0].style.display="block";
		}
	aImg[0].onmouseout=function(){
		oImg[0].style.display="none";
		}
	aImg[1].onmouseover=function(){
		oImg[1].style.display="block";
		}
	aImg[1].onmouseout=function(){
		oImg[1].style.display="none";
		}
	aImg[2].onmouseover=function(){
		oImg[2].style.display="block";
		}
	aImg[2].onmouseout=function(){
		oImg[2].style.display="none";
		}
	aImg[3].onmouseover=function(){
		oImg[3].style.display="block";
		}
	aImg[3].onmouseout=function(){
		oImg[3].style.display="none";
		}
}