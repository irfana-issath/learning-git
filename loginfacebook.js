const error=document.getElementsByClassName("error");

function handleClearForm(){
     for (let i = 0; i < error.length; i++){
        error[i].innerHTML = "";
}
}

function handleSubmit(){
    const email=document.reg.email.value.trim();
    const password= document.reg.password.value.trim();


   


const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,20}$/

if(email !=""){
   error[0].innerHTML= "The email address or mobile number you entered isn't connected to an account. Find your account and log in."
   return false;
}

// if(!emailRegex.test(email)){
//      error[0].innerHTML = "Email is not valid"
//     return false;
// }

if (password == "") {
        error[1].innerHTML = "Password is required"
        return false;
    }

    if (!passwordRegex.test(password)) {
        error[1].innerHTML = "Password must be between 8 and 20 characters, contain at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character"
        return false;
    }

    alert("Form Submitted");


     return false;


}