        <SCRIPT>
            function passWord() {
                var testV = 1;
                var pass1 = prompt("What is Dewey's favorite desert (three words, all lowercase, no spaces)?",' ');
                while (testV < 3) {
                    if (!pass1) 
                        history.go(-1);
                    if (pass1.toLowerCase() == "keylimepie") {
                        alert('Right you are!');
                        window.open('protectpage.html');
                        break;
                        } 
                    testV+=1;
                    var pass1 = 
                        prompt('Access Denied - Password Incorrect, Please Try Again.','Password');
                    }
                if (pass1.toLowerCase()!="keylimepie" & testV ==3) 
                    history.go(-1);
                return " ";
                } 
        </SCRIPT>

