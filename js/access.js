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

var pathElements = window.location.pathname.split('/');
var newPathname = "";
for (i = 0; i < pathArray.length-2; i++) {
    newPathname += "/";
    newPathname += pathArray[i];
}
if newPathname.length > 0) {
    newPathname = newPathname + '/';
}
var newURL = window.location.protocol + "//" + window.location.host + "/" + newPathname + 'login.html';

console.log('found = ' + found)
if(!found)
{
    document.location = newURL;
}

function deleteCookie()
{
   var d = new Date(2014, 06, 09);
   document.cookie = "access=false;expires="  + d.toGMTString() + "; path=/";
   document.location = "/login.html";
}