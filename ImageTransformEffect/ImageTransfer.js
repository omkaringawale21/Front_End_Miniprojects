let icon = document.getElementById("icon");

icon.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        document.body.classList.add("fa-solid fa-sun");
    }else{
        document.body.classList.add("fa-solid fa-moon");
    }
}