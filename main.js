var accordion_btn = document.getElementsByClassName("accordion_btn");

for (var i = 0; i < accordion_btn.length; i++) {
    accordion_btn[i].addEventListener("click", function () {
        this.classList.toggle("color_active");


        var accordion_content = this.nextElementSibling;

        if(accordion_content.style.display === "block") {
            accordion_content.style.display = "none";

        }else{
            accordion_content.style.display = "block";
        }
    });
}
