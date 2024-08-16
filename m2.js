const about=document.querySelector(".about");
about.addEventListener("click",()=>{
    window.open("http://127.0.0.1:3000/about-info.html");
})
document.getElementById('dance').addEventListener('change', function() {
    var selectedPage = this.value;
    if (selectedPage) {
        window.location.href = selectedPage;
    }
});
const box=document.querySelector(".box");
box.addEventListener("click",()=>{
    window.open("http://127.0.0.1:3000/main.html");
})