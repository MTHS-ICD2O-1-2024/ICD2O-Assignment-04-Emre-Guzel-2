"use strict"
// Setting the function 
function calculateFood() {
  // Setting the variables
  const spiceLevel = document.getElementById("spice-level").value
  const kebabType = document.getElementById("kebab-type").value
  const sizeLarge = document.getElementById("size-large").checked
  const sizeMedium = document.getElementById("size-medium").checked
  const sizeSmall = document.getElementById("size-small").checked

  let spiceLevelExtra = 0
  let kebabPrice = 0
  let sizePrice = 0
  let resultMessage = ""

  // setting the spice level prices
  if (spiceLevel == 5) {
    spiceLevelExtra = 3.00
  } else if (spiceLevel == 4) {
    spiceLevelExtra = 2.00
  } else if (spiceLevel == 3) {
    spiceLevelExtra = 1.00
  } else if (spiceLevel == 2 || spiceLevel == 1) {
    spiceLevelExtra = 0.50
  }

  // Setting the kebab type 
  if (kebabType == "adana-kebab") {
    kebabPrice = 30.99
  } else if (kebabType == "urfa kebab") {
    kebabPrice = 25.99
  } else if (kebabType == "iskender-kebab") {
    kebabPrice = 35.99
  } else if (kebabType == "doner-kebab") {
    kebabPrice = 20.99
  } else if (kebabType == "lahmajun") {
    kebabPrice = 10.99
  }

  // setting the sizes
  if (sizeLarge == true) {
    sizePrice = 7.99
  } else if (sizeMedium == true) {
    sizePrice = 5.99
  } else if (sizeSmall == true) {
    sizePrice = 2.99
  }

  // calculate subtotal, tax and total
  const subtotal = kebabPrice + sizePrice + spiceLevelExtra;
  const taxRate = 0.13
  const tax = subtotal * taxRate
  const total = subtotal + tax

  // showing the result
  resultMessage += "Kebab Price: $" + kebabPrice.toFixed(2) + "<br>";
  resultMessage += "Size Price: $" + sizePrice.toFixed(2) + "<br>";
  resultMessage += "Spice Extra: $" + spiceLevelExtra.toFixed(2) + "<br>";
  resultMessage += "Tax (13%): $" + tax.toFixed(2) + "<br>";
  resultMessage += "<strong>Total: $" + total.toFixed(2) + "</strong>";

  document.getElementById("result").innerHTML = resultMessage;
}
