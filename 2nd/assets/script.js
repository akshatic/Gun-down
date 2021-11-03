var start= new Date().getTime();
var kill=0;
var times=0;
function makeshapeappear(){
    randomness();  
    document.getElementById("div").style.display="block";
    start= new Date().getTime();
}

function randomness(){
    var x=Math.floor(100+ Math.random()*200);
    document.getElementById("div").style.top= Math.floor(Math.random()*300) + "px";
    document.getElementById("div").style.left= Math.floor(Math.random()*1250) + "px";
    /*document.getElementById("div").style.height= x + "px";
    document.getElementById("div").style.width= x + "px";
    document.getElementById("div").style.backgroundColor=getRandomColor();*/
}


document.getElementById("div").onclick=function(){
    kill=kill+1;
    document.getElementById("div").style.display="none";
    var end= new Date().getTime();
    var tt=end-start;
    times=times+tt;

    var avg=(times/1000)/kill;
    var average1=avg.toFixed(3);
    document.getElementById("para").innerHTML="<b>Your Time:- </b>"+tt/1000 +"s";
    document.getElementById("kills").innerHTML="<b>Your Kills:- </b>"+ kill;
    document.getElementById("average").innerHTML="<b>Your Average:- </b>"+ average1 +"s";
    setTimeout(function(){
        makeshapeappear();
        },Math.random()*1000);
    
}