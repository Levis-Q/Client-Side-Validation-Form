const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});


// FOR ERRORS //

function checkInputs () {
    // get the values froom the inputs //

    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (usernameValue === '') {
        // show error
        // add error class
        setErrorFor(username, 'Username cannot be blank');
    } else {
        // add success class
        setSuccessFor(username);
    }

    if (emailValue === '') {
        // show error
        // add error class
        setErrorFor(email, 'Email cannot be blank');
    }else  if (!validateEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid');
    }else {
        setSuccessFor(email);
    }
        
    if (passwordValue === '') {
        // show error
        // add error class
        setErrorFor(password, 'password cannot be blank');
    }else  if (!checkPassword(passwordValue)) {
        setErrorFor(password, 'Password error use @._-?123!Caps');    
    } else {
        // add success class
        setSuccessFor(password);
    }
    
    if (password2Value === '') {
        // show error
        // add error class
        setErrorFor(password2, 'password cannot be blank');
    } else if (passwordValue !== password2Value) {
        setErrorFor(password2, 'passowrds do not match');         
    } else {
        // add success class
        setSuccessFor(password2);
    }
}


// For Success //

function setErrorFor(input, message) {
    const formControl = input.parentElement; // .form-control
    const small = formControl.querySelector('small');

    // add error message inside small
    small.innerText = message;

    // add error class
    formControl.className = 'form-control error';

}

function setSuccessFor(input) {
    const formControl = input.parentElement; // .form-control
    formControl.className = 'form-control success';
}


// JAVASCRIPT REGEX FOR EMAIL VALIDATION  Ctrl+C & Ctrl+V// 

function validateEmail(elementValue){      
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(elementValue); 
  } 
    

//   JAVASCRIPT REGEX FOR PASSWORD VALIDATION  Ctrl+C & Ctrl+V //

  function checkPassword(str)
  {
      var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
      return re.test(str);
  }  

  console.log(alert); {
  }