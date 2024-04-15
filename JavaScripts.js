(function backFunction() 
{
    history.back();
})

(let state=false;
let password=document.getElementById('password');
let passwordStrength=document.getElementById('password-strength');
let lowerUpperCase=document.querySelector('.low-upper-case i');
let number=document.querySelector('.one-number i');
let specialChar=document.querySelector('.one-special-char i');
let eightChar=document.querySelector('.eight-character i');
const button = document. querySelector('button')

function myFunction(show){
    show.classList.toggle('fa-eye-slash')
}
function toggle(){
    if(state){
        password.setAttribute("type","password");
        state=false;
    }
    else{
        password.setAttribute("type","text");
        state=true;
    }
}


    
password.addEventListener('keyup',function(){
    let pass=password.value;
    checkStrength(pass);

});

function checkStrength(passwordstring){
    let strength=0;

   

    //Lower and Upper case 
    if(passwordstring.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)){
        strength=strength+1;
        lowerUpperCase.classList.remove('fa-circle');
        lowerUpperCase.classList.add('fa-check');
    }
    else{
        lowerUpperCase.classList.add('fa-circle');
        lowerUpperCase.classList.remove('fa-check');
    }

    //Contains a Number
    if(passwordstring.match(/([0-9])/)){
        strength=strength+1;
        number.classList.remove('fa-circle');
        number.classList.add('fa-check');
    }
    else{
        number.classList.add('fa-circle');
        number.classList.remove('fa-check'); 
    }

    //Special Character
    if(passwordstring.match(/([!,@,#,$,%,^,&,*,_,?,~])/)){
        strength=strength+1;
        specialChar.classList.remove('fa-circle');
        specialChar.classList.add('fa-check');
    }
    else{
        specialChar.classList.add('fa-circle');
        specialChar.classList.remove('fa-check');
    }
    //Length of password more than 7
    if(passwordstring.length>7){
        strength=strength+1
        eightChar.classList.remove('fa-circle');
        eightChar.classList.add('fa-check');
    }
    else{
        eightChar.classList.add('fa-circle');
        eightChar.classList.remove('fa-check');

    }

    if(strength==0){
        passwordStrength.style='width:0%';
        button. disabled = true;

    }
    else if(strength==2){
        passwordStrength.classList.remove('progress-bar-warning');
        passwordStrength.classList.remove('progress-bar-success');
        passwordStrength.classList.add('progress-bar-danger');
        passwordStrength.style='width:10%';
        button. disabled = true;

    }
    else if(strength==3){
        passwordStrength.classList.remove('progress-bar-success');
        passwordStrength.classList.remove('progress-bar-danger');
        passwordStrength.classList.add('progress-bar-warning');
        passwordStrength.style='width:60%';
        button. disabled = true;

    }

    else if(strength==4){
        passwordStrength.classList.remove('progress-bar-danger');
        passwordStrength.classList.remove('progress-bar-warning');
        passwordStrength.classList.add('progress-bar-success');
        passwordStrength.style='width:100%';
        button. disabled = false;
    }
}
)

( function myFunction() {
    alert("THANK YOU FOR SUBMISSION.\n You will shortly get an confirmation email");
  }
)

(  
            
    function validateEmail()
         {
       
           
           var entered =document.getElementById("eId").value;
           var textshow=document.getElementById("showMessage3");
           var regx= /^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.[a-z]+(.[a-z]+)?$/
       
           if(entered.trim()=="")
           {
   
               textshow.innerHTML="Please enter your email address";
               textshow.style.color="#000000"
           }
   
            else if(entered.match(regx))
            {
       
               textshow.innerHTML="Valid";
               textshow.style.color="#00ff00"
               return true;
            }
       
            else
            {
          
               textshow.innerHTML="Invalid";
               textshow.style.color="#ff0000"
            
               return false;
            }
       
         }
   
         function validatePhone()
         {
   
           var entered = document.getElementById("ph").value;
           var textshow=document.getElementById("showMessage4");
           var regx= /^[0-9]{4}-[0-9]{7}$/
       
           if(entered.trim()=="")
           {
   
               textshow.innerHTML="Please enter a mobile number";
               textshow.style.color="#000000"
               return false;
           }
   
            else if(entered.match(regx))
            {
       
               textshow.innerHTML="Valid";
               textshow.style.color="#00ff00"
               return true;
            }
       
            else
            {
          
               textshow.innerHTML="Invalid";
               textshow.style.color="#ff0000"
            
               return false;
            }
            
        
         }
   
   
   
         function validateFn() 
         {
           var fn= document.getElementById("fname").value;
           var textshow1=document.getElementById("showMessage1");
         //  regx=/^[A-Z]{1}[a-z]+$/
          
          
         
           if (fn.trim()== "") 
           {
             textshow1.innerHTML="First Name must be filled out";
             textshow1.style.color="#000000";
             return false;
   
           }
   
           // else if(fn.match(regx))
           // {
   
           //   textshow1.innerHTML="Valid";
           //   textshow1.style.color="#00ff00"
           //   return true;
   
           // }
   
           // else
           
           // {
   
           //   textshow1.innerHTML="First letter should be UpperCase and rest should be LowerCase";
           //   textshow1.style.color="#ff0000"
           //  return false;
           // }
   
           if(!isNaN(fn))
           {
             textshow1.innerHTML="Only characters are allowed";
             textshow1.style.color="#ff0000";
             return false;
   
           }
   
   
           if(!(fn.charAt(0) === fn.charAt(0).toUpperCase() ))
           {
   
             textshow1.innerHTML="First character must be Uppercase";
             textshow1.style.color="#ff0000";
           }
   
           var stringfname=fn.substr(1);
           if(!(stringfname===stringfname.toLowerCase()))
           {
   
             textshow1.innerHTML="All characters must be Lowercase other than first character";
             textshow1.style.color="#ff0000";
   
           }
   
           if((fn.charAt(0) === fn.charAt(0).toUpperCase() ) && (stringfname===stringfname.toLowerCase()) )
           {
         
             textshow1.innerHTML="Valid"
             textshow1.style.color="#00ff00";
   
             return true;
            }
   
         }
             
         
   
         
         function validateLn()
         {
   
           var ln= document.getElementById("lname").value;
           var textshow2=document.getElementById("showMessage2");
           regx=/^[A-Z]{1}[a-z]+$/
   
           if (ln.trim()== "") 
           {
             textshow2.innerHTML="Last Name must be filled out";
             textshow2.style.color="#000000";
             return false;
   
           }
   
           else if(ln.match(regx))
           {
   
             textshow2.innerHTML="Valid";
             textshow2.style.color="#00ff00"
             return true;
   
           }
   
           else
           
           {
   
             textshow2.innerHTML="First letter should be UpperCase and rest should be LowerCase";
             textshow2.style.color="#ff0000"
            return false;
           }


      
)(function backFunction() 
{
    history.back();
})

(let state=false;
let password=document.getElementById('password');
let passwordStrength=document.getElementById('password-strength');
let lowerUpperCase=document.querySelector('.low-upper-case i');
let number=document.querySelector('.one-number i');
let specialChar=document.querySelector('.one-special-char i');
let eightChar=document.querySelector('.eight-character i');
const button = document. querySelector('button')

function myFunction(show){
    show.classList.toggle('fa-eye-slash')
}
function toggle(){
    if(state){
        password.setAttribute("type","password");
        state=false;
    }
    else{
        password.setAttribute("type","text");
        state=true;
    }
}


    
password.addEventListener('keyup',function(){
    let pass=password.value;
    checkStrength(pass);

});

function checkStrength(passwordstring){
    let strength=0;

   

    //Lower and Upper case 
    if(passwordstring.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)){
        strength=strength+1;
        lowerUpperCase.classList.remove('fa-circle');
        lowerUpperCase.classList.add('fa-check');
    }
    else{
        lowerUpperCase.classList.add('fa-circle');
        lowerUpperCase.classList.remove('fa-check');
    }

    //Contains a Number
    if(passwordstring.match(/([0-9])/)){
        strength=strength+1;
        number.classList.remove('fa-circle');
        number.classList.add('fa-check');
    }
    else{
        number.classList.add('fa-circle');
        number.classList.remove('fa-check'); 
    }

    //Special Character
    if(passwordstring.match(/([!,@,#,$,%,^,&,*,_,?,~])/)){
        strength=strength+1;
        specialChar.classList.remove('fa-circle');
        specialChar.classList.add('fa-check');
    }
    else{
        specialChar.classList.add('fa-circle');
        specialChar.classList.remove('fa-check');
    }
    //Length of password more than 7
    if(passwordstring.length>7){
        strength=strength+1
        eightChar.classList.remove('fa-circle');
        eightChar.classList.add('fa-check');
    }
    else{
        eightChar.classList.add('fa-circle');
        eightChar.classList.remove('fa-check');

    }

    if(strength==0){
        passwordStrength.style='width:0%';
        button. disabled = true;

    }
    else if(strength==2){
        passwordStrength.classList.remove('progress-bar-warning');
        passwordStrength.classList.remove('progress-bar-success');
        passwordStrength.classList.add('progress-bar-danger');
        passwordStrength.style='width:10%';
        button. disabled = true;

    }
    else if(strength==3){
        passwordStrength.classList.remove('progress-bar-success');
        passwordStrength.classList.remove('progress-bar-danger');
        passwordStrength.classList.add('progress-bar-warning');
        passwordStrength.style='width:60%';
        button. disabled = true;

    }

    else if(strength==4){
        passwordStrength.classList.remove('progress-bar-danger');
        passwordStrength.classList.remove('progress-bar-warning');
        passwordStrength.classList.add('progress-bar-success');
        passwordStrength.style='width:100%';
        button. disabled = false;
    }
}
)

( function myFunction() {
    alert("THANK YOU FOR SUBMISSION.\n You will shortly get an confirmation email");
  }
)

(  
            
    function validateEmail()
         {
       
           
           var entered =document.getElementById("eId").value;
           var textshow=document.getElementById("showMessage3");
           var regx= /^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.[a-z]+(.[a-z]+)?$/
       
           if(entered.trim()=="")
           {
   
               textshow.innerHTML="Please enter your email address";
               textshow.style.color="#000000"
           }
   
            else if(entered.match(regx))
            {
       
               textshow.innerHTML="Valid";
               textshow.style.color="#00ff00"
               return true;
            }
       
            else
            {
          
               textshow.innerHTML="Invalid";
               textshow.style.color="#ff0000"
            
               return false;
            }
       
         }
   
         function validatePhone()
         {
   
           var entered = document.getElementById("ph").value;
           var textshow=document.getElementById("showMessage4");
           var regx= /^[0-9]{4}-[0-9]{7}$/
       
           if(entered.trim()=="")
           {
   
               textshow.innerHTML="Please enter a mobile number";
               textshow.style.color="#000000"
               return false;
           }
   
            else if(entered.match(regx))
            {
       
               textshow.innerHTML="Valid";
               textshow.style.color="#00ff00"
               return true;
            }
       
            else
            {
          
               textshow.innerHTML="Invalid";
               textshow.style.color="#ff0000"
            
               return false;
            }
            
        
         }
   
   
   
         function validateFn() 
         {
           var fn= document.getElementById("fname").value;
           var textshow1=document.getElementById("showMessage1");
         //  regx=/^[A-Z]{1}[a-z]+$/
          
          
         
           if (fn.trim()== "") 
           {
             textshow1.innerHTML="First Name must be filled out";
             textshow1.style.color="#000000";
             return false;
   
           }
   
           // else if(fn.match(regx))
           // {
   
           //   textshow1.innerHTML="Valid";
           //   textshow1.style.color="#00ff00"
           //   return true;
   
           // }
   
           // else
           
           // {
   
           //   textshow1.innerHTML="First letter should be UpperCase and rest should be LowerCase";
           //   textshow1.style.color="#ff0000"
           //  return false;
           // }
   
           if(!isNaN(fn))
           {
             textshow1.innerHTML="Only characters are allowed";
             textshow1.style.color="#ff0000";
             return false;
   
           }
   
   
           if(!(fn.charAt(0) === fn.charAt(0).toUpperCase() ))
           {
   
             textshow1.innerHTML="First character must be Uppercase";
             textshow1.style.color="#ff0000";
           }
   
           var stringfname=fn.substr(1);
           if(!(stringfname===stringfname.toLowerCase()))
           {
   
             textshow1.innerHTML="All characters must be Lowercase other than first character";
             textshow1.style.color="#ff0000";
   
           }
   
           if((fn.charAt(0) === fn.charAt(0).toUpperCase() ) && (stringfname===stringfname.toLowerCase()) )
           {
         
             textshow1.innerHTML="Valid"
             textshow1.style.color="#00ff00";
   
             return true;
            }
   
         }
             
         
   
         
         function validateLn()
         {
   
           var ln= document.getElementById("lname").value;
           var textshow2=document.getElementById("showMessage2");
           regx=/^[A-Z]{1}[a-z]+$/
   
           if (ln.trim()== "") 
           {
             textshow2.innerHTML="Last Name must be filled out";
             textshow2.style.color="#000000";
             return false;
   
           }
   
           else if(ln.match(regx))
           {
   
             textshow2.innerHTML="Valid";
             textshow2.style.color="#00ff00"
             return true;
   
           }
   
           else
           
           {
   
             textshow2.innerHTML="First letter should be UpperCase and rest should be LowerCase";
             textshow2.style.color="#ff0000"
            return false;
           }


      
)