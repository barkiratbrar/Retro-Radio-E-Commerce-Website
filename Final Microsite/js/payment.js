// Alert response code giving message:Thank you for your Purchase!
document.getElementById("input_group").addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Thank you for your purchase!");
            
            this.reset();
        });
     //Phone number javascript to accept a particular pattern only
        function phonenumber(inputtxt)
        {
          var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
          if(inputtxt.value.match(phoneno))
             {
               return true;
             }
           else
             {
               alert("Not a valid Phone Number");
               return false;
             }
        }

    