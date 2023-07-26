function trt(){
s=document.getElementById("S1").value;
 
 document.getElementById("a").value = 10-s.length;
 if (s.length>10){
 document.getElementById("S1").value=s.substr(0,10);
 document.getElementById("a").value=0;
 }
}
