var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

function deneme2(Id, source, altText) {
  var img = document.getElementById(Id);
  modal.style.display = "block";
  modalImg.src = source;
  captionText.innerText = altText;
}

var span = document.querySelector(".close");
span.onclick = function () {
  modal.style.display = "none";
};


filterSelection("all");
function filterSelection(category) {
  var items = document.getElementsByClassName("img");
  
  for (var i = 0; i < items.length; i++) {
    items[i].classList.remove("show");
    if (category === "all" || items[i].classList.contains(category)) {
      items[i].classList.add("show");
    }
  }
}

var btnContainer = document.getElementById("myBtnContainer");
var buttons = btnContainer.getElementsByClassName("btn");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    var current = document.querySelector(".btn.active");
    if (current) {
      current.classList.remove("active");
    }
    this.classList.add("active");
  });
}
