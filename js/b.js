function validation() 
{
  //var x = document.forms["loginform"]["log"].value;
  //var y = document.forms["loginform"]["pwd"].value;
  //var z = document.forms["loginform"]["wp-submit"].value;
        var z =sig();
        if (z==1) 
        {
          alert("signed up  succefully");
          return true;
        }
        else if (z==2) {
          alert("password should match");
          return false
        }
        else 
        {
          alert("invalid creditanils");
          return false;
        }
        
}
function sig()
{
  var u = document.getElementById("user").value;
  var p = document.getElementById("pass").value;
  var p1 = document.getElementById("pass1").value;
  if(p!=p1)
  {
    return 2;
  }
  else if (p==""&&p1=="") 
  {
    return 0;
  }
  else
  {
     return 1;
  }

}