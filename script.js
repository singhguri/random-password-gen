// calculate and show slider length value
const handlePasswordLenOnchange = (e) => {
  const sliderVal = document.querySelector("#passwordLen").value;
  document.querySelector("#passwordLenVal").innerHTML = sliderVal;
};

// on document ready, show current slider length value
document.addEventListener("DOMContentLoaded", function (event) {
  handlePasswordLenOnchange();
  genPassword();
});

// method to show success message
const showSuccess = (text = "") => {
  let div = document.querySelector(".success");

  if (text) div.innerHTML = text;

  div.classList.remove("hide");
  div.classList.add("show");
};

// method to hide success message
const hideSuccess = () => {
  let div = document.querySelector(".success");

  div.classList.remove("show");
  div.classList.add("hide");
};

// copy to clipboard
const copyToClipboard = () => {
  /* Get the text field */
  let copyText = document.querySelector("#passwordText");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);

  let copyClass = document.querySelector("#copyIcon").className;
  const checkClass = "fa-solid fa-check";

  document.querySelector("#copyIcon").className = checkClass;

  // show success div
  showSuccess();

  setTimeout(() => {
    // hide success div
    hideSuccess();
    document.querySelector("#copyIcon").className = copyClass;
  }, 1500);
};

// check if the given checkbox id is checked
const isChecked = (id) => {
  return document.querySelector("#" + id).checked;
};

// main logic to gen password
const genPassword = () => {
  const lowerChar = "abcdefghijklmnopqrstuvwxyz";
  const upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const symbols = "!@#$%^&*()";
  const numbers = "0123456789";

  let passwordLength = document.querySelector("#passwordLen").value;

  let chars = "";
  if (isChecked("symbols")) chars += symbols;
  if (isChecked("numbers")) chars += numbers;
  if (isChecked("lowerChar")) chars += lowerChar;
  if (isChecked("upperChar")) chars += upperChar;

  if (chars) {
    document.querySelector("#passwordLen").disabled = false;

    let password = "";
    for (var index = 0; index <= passwordLength; index++) {
      let randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber + 1);
    }

    document.querySelector("#passwordText").value = password;
  } else {
    document.querySelector("#passwordText").value = "";
    document.querySelector("#passwordLen").disabled = true;
    alert("Please check some securities");
  }
};
