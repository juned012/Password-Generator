const result = document.getElementById("result");
const generatePassword = () => {
  const numbers = document.getElementById("numbers").checked;
  const lowercase = document.getElementById("lowercase").checked;
  const uppercase = document.getElementById("uppercase").checked;
  const symbols = document.getElementById("symbols").checked;
  const lengthOfNum = parseInt(
    document.getElementById("lengthOfNum").value,
    10
  );

  let charPass = "";
  let password = "";

  if (numbers) charPass += "0123456789";
  if (lowercase) charPass += "abcdefghijklmnopqrstuvwxyz";
  if (uppercase) charPass += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (symbols) charPass += "!@#$%^&*()_+[]{}|;:,.<>?";

  if (charPass === "") {
    alert("Please select at least one character type to generate a password.");
    return;
  }

  for (let i = 0; i < lengthOfNum; i++) {
    const elementIndex = Math.floor(Math.random() * charPass.length);
    password += charPass[elementIndex];
  }

  result.value = password;
};

const copyPass = () => {
  const password = result.value;
  if (!password) {
    alert("There is no password to copy.");
    return;
  }
  navigator.clipboard
    .writeText(password)
    .then(() => {
      alert("Password copied!");
    })
    .catch((err) => {
      console.log("Error copying password: ", err);
    });
};
