let downloadButton = document.querySelector(".download");
let pop = document.querySelector(".pop");

let clickCount = 0;

function addClick() {
  clickCount++;

  if (clickCount >= 1) {
    pop.classList.add("show");
  }
}

downloadButton.addEventListener("click", addClick);
