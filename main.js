var acc = document.getElementsByClassName("acc");

for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {

    this.classList.toggle("active");

    var acc_content = this.nextElementSibling;
    if (acc_content.style.maxHeight){
      acc_content.style.maxHeight = null;
    } else {
      acc_content.style.maxHeight = acc_content.scrollHeight + "px";
    }
  });
}