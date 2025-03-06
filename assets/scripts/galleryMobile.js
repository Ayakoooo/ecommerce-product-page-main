const nextBtn = document.querySelector(".next-image");
const prevBtn = document.querySelector(".prev-image");
const previewImage = document.querySelector(".preview-image");

let index = 1;

function updateButtons() {
  nextBtn.disabled = index >= 4;
  prevBtn.disabled = index <= 1;

  if (index === 1) {
    document
      .querySelector(".thumbnail.active-thumbnail")
      .classList.remove("active-thumbnail");
    document
      .querySelector(".thumbnail:nth-child(1)")
      .classList.add("active-thumbnail");
  }
}

function nextImage() {
  if (index >= 4) return;
  index++;
  previewImage.src = `./assets/images/image-product-${index}.jpg`;
  updateButtons();
}

function prevImage() {
  if (index <= 1) return;
  index--;
  previewImage.src = `./assets/images/image-product-${index}.jpg`;
  updateButtons();
}

updateButtons();

nextBtn.addEventListener("click", nextImage);
prevBtn.addEventListener("click", prevImage);
