var audio=document.getElementsByTagName("audio")[0];
var srcMusic=[["../music/丑八怪 - 薛之谦.mp3","丑八怪"],["../music/绅士 - 薛之谦.mp3","绅士"],["../music/一半 - 薛之谦.mp3","一半"],["../music/认真的雪 - 薛之谦.mp3","认真的雪"]];
audio.load();
function musicPlay(){
    audio.play();
}
function musicPause(){
    audio.pause();
}
function musicTime($m,$s){
    setTimeout(function(){
        var process=audio.duration;
        var min=parseInt(process/60);
        var secend=parseInt(process%60);
        $m.text(min);
        $s.text(secend);
    },500);
}
function bg(){
    $(".turntable").css('animation','active 3s linear infinite');
    $(".magneticHead").css('transform','rotate(0deg)');
}
function clearbg(){
    $(".turntable").css('animation','');
    $(".magneticHead").css('transform','rotate(-30deg)');
}
var count=0;

$(".play").click(function(){
    count++;
    if(count%2 !== 0){
       /* $(this).text('&#xe610;');
        $(this).removeClass(".icon-zantingtingzhi");*/
        bg();
        musicTime($(".min2"),$(".sec2"));
        musicPlay();
    }else {
        /*$(this).text('');
        $(this).addClass(".icon-zantingtingzhi");*/
        musicPause();
        clearbg();
    }

})
var $index=0;
$(".bottom>div").click(function () {
    $index=$(this).index();
    audio.src=srcMusic[$index][0];
    $(".head span").text(srcMusic[$index][1]);
    musicPlay();
})
audio.addEventListener('timeupdate',function(){
    var proce=audio.currentTime;
    var tol=audio.duration;
    var weiMin=parseInt(proce/60)<10 ? "0"+parseInt(proce/60):parseInt(proce/60);
    var  weiSec=parseInt(proce%60)<10 ? "0"+parseInt(proce%60):parseInt(proce%60);
    $('.min1').text(weiMin);
    $('.sec1').text(weiSec);
    var percent=audio.currentTime/audio.duration;
    $(".pro p").css('width', parseInt($(".pro").width())*percent);
    if (proce>=tol) {
        clearbg();
        $index++;
        if ($index>3) $index=0;
        audio.src=srcMusic[$index][0];
        $(".head span").text(srcMusic[$index][1]);
        musicTime($('.min2'),$('.sec2'));
        musicPlay();
    }
})
$(".pre").click(function() {
    $index--;
    if ($index<0) $index=3;
    audio.src=srcMusic[$index][0];
    $(".head span").text(srcMusic[$index][1]);
    musicTime($('.min2'),$('.sec2'));
    musicPlay();
});
$(".next").click(function() {
    $index++;
    if ($index>3) $index=0;
    audio.src=srcMusic[$index][0];
    musicTime($('.min2'),$('.sec2'));
    $(".head span").text(srcMusic[$index][1]);
    musicPlay();
});
$('.ran').click(function() {
    $index=Math.floor(Math.random()*4);
    audio.src=srcMusic[$index][0];
    $(".head span").text(srcMusic[$index][1]);
    musicPlay();
});
$(".loop").click(function(){
    audio.load();
    musicPlay();
})
$('.pro').click(function(event){
    var wid=event.clientX-$(".pro").offset().left;
    audio.currentTime=parseInt(wid/parseInt($(".pro").width())*audio.duration);
})
$(".loud").click(function(event) {
    event.stopPropagation();
    var volH=$('.loud').offset().top + 91 - event.clientY
    $(".vol").css('height', volH);
    audio.volume=volH/100;
});
var vol;
$(".Vol").click(function () {
    if(audio.volume==0){
        audio.volume=vol;
    }else{
        vol=audio.volume;
        audio.volume=0;
    }
})



