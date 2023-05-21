import products from "../static/db.js";

const url = new URL(location.href);
const params = new URLSearchParams(url.search);
const id = params.get("id");
const productIndex = products.findIndex((e) => e.id === id);
const product = products[productIndex];

const titleElent = document.getElementsByClassName("detail-title")[0];
titleElent.textContent = `${product.title}`;

const detailimg = document.getElementsByClassName("detail-img")[0];
detailimg.src = `../static/${product.img}`;

const p = document.getElementsByClassName("star")[0];
const span = document.getElementsByClassName("star5_rating")[0];
const t = document.createTextNode(`(${product.reviewNum}件)`);
p.textContent = "";
span.setAttribute("data-rate", `${product.review}`);
p.appendChild(span);
p.appendChild(t);

const price = document.getElementsByClassName("detail-price")[0];
price.textContent = `¥${product.price}`;

const company = document.getElementsByClassName("company")[0];
company.textContent = `${product.from}`;

const addCartButton = document.getElementById("add-cart-button");

function addCart() {
  console.log("click");
  const cartItemIds = localStorage.getItem("cartItemIds");
  console.log(cartItemIds);
  if (cartItemIds === null || cartItemIds === "") {
    localStorage.setItem(`cartItemIds`, `${id}`);
  } else {
    localStorage.setItem(`cartItemIds`, `${cartItemIds},${id}`);
  }
}

addCartButton.addEventListener("click", addCart);
