 
var data = ['Iphone 7','Ipad 4','锤子手机','一加手机2','QQ会员','现金1000块','小米5'],
      time = null,
      flag = 0;
window.onload = function(){
	var btn_play= document.getElementById('btn_play'),
	       btn_stap= document.getElementById('btn_stap');

	       btn_play.onclick = playstart;
	       btn_stap.onclick = stapFun;

	       // 键盘触发
	       document.onkeyup = function(event){
	       	 if( event.keyCode==13){
	       	 	if(flag ==0){
	       	 		playstart();
	       	 		flag = 1;
	       	 	}else{
	       	 		stapFun();
	       	 		flag = 0;
	       	 	}
	       	 }
	       }
}

function playstart(){
	var title = document.getElementById('title'),
	      btn_play= document.getElementById('btn_play');
	 clearInterval(time);
	 time = setInterval(function(){
	      	 var random = Math.floor(Math.random()*data.length);
	      	 title.innerHTML = data[random];
	      },50);
	 btn_play.style.background = '#999';

}

function stapFun(){
	clearInterval(time);
	var btn_play= document.getElementById('btn_play');
	btn_play.style.background = '#0a0a74';
}