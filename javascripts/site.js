// This is where it all goes :)
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function show_on_click() {
    document.getElementById("dropdown").classList.toggle("dropdown-show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('dropdown-show')) {
        openDropdown.classList.remove('dropdown-show');
      }
    }
  }
} 
