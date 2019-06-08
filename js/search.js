class Search{
    constructor(){
        this.sch = document.querySelector(".sch")
        this.searchres = document.querySelector(".search-res")
        this.url = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su"

        this.init()
    }
    init(){
        var that = this;
        this.sch.oninput = function(){
            that.value = this.value;
            that.load();    
        }
    }
    load(){
        var that = this;
        ajax({
            url:this.url,
            data:{
                wd:this.value,
                cloumnName:"cb",
                cb:"asdasdsa"
            },
            type:"jsonp",
            success:function(res){
                that.res = res;
                that.display()
            }
        })
    }
    display(){
        var that = this;
        var str = "";
        for(var i=0;i<this.res.s.length;i++){
            str += `<li>${this.res.s[i]}</li>`
        }
        this.searchres.innerHTML = str;
        this.searchres.style.display="block";
        document.onclick = function(){
            that.searchres.style.display="none";
        }
    }
}

new Search()