<<<<<<< HEAD
/*
    false security
*/

function passWord() {
    var testV = 1;
    var pass1 = prompt("What is Dewey's favorite desert (three words, all lowercase, no spaces)?",' ');
    while (testV < 3) {
        if (!pass1) 
            history.go(-1);
        if (pass1.toLowerCase() == "key lime pie") {
            alert('Right you are!');
            window.open('protectpage.html');
            break;
            } 
        testV+=1;
        var pass1 = 
            prompt('Access Denied - Password Incorrect, Please Try Again.','Password');
        }
    if (pass1.toLowerCase()!="key lime pie" & testV ==3) 
        history.go(-1);
    return " ";
    }
=======
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
>>>>>>> gh-pages
