
function aMove(obj,json,fn){
	clearInterval(obj.timer);
	obj.timer= setInterval(function(){
		var flag = true;
		for(attr in json){
			if(attr == 'opacity'){
				var icur = Math.round(parseFloat(getStyle(obj,attr))*100);
			}else{
				var icur = parseInt(getStyle(obj,attr));
			}
			
			var speed =(json[attr] - icur)/8;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			
			if(icur!=json[attr]){
				flag=false;
			}
			if(attr =='opacity'){
				obj.style[attr] =(icur + speed)/100;
			}else{
				obj.style[attr] =icur + speed +'px';
			}	
			
		}
		if(flag){
			clearInterval(obj.timer)
			if(fn){
				fn();
			}
		}
             },30)
      
}	
// 获得样式函数
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,false)[attr];
	}
}