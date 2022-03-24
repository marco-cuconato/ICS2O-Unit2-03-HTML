/**
 * This function gets users first name and age and shows it back to user.
 */
function enterClicked() {
  // input
  const street = document.getElementById("street").value
  const number = parseInt(document.getElementById("number").value)

  // output
  document.getElementById("address").innerHTML =
    "Your info is: " + street + ", " + number + "."
}