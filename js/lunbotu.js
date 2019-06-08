;(function($){
    "use strict" ;
    $.fn.banner = function(options){
        var {list,items,left,right,autoPlay,delayTime,moveTime,index} = options;
        list = list ==false ? false : true;
        autoPlay = autoPlay ===false ? false : true;
        delayTime = delayTime || 5000;
        moveTime = moveTime || 500;
        index = index || 0; 

        if(left !=undefined && left.length>0 && right !=
            undefined && right.length>0){
             let iPrev = items.length-1; 
              left.click(function(){
                  if(index==0){
                      index = items.length-1;
                      iPrev=0;
                  }else{
                      index--;
                      iPrev = index+1;
                  }
                  move(1)
              })
              right.click(function(){
                  if(index==items.length-1){
                      index=0;
                      iPrev=items.length-1;
                  }else{
                      index++;
                      iPrev=index-1;
                  }
                  move(-1)
              })

              let move = function(direct){
                  items.eq(iPrev).css({
                      left:0
                  }).stop().animate({
                      left:items.eq(0).width()*direct
                  },moveTime).end().eq(index).css({
                      left:-items.eq(0).width()*direct
                  }).stop().animate({
                      left:0
                  },moveTime)
                  $(".list").children().eq(iPrev).css({background:""}).end().eq(index).css({background:"blue"})
              }
            }
              if(list){
                  var str = "";
                  for(var i =0;i<items.length;i++){
                      str += `<li>${i+1}</li>`      
              }
              this.append($("<ul class='list'>").html(str));
     $(".list").css({
                width:100,
                height:25,
                position:"absolute",
                left:"30%",bottom:0,
                margin:0,listStyle:"none",padding:0,
                display:"flex"
            }).children().css({
                borderRadius:"50%",
                background:"rgba(200,200,200,0.5)",
                lineHeight:"25px",
                color:"red",
                textAlign:"center",
                cursor:"pointer"
            }).eq(index).css({
                background:"blue"
            })

              
              let move = function(direct,iPrev,iNow){
                  items.eq(iPrev).css({
                      left:0
                  }).stop().animate({
                      left:-items.eq(0).width()*direct
                  },moveTime).end().eq(iNow).css({
                      left:items.eq(0).width()*direct
                  }).stop().animate({
                      left:0
                  },moveTime)
              }
              $(".list").children("li").click(function(){
                  if($(this).index()>index){
                      move(1,index,$(this).index())
                  }
                 if($(this).index()<index){
                     move(-1,index,$(this).index())
                 }
                 $(".list").children("li").eq(index).css({background:""}).end().eq($(this).index()).css({background:"blue"})
                 index=$(this).index();
                })
            }  
            if(autoPlay){
                let timer;
                timer = setInterval(()=>{
                    right.trigger("click")
                },delayTime);
        this.hover(function(){
            clearInterval(timer);
        },function(){
            timer = setInterval(()=>{
                right.trigger("click")
            },delayTime);
        })
    }
}
})(jQuery);                 