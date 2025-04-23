

function validateRegistrationForm() {
  const fname = document.getElementById('fname');
  const lname = document.getElementById('lname');
  const emailid = document.getElementById('emailid');
  const password = document.getElementById('password');
  const dob = document.getElementById('dob');
  const genderOptions = document.getElementsByName('gender');
  
  let valid = true;
  let errorMsg = '';

  if (fname && fname.value.trim() === '') {
    errorMsg += 'First Name is required.\n';
    valid = false;
  }
  if (lname && lname.value.trim() === '') {
    errorMsg += 'Last Name is required.\n';
    valid = false;
  }
  if (emailid && emailid.value.trim() === '') {
    errorMsg += 'Email ID is required.\n';
    valid = false;
  }
  if (password && password.value.trim() === '') {
    errorMsg += 'Password is required.\n';
    valid = false;
  }
  if (dob && dob.value.trim() === '') {
    errorMsg += 'Date of Birth is required.\n';
    valid = false;
  }
  
  let genderSelected = false;
  for (let i = 0; i < genderOptions.length; i++) {
    if (genderOptions[i].checked) {
      genderSelected = true;
      break;
    }
  }
  if (!genderSelected) {
    errorMsg += 'Please select a Gender.\n';
    valid = false;
  }
  
  if (!valid) {
    alert(errorMsg);
  }
  return valid;
}

document.addEventListener('DOMContentLoaded', function() {
  // Contact form validation
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.onsubmit = function(e) {
      if (!validateContactForm()) {
        e.preventDefault();
      }
    };
  }
  

  var registrationForm = document.getElementById('registrationForm');
  if (registrationForm) {
    registrationForm.onsubmit = function(e) {
      if (!validateRegistrationForm()) {
        e.preventDefault();
      }
    };
  }
});