const getStartedBtn = document.getElementById("get_started");
const moduleBox = document.querySelector(".module");
const closeBtn = document.querySelector(".close_btn");




getStartedBtn.addEventListener("click", () => {
    moduleBox.classList.add("open");
});

closeBtn.addEventListener("click", () => {
    moduleBox.classList.remove("open");
});

window.addEventListener("keydown", (e) => {
    if(e.key == "Escape"){
        moduleBox.classList.remove("open");
    }
});
