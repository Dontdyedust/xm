;(function($){
    "use strict";
    $.fn.banner = function(options){
        var {list,items,left,right,autoPlay,delayTime,moveTime,index} = options;

        list = list===false ? false : true;
        autoPlay = autoPlay===false ? false : true;
        delayTime = delayTime || 2000;
        moveTime = moveTime || 200;
        index = index || 0;

    }
    let iPrev = items.length-1;

        function rightEvent(){
            // B2-2.计算索引
            if(index == items.length-1){
                index = 0;
                iPrev = items.length-1
            }else{
                index++;
                iPrev = index-1;
            }
            // B3-2.开始运动
            move(-1)
        }
        function leftEvent(){
            // B2-1.计算索引
            if(index == 0){
                index = items.length-1;
                iPrev = 0
            }else{
                index--;
                iPrev = index + 1;
            }
            // B3-1.开始运动
            move(1)
        }
    if(autoPlay){
        let timer;
        // A1.开始自动播放，利用jq提供的模拟事件
        timer = setInterval(() => {
            // right.trigger("click")
            rightEvent()
        }, delayTime);

        // A2.鼠标进入和离开大框，分别停止和继续
        this.hover(function(){
            clearInterval(timer);
        },function(){
            timer = setInterval(() => {
                // right.trigger("click")
                rightEvent()
            }, delayTime);
        })
    }



})(jQuery);  