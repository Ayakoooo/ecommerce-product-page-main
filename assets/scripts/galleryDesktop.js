//  previewImage is declared in galleryMobile.js file
const thumbnails = document.querySelectorAll(".thumbnail");

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    document
      .querySelector(".thumbnail.active-thumbnail")
      .classList.remove("active-thumbnail");
    thumbnail.classList.add("active-thumbnail");

    if (thumbnail.classList.contains("active-thumbnail")) {
      let newImage = thumbnail
        .querySelector("img")
        .src.replace("-thumbnail", "");

      previewImage.src = newImage;
    }
  });
});
