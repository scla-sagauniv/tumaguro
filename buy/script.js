import products from "../static/db.js";

const cartItemIds = localStorage.getItem("cartItemIds");
const cartItemIdList = cartItemIds.split(",");

const priceSumElement = document.getElementsByClassName("price")[0];

let priceSum = 0;
for (const id of cartItemIdList) {
  const productIndex = products.findIndex((e) => e.id === id);
  const product = products[productIndex];

  priceSum += product.price;
  priceSumElement.textContent = `¥${priceSum}`;
}

const address = document.getElementById("address");
const post = document.getElementById("post");
function submitA() {
  localStorage.setItem("address", address.value);
  localStorage.setItem("post", post.value);
  window.location.href = "../complete";
}

const submitButton = document.getElementsByClassName("buy")[0];
submitButton.addEventListener("click", submitA);

const danger = document.getElementById("danger");
danger.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete")) {
    event.target.parentNode.remove();
    window.location.href = "../danger";
  }
});
