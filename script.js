document.addEventListener("DOMContentLoaded", () => {
  const pass1 = document.getElementById("pass");
  const pass2 = document.getElementById("conf-pass");
  const passwordMatch = document.getElementById("password-match");

  pass2.addEventListener("input", () => {
    if (pass1.value !== pass2.value) {
      passwordMatch.textContent = "* Passwords do not match";
    } else {
        passwordMatch.textContent = "";
    }
    if (pass2.value === "") {
        passwordMatch.textContent = "";
    }
  });

  pass1.addEventListener("input", () => {
    if (pass1.value === "") {
        passwordMatch.textContent = "";
    }
  })
});

function checkPass() {
  const pass1 = document.getElementById("pass");
  const pass2 = document.getElementById("conf-pass");
  
  if (pass1.value === pass2.value) {
    return true;
  } else {
    return false;
  }
};