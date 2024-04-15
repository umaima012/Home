let state=false;
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
let state=false;
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
