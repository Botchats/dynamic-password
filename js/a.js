function validation() 
{
  //var x = document.forms["loginform"]["log"].value;
  //var y = document.forms["loginform"]["pwd"].value;
  //var z = document.forms["loginform"]["wp-submit"].value;
        var z =lig();
        if (z==1) 
        {
          alert("welcome to the world of botnets");
          return true;
        }
        else
        {
          alert("incorrect password or username");
          return false;
        }
        
}
function lig(){
var u = document.getElementById("usr").value;
var p = document.getElementById("pas").value;
var m="channachannu"               
var date=[];                          //password function starts
var pass=['8','7','4','8'];
var a=[];
var d = new Date();
var n = d.toTimeString();
date.push(n[0]);
//alert(n[1]);
date.push(n[1]);
//n=n.toString();
date.push(n[3]);
date.push(n[4]);
//q=q.toString();
//var w=n.concat(q);
//alert(w);
//var a ="8x7x0x4x";
//alert(w);
//var a=[8,-1,7,-1,4,-1,0,-1];
//alert(w);
//var p= new String();
for(i=0;i<5;i++)
{ 
 a.push(pass[i]);
a.push(date[i]);
}
var arr = [];
arr = a.join('');
if(u==m)
  { 
    if(p==arr)
     { 
      //alert("loggined in as " + u);
	     return 1;
	   }
     else
     {
    // alert("incorrect password or username");
	     return 0;
       }
   }
   else if(p==""&&u=="")
   {
   //alert("enter the username and password");
   return 0;
   }
   else
  {
//alert("Gubald TM hogu");
	return 0;
  }
}


function myFunction() {
var i=0;
var date=[];
var pass=['8','7','4','8'];
var a=[];
var d = new Date();
var n = d.toTimeString();
date.push(n[0]);
//alert(n[1]);
date.push(n[1]);
//n=n.toString();
//var q = d.getMinutes();
//var q = q.toString();
date.push(n[3]);
date.push(n[4]);
//q=q.toString();
//var w=n.concat(q);
//alert(w);
//var a ="8x7x0x4x";
//alert(w);
//var a=[8,-1,7,-1,4,-1,0,-1];
//alert(w);
//var p= new String();
for(i=0;i<5;i++)
{ 
 a.push(pass[i]);
a.push(date[i]);
}
var arr = []
arr = a.join('');
alert(arr);
}










