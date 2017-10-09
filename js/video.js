var vol=true;
var big=false;
var parse=false;
var video=$("#video");
var file=$("#btn_file");
$(".open").click(function(){
    $("#btn_file").click()
})
file.change(function(){
    $(".open").hide();
    video.get(0).src=URL.createObjectURL(this.files[0]);
    console.log(video.get(0).src);
    video.get(0).play();
})
$(".play span").click(function(){
    if(parse){
        video.get(0).play();
        $(this).removeClass("iconfont icon-zanting").addClass("iconfont icon-iconset0481");
        parse=false;
    }else{
        video.get(0).pause();
        $(this).removeClass("iconfont icon-iconset0481").addClass("iconfont icon-zanting");
        parse=true;
    }
})
video.get(0).addEventListener('timeupdate',function(){
    var tol=this.duration;
    var curtime=this.currentTime;
    //console.log(parseInt((curtime/tol) * 340));
    $(".process b").css('width',parseInt((curtime/tol) * 340));
    $(".process i").css('left',parseInt((curtime/tol) * 340));
})
$(".process").click(function(event){
    var wid=event.clientX-$(this).offset().left;
    video.get(0).currentTime=(wid/340)*video.get(0).duration;
})
var loud;
$(".vol span:first-child").click(function(){
    if(vol){
        loud=video.get(0).volume
        video.get(0).volume=0;
        $(".s b").css('width',0);
        $(".s i").css('left',0);
        $(this).removeClass("iconfont icon-yinliang").addClass("iconfont icon-jingyin");
        vol=false;
    }else{
        video.get(0).volume=loud;
        $(this).removeClass("iconfont icon-jingyin").addClass("iconfont icon-yinliang");
        $(".s b").css('width',parseInt(loud*10000));
        $(".s i").css('left',parseInt(loud*10000));
        vol=true;
    }
})
$(".s").click(function(event){
    var wid=event.clientX-$(this).offset().left;
    $(".s b").css('width',wid);
    $(".s i").css('left',wid);
    video.get(0).volume=(wid/100)/100;
})
var size={};
$(".big").click(function(){
    if(big){
        $(".container").css({
            'width':size.width,
            'height':size.height
        })
        big=false;
    }else{
        size.width=$(".container").width();
        size.height=$(".container").height();
        $(".container").css({
            'width':window.innerWidth,
            'height':window.innerHeight
        })
        big=true;
    }

})