    var cav=document.getElementById("cav");
    context=cav.getContext("2d");
    clock();
    function clock() {
        var img=new Image();
        img.src="../img/img.jpg";
        context.beginPath();
        context.drawImage(img,0,0,420,420)
        context.closePath();
        context.beginPath();
        context.strokeStyle="#000";
        context.lineWidth=10;
        context.arc(210,210,200,2*Math.PI,false);
        context.stroke();
        context.closePath();
        context.clip();
        context.save();
        context.beginPath();
        context.globalAlpha=0.5;
        /*for(var i=0;i<7;i++){
            context.arc(210,210,35*i,2*Math.PI,false);
            context.fill();
        }*/
        context.closePath();
        context.restore();
        for(var i=0;i<60;i++){
            context.save();
            context.translate(210,210)
            context.rotate(6*i*Math.PI/180);
            context.beginPath();
            context.moveTo(0,-185);
            context.lineTo(0,-195);
            context.closePath();
            context.lineWidth=6;
            context.strokeStyle="#000";
            context.stroke();
            context.restore();
        }
        for(var j=0;j<12;j++){
            context.save();
            context.translate(210,210)
            context.rotate(30*j*Math.PI/180);
            context.beginPath();
            context.moveTo(0,-175);
            context.lineTo(0,-195);
            context.closePath();
            context.lineWidth=6;
            context.strokeStyle="#000";
            context.stroke();
            context.restore();
        }
        var dates=new Date();
        var h=dates.getHours();
        var m=dates.getMinutes();
        var s=dates.getSeconds();
        h=h+m/60;//当前的几点几小时
        m=m+s/60;//当前是几点几分
        var h2=dates.getHours();
        var m2=dates.getMinutes();
        var str1=h2>9?h2:'0'+h2;
        var str2=m2>9?m2:'0'+m2;
        var str=str1+':'+str2;
        context.beginPath();
        context.fillStyle='#00f';
        context.fillText(str,170,350);
        context.font='bold 20px 微软雅黑';
        context.closePath();
        context.save();
        context.translate(210,210);
        context.rotate(30*h*Math.PI/180);
        context.beginPath();
        context.moveTo(0,15);
        context.lineTo(0,-130);
        context.closePath();
        context.strokeStyle='#fff';
        context.lineWidth=10;
        context.stroke();
        context.restore();
        context.save();
        context.translate(210,210);
        context.rotate(6*m*Math.PI/180);
        context.beginPath();
        context.moveTo(0,15);
        context.lineTo(0,-150);
        context.closePath();
        context.strokeStyle='#fff';
        context.lineWidth=5;
        context.stroke();
        context.restore();
        context.save();
        context.translate(210,210);
        context.rotate(6*s*Math.PI/180);
        context.beginPath();
        context.moveTo(0,15);
        context.lineTo(0,-170);
        context.strokeStyle='#fff';
        context.lineWidth=3;
        context.stroke();
        context.closePath();
        context.beginPath();
        context.arc(0,0,8,0,2*Math.PI,true);
        context.fillStyle='#fff';
        context.strokeStyle='#fff';
        context.lineWidth=3;
        context.stroke();
        context.fill();
        context.closePath();
        context.beginPath();
        context.arc(0,-155,4,0,2*Math.PI,true);
        context.fillStyle='#fff';
        context.strokeStyle='#fff';
        context.lineWidth=3;
        context.stroke();
        context.fill();
        context.closePath();
        context.restore();
    }
    setInterval(clock,1000);