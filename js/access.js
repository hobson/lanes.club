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
