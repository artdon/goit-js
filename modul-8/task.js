import galleryitems from "./gallery-items.js";
let imgOrigin = document.querySelector(".lightbox__image");
const lightbox = document.querySelector(".lightbox");
const onClickLi = function(e) {
  e.preventDefault();
  lightbox.classList.add("is-open");
  imgOrigin.src = e.target.dataset.source;
};

const ul = document.querySelector(".gallery");
const liAdd = function(arr) {
  const string = arr.reduce((acc, element) => {
    return (acc += `<li class="gallery__item"><a href="${element.original}" class="gallery__link"><img class="gallery__image" src="${element.preview}" data-source="${element.original}" alt="${element.description}"></a></li>`);
  }, "");
  ul.insertAdjacentHTML("afterbegin", string);
};
ul.addEventListener("click", onClickLi);
liAdd(galleryitems);

const btn = document.querySelector("button");

const closeImage = function(e) {
  e.preventDefault();
  if (e.target !== imgOrigin){ lightbox.classList.remove("is-open")
  };
};

btn.addEventListener("click", closeImage);

const overLay = document.querySelector(".lightbox__content");

overLay.addEventListener("click", closeImage);

document.addEventListener("keydown", onKeyPress);
function onKeyPress(event) {
  switch (event.code) {
    case "Escape":
      lightbox.classList.remove("is-open");
      break;
    case "ArrowLeft":
      function left() {
        let imagesleft = document.querySelector(".lightbox__image");
        let src = "";
        galleryitems.find((elem, i, arr) => {
          src = i > 0 ? arr[i - 1].original : arr[arr.length - 1].original;
          return elem.original == imagesleft.src;
        });
        return (imagesleft.src = src);
      }
      left();
      break;
    case "ArrowRight":
      function right() {
        let imgOriginRight = document.querySelector(".lightbox__image");
        let src = "";
        galleryitems.find((elem, i, arr) => {
          src = i < arr.length - 1 ? arr[i + 1].original : arr[0].original;
          return elem.original == imgOriginRight.src;
        });
        return (imgOriginRight.src = src);
      }
      right();
      break;
  }
  event.preventDefault();
}
