class Second{
    constructor(){
        this.li1=document.querySelector("#nav-ul .pull-a .pull-1 li:nth-child(1)")
        this.li2=document.querySelector("#nav-ul .pull-a .pull-1 li:nth-child(2)")
        this.li3=document.querySelector("#nav-ul .pull-a .pull-1 li:nth-child(3)")
        this.li4=document.querySelector("#nav-ul .pull-a .pull-1 li:nth-child(4)")
        this.li5=document.querySelector("#nav-ul .pull-a .pull-1 li:nth-child(5)")
        this.li6=document.querySelector("#nav-ul .pull-a .pull-1 li:nth-child(6)")
        this.li7=document.querySelector("#nav-ul .pull-a .pull-1 li:nth-child(7)")
        this.li8=document.querySelector("#nav-ul .pull-a .pull-1 li:nth-child(8)")
        this.pull2=document.querySelector(".pull-2")
        this.pull3=document.querySelector(".pull-3")
        this.pull4=document.querySelector(".pull-4")
        this.pull5=document.querySelector(".pull-5")
        this.pull6=document.querySelector(".pull-6")
        this.pull7=document.querySelector(".pull-7")
        this.pull8=document.querySelector(".pull-8")
        this.pull9=document.querySelector(".pull-9")
        this.init()
    }
    init(){
        var that =this;
        this.li1.onmouseover=function(){
            that.pull2.style.display="block";
        }
        this.li2.onmouseover=function(){
            that.pull3.style.display="block";
        }
        this.li3.onmouseover=function(){
            that.pull4.style.display="block";
        }
        this.li4.onmouseover=function(){
            that.pull5.style.display="block";
        }
        this.li5.onmouseover=function(){
            that.pull6.style.display="block";
        }
        this.li6.onmouseover=function(){
            that.pull7.style.display="block";
        }
        this.li7.onmouseover=function(){
            that.pull8.style.display="block";
        }
        this.li8.onmouseover=function(){
            that.pull9.style.display="block";
        }


        this.li1.onmouseout=function(){
            that.pull2.style.display="none";
        }
        this.li2.onmouseout=function(){
            that.pull3.style.display="none";
        }
        this.li3.onmouseout=function(){
            that.pull4.style.display="none";
        }
        this.li4.onmouseout=function(){
            that.pull5.style.display="none";
        }
        this.li5.onmouseout=function(){
            that.pull6.style.display="none";
        }
        this.li6.onmouseout=function(){
            that.pull7.style.display="none";
        }
        this.li7.onmouseout=function(){
            that.pull8.style.display="none";
        }
        this.li8.onmouseout=function(){
            that.pull9.style.display="none";
        }
    }
}
new Second();