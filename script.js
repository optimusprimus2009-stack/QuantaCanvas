if(localStorage.getItem('theme') === null) {
    localStorage.setItem('theme', 'light');
    window.location.href = "light.html";
}
else if(localStorage.getItem('theme') === 'light') {
    window.location.href = "light.html";
}
else {
    window.location.href = "dark.html";
}