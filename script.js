//your JS code here. If required.
// script.js

function removeColor() {
  // Get the reference to the dropdown list
  var dropdown = document.getElementById("colorSelect");

  // Get the selected index
  var selectedIndex = dropdown.selectedIndex;

  // Remove the selected option from the dropdown
  if (selectedIndex !== -1) {
    dropdown.remove(selectedIndex);
  }
}

