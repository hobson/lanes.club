var strCookie = document.cookie;
var found = false;
var loc1, loc2;
var i = 0;

function get_relative_url(levels_up) {
    levels_up = (typeof levels_up === "undefined") ? 2 : levels_up;

    var pathElements = window.location.pathname.split('/');
    var newPathname = "";
    for (i = 0; i < pathArray.length-levels_up; i++) {
        newPathname += "/";
        newPathname += pathArray[i];
    }
    if newPathname.length > 0) { newPathname += "/"; }
    var newURL = window.location.protocol + "//" + window.location.host + "/" + newPathname;
    return newURL;
    }

newURL = get_relative_url(2)

function deleteCookie() {
    var d = new Date(2014, 06, 09);
    document.cookie = "access=false;expires="  + d.toGMTString() + "; path=/";
    document.location = newURL + "login.html";
    }

while(i <= strCookie.length) {
    loc1 = i;
    loc2 = loc1 + 11;
    // console.log(strCookie.substring(loc1,loc2))
    if(strCookie.substring(loc1,loc2) == "access=true") {
        // console.log("found at " + loc1 + ", " + loc2)
        found = true;
        break;
        }
    i++;
    }

// console.log('found = ' + found)
if(!found) {
    document.location = newURL + "login.html";
    }
