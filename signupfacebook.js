const error=document.getElementsByClassName("error");

function handleClearForm(){
      for(let i=0;i<error.length;i++){
        error[i].innerHTML="";
      }
}


function handleSubmit(){
    const name=document.reg.name.value;
    const username=document.reg.userName.value;
    const email=document.reg.email.value;
    const number=document.reg.number.value;
    const password=document.reg.password.value;
    const confirmPassword=document.reg.confirmPassword.value;


    const emailRegex= /([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}|$)/
    const passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,20}$/

    


    if(name ==""){
        error[0].innerHTML="Name is required"
        return false;
    }
    if(name.length <4 || name.length >16){
        error[0].innerHTML="Name must be between 4 and 16 characters"
        return false;
    }
    if(username ==""){
        error[1].innerHTML="Username is required"
        return false;
    }

     if(username.length < 4 || username.length > 16){
        error[1].innerHTML="Username must be between 4 and 16 characters"
        return false;
    }

    if(email ==""){
        error[2].innerHTML="Email is required"
        return false;
    }

     if(!emailRegex.test(email) ){
        error[2].innerHTML="Email is not valid "
        return false;
    }

    if(number==""){
          error[3].innerHTML="Number is required"
          return false;
    }

    if(number.length != 10){
        error[3].innerHTML="Number must be 10 digits"
        return false;
    }

    if (password == "") {
        error[4].innerHTML = "Password is required"
        return false;
    }

    if (!passwordRegex.test(password)) {
        error[4].innerHTML = "Password must be between 8 and 20 characters, contain at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character"
        return false;
    }

    if(confirmPassword ==""){
          error[5].innerHTML="Confirm Password is required"
          return false;
    }
    
    if(password != confirmPassword){
        error[5].innerHTML="Passwords do not match"
        return false;
    }

    alert("Form Submitted");


    return false;
}

// console.log(name);
// console.log("userName");
// console.log("email");
// console.log("number");
// console.log("password");
// console.log("confirmPassword");

// console.log(error);