const galleryLightbox = document.querySelector(".gallery-lightbox");
const closeLightbox = document.querySelector(".close-lightbox");
const lightboxPreviewImage = document.querySelector(
  ".lightbox-content-preview-image"
);
const lightboxNext = document.querySelector(".next");
const lightboxPrev = document.querySelector(".prev");
const lightboxThumbnails = document.querySelectorAll(".lightbox-thumbnail");

function setActiveThumbnail(index) {
  const activeThumbnail = Array.from(lightboxThumbnails).find((thumbnail) =>
    thumbnail
      .querySelector("img")
      .src.replace("-thumbnail", "")
      .includes(`product-${index}`)
  );
  document
    .querySelector(".lightbox-thumbnail.active-lightbox-thumbnail")
    ?.classList.remove("active-lightbox-thumbnail");
  activeThumbnail?.classList.add("active-lightbox-thumbnail");
}

function updateLightboxButtons() {
  lightboxNext.disabled = index >= lightboxThumbnails.length;
  lightboxPrev.disabled = index <= 1;
}

function setPreviewImage(src) {
  lightboxPreviewImage.src = src;
  const previewImageIndex = Number(src.match(/product-(\d+)/)?.[1]);
  index = previewImageIndex;
  updateLightboxButtons();
  setActiveThumbnail(index);
}

closeLightbox.addEventListener("click", () => {
  galleryLightbox.classList.remove("open");
});

previewImage.addEventListener("click", () => {
  galleryLightbox.classList.add("open");
  setPreviewImage(previewImage.src);
});

lightboxNext.addEventListener("click", () => {
  if (index < lightboxThumbnails.length) {
    index++;
    setPreviewImage(`./assets/images/image-product-${index}.jpg`);
  }
});

lightboxPrev.addEventListener("click", () => {
  if (index > 1) {
    index--;
    setPreviewImage(`./assets/images/image-product-${index}.jpg`);
  }
});

lightboxThumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    setPreviewImage(
      thumbnail.querySelector("img").src.replace("-thumbnail", "")
    );
  });
});

updateLightboxButtons();
