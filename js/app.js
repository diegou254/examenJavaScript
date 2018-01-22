var i;
var divs = document.getElementById('display');
for(i=0;i<divs.length;i++) {
  if(divs[i].className == 'pantalla') {
    divs[i].innerHTML = divs[i].innerHTML.substring(0,8);
  }
}

x="0";
xi=1; 
coma=0;

function numero(xx) { 
         if (x=="0" || xi==1  ) {
            document.getElementById("display").innerHTML=xx;
            x=xx; 
            if (xx==".") { 
               document.getElementById("display").innerHTML="0."; 
               x=xx; 
               coma=1;
               }
           }
           else {
               if (xx=="." && coma==0) { 
                   document.getElementById("display").innerHTML+=xx;
                   x+=xx;
                   coma=1;
               }
              
               else if (xx=="." && coma==1) {} 
               
               else {
                   document.getElementById("display").innerHTML+=xx;
                   x+=xx
               }
            }
            xi=0 
         }


function operar(s) {
         ni=x;
         op=s;
         xi=1;
}

function igualar() {
         if (op=="no") { 
            document.getElementById("display").innerHTML=x;	
            }
         else { //con operación pendiente resolvemos
            sl=ni+op+x; 
            sol=eval(sl); 
            document.getElementById("display").innerHTML=sol; 
            x=sol; 
            op="no"; 
            xi=1;
            }
}

function opuest() { 
            nx=Number(x); 
            nx=-nx;
            x=String(nx); 
            document.getElementById("display").innerHTML=x;
}

function borradoTotal() {
         document.getElementById("display").innerHTML=0;
         x="0"; 
         coma=0;
         ni=0; 
         op="no";
}

