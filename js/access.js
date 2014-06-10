var strCookie = document.cookie;
var found = false;
var loc1, loc2;
var i = 0;

while(i <= strCookie.length)
{
  loc1 = i;
  loc2 = loc1 + 11;

  if(strCookie.substring(loc1,loc2) == "access=true")
  {
      found = true;
      break;
  }
  i++;
}

if(!found)
{
   document.location = "login.html";
}

function deleteCookie()
{
   var d = new Date(2011, 06, 22);
   document.cookie = "access=false;expires="  + d.toGMTString() + "; path=/";
   document.location = "login.htm";
}