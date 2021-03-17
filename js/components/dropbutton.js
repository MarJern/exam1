// Dropdown Menu

/* Toggle between hiding/showing the dropdown when the button is clicked */

function dropFunction() {
    document.querySelector("#myDropdown").classList.toggle("show");
}

  // Close dropdown if user clicks outside it

window.onclick = function(event) {
    if (!event.target.matches(".dropButton")) {

    var dropMenu = document.getElementsByClassName("dropDownContent");
    var i;
    for (i = 0; i < dropMenu.length; i++) {
        var openDropdown = dropMenu[i];
        if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
        }
    }
    }
}