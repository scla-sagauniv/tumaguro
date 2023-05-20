import products from "../static/db.js";

const itemsContainer = document.getElementById("item-list-container");

for (const product of products) {
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
