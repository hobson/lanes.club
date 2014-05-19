// requires Sha256.js

function validate(form)
{
  console.log(Sha256.hash(form.password.value))
  if(Sha256.hash(form.password.value) == 'password')
  {
    console.log('validated!!!')
     var date = new Date();
     date.setTime(date.getTime() + (2 * 365 * 24 * 3600 * 1000));
     var expires = "; expires=" + date.toGMTString();
     document.cookie = "access=true" + expires + "; path=/";
     document.location =  "index.html";
  }
  else
  {
     alert("Error: " + form.password.value);
  }
}

function getEnter(e)
{
  console.log('password type')
  if (e.keyCode == 13)
  {
        console.log('password enter')
      var tb = document.getElementById("password");
       if(tb.value == "password")
       {
            console.log('entered!!!')
           // create cookie
          var date = new Date();
          date.setTime(date.getTime() + (86400000));
          var expires = "; expires=" + date.toGMTString();
          document.cookie = "access=true" + expires + "; path=/";
          document.location =  "index.html";

           return false;
      }
  }
}