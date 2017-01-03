function change_color(){
   var box=document.getElementById('box');
   var c =['A','B','C','D','E','F',0,1,2,3,4,5,6,7,8,9];
   var s='';
   for(var i=0;i<6;i++){
     var index =Math.floor(Math.random()*16);
     s +=c[index];     
   }  
 document.body.style.backgroundColor = "#"+s;
}
setInterval(change_color,500);