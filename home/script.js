import products from "../static/db.js";

const url = new URL(location.href);
const params = new URLSearchParams(url.search);
const query = params.get("query");

const itemsContainer = document.getElementById("item-list-container");

for (const product of select()) {
  const rink = document.createElement("a");
  rink.href = `../product_details/?id=${product.id}`;

  const gridItem = document.createElement("div");
  gridItem.classList.add("grid-item");

  const img = document.createElement("img");
  img.classList.add("product-image");
  img.src = `../static/${product.img}`;

  const h3 = document.createElement("h3");
  h3.textContent = product.title;

  const price = document.createElement("p");
  price.classList.add("product-price");
  price.textContent = `¥${product.price}`;

  const review = document.createElement("p");
  const star = document.createElement("span");
  star.classList.add("star5_rating");
  star.setAttribute("data-rate", product.review);
  const reviewNum = document.createTextNode(`(${product.reviewNum}件)`);
  review.appendChild(star);
  review.appendChild(reviewNum);

  gridItem.appendChild(img);
  gridItem.appendChild(h3);
  gridItem.appendChild(price);
  gridItem.appendChild(review);
  rink.appendChild(gridItem);

  itemsContainer.appendChild(rink);
}

var string = "isogram";
var pattern = "og";
if (string.indexOf(pattern) > -1) {
  // 部分一致のときの処理
}

function select() {
  return query ? products.filter((e) => e.title.indexOf(query) > -1) : products;
}

const searchElement = document.getElementById("search");
searchElement.value = query;
function search() {
  window.location.href = `../home/?query=${searchElement.value}`;
}

const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", search);
