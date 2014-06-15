var strCookie = document.cookie;
var found = false;
var loc1, loc2;
var i = 0;

console.log(strCookie);

while(i <= strCookie.length)
{
  loc1 = i;
  loc2 = loc1 + 11;
  console.log(strCookie.substring(loc1,loc2))
  if(strCookie.substring(loc1,loc2) == "access=true")
  {
      console.log("found at " + loc1 + ", " + loc2)
      found = true;
      break;
  }
  i++;
}

console.log('found = ' + found)
if(!found)
{
   document.location = "/login.html";
}

function deleteCookie()
{
   var d = new Date(2014, 06, 09);
   document.cookie = "access=false;expires="  + d.toGMTString() + "; path=/";
   document.location = "/login.html";
}