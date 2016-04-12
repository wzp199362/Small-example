// 解决IE兼容
function getByClass(clsName,parent){
            var oParent = parent?document.getElementById(parent):document,
            eles = [],
            elements = oParent.getElementsByTagName('*');

            for(var i=0;i<elements.length;i++){
                  if(elements[i].className == clsName){
                        eles.push(elements[i]);
                  }
            }

            return eles;
}
window.onload= drag;
// 拖动功能
function drag(){
         var   oTitle = getByClass('login_logo_webqq','loginPanel')[0];
         oTitle.onmousedown= fnDown;
         //隐藏
         var ui = document.getElementById('ui_boxyClose');
            ui.onclick = function(){
                 document.getElementById('loginPanel').style.display='none';
            }
            // 伸缩状态栏
            var  State =document.getElementById('loginState'),
                   StateShow  =document.getElementById('loginStateShow'),
                   State_txt = document.getElementById('login2qq_state_txt'),
                   StatePanel =document.getElementById('loginStatePanel'),
                   lis=StatePanel.getElementsByTagName('li');

             State.onclick =function(e){
                      e = e || window.event;
                     if(e.stopPropagation){
                          e.stopPropagation();
                     }else{
                          e.cancelBubble=true;
                     }
                    StatePanel.style.display = 'block';

             }

             for(var i=0;i<lis.length;i++){
                 lis[i].onmouseover=function(){
                      this.style.background ='#567';
                 }
                 lis[i].onmouseout=function(){
                      this.style.background ='#fff';
                 }
                 lis[i].onclick=function(e){
                        e = e || window.event;
                        if(e.stopPropagation){
                          e.stopPropagation();
                        }else{
                          e.cancelBubble=true;
                        }
                      var id = this.id;
                           StatePanel.style.display = 'none';
                           StateShow.className = '';
                           StateShow.className = 'login-state-show '+id;
                           State_txt.innerHTML =getByClass('stateSelect_text',id)[0].innerHTML;
                 }
             }
             document.onclick = function(){
                         StatePanel.style.display = 'none';
             }
}

// 拖动坐标
function fnDown(event){ 
             var box_place = document.getElementById('loginPanel');
                   box_x = event.clientX - box_place.offsetLeft,
                   box_y = event.clientY - box_place.offsetTop;
            document.onmousemove = function(event){
                  event = event || window.event;
                  fnMove(event,box_x,box_y)
            }
            document.onmouseup = function(){
                   document.onmousemove = null;
                   document.onmouseup =null;
            }
}

function fnMove(e,posx,posy){
    var    box_place = document.getElementById('loginPanel'),
             w =  e.clientX - posx,
             h =   e.clientY - posy,
             winW = document.documentElement.clientWidth || document.body.clientWidth,
             winH = document.documentElement.clientHeight || document.body.clientHeight,
             maxW =winW - box_place.offsetWidth-10,
             maxH =winH - box_place.offsetHeight;
             if(w < 0) {
                w = 0;
             }else if(w > maxW){
                    w =maxW;
             }
             if(h <0){
                h=10;
             }else if( h > maxH){
                h =maxH;
             }
            box_place.style.left = w + 'px';
            box_place.style.top = h + 'px';
}