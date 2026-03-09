if (!localStorage.getItem("theme")) {
    localStorage.setItem("theme", "light");  
}
var theme = localStorage.getItem("theme")


if (theme == "light") {

    // alert(theme)
    document.getElementById("icon").href = "icon.ico"
    document.body.style.backgroundImage = "linear-gradient(90deg, #ccd0da 1px, transparent 0px), linear-gradient(#ccd0da 1px, transparent 0px)"

} else if (theme == "dark") {

    document.getElementById("icon").href = "icon-dark.ico"
    document.body.classList.toggle("dark");
    document.body.style.backgroundImage = "linear-gradient(90deg, #363a4f 1px, transparent 0px), linear-gradient(#363a4f 1px, transparent 0px)"


    // alert(theme)
}


// alert(theme)
function change_theme() {

    theme = localStorage.getItem("theme")
    if (theme == "light") {
        // alert(theme)

        localStorage.setItem("theme", "dark")
        document.getElementById("icon").href = "icon-dark.ico"
        document.body.style.backgroundImage = "linear-gradient(90deg, #363a4f 1px, transparent 0px), linear-gradient(#363a4f 1px, transparent 0px)"
    } else if (theme == "dark") {

        document.getElementById("icon").href = "icon.ico"
        document.body.style.backgroundImage = "linear-gradient(90deg, #ccd0da 1px, transparent 0px), linear-gradient(#ccd0da 1px, transparent 0px)"
        localStorage.setItem("theme", "light")
        // alert(theme)
    }
    document.body.classList.toggle("dark");

}
var input = document.getElementById("promptbar");


input.addEventListener("keypress", function(event) {

  if (event.key === "Enter") {

    event.preventDefault();

    document.getElementById("sendbtn").click();
  }
});

function send_prompt(){

    localStorage.setItem("prompt", document.getElementById("promptbar").value)
  const result = window.pywebview.api.prompt("hello");
    alert(result);
}




