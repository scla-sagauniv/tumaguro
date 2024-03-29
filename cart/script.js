import products from "../static/db.js";

const cartItemIds = localStorage.getItem("cartItemIds");
const cartItemIdList = cartItemIds.split(",");

const cartItems = document.getElementById("cart-items");
const priceSumElement = document.getElementsByClassName("right-money")[0];

function rendering() {
  let priceSum = 0;
  for (const [index, id] of cartItemIdList.entries()) {
    const productIndex = products.findIndex((e) => e.id === id);
    const product = products[productIndex];

    const cartItem = document.createElement("div");
    cartItem.classList.add("grid-item");

    const img = document.createElement("img");
    img.classList.add("product-image");
    img.src = `../static/${product.img}`;

    const h3 = document.createElement("h3");
    h3.textContent = product.title;

    const price = document.createElement("p");
    price.classList.add("product-price");
    price.textContent = `¥${product.price}`;
    priceSum += product.price;

    const button1 = document.createElement("button");
    button1.textContent = "後で買う";

    const button2 = document.createElement("button");
    button2.textContent = "削除";
    button2.classList.add("delete");
    button2.setAttribute("idx", index);

    cartItem.appendChild(img);
    cartItem.appendChild(h3);
    cartItem.appendChild(price);
    cartItem.appendChild(button1);
    cartItem.appendChild(button2);

    cartItems.appendChild(cartItem);
  }
  priceSumElement.textContent = `¥${priceSum}`;
}
rendering();

cartItems.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete")) {
    event.target.parentNode.remove();

    const idx = event.target.getAttribute("idx");
    cartItemIdList.splice(idx, 1);

    while (cartItems.firstChild) {
      cartItems.removeChild(cartItems.firstChild);
    }

    rendering();
    // console.log(idx);
    // console.log(cartItemIdList);

    // priceSum = 0;
    // for (const id of cartItemIdList) {
    //   const productIndex = products.findIndex((e) => e.id === id);
    //   const product = products[productIndex];

    //   priceSum += product.price;
    // }
    // priceSumElement.textContent = `¥${priceSum}`;

    let cartItemIdsString = "";
    cartItemIdList.forEach((e) => {
      if (cartItemIdsString === "") {
        cartItemIdsString = `${e}`;
      } else {
        cartItemIdsString += `,${e}`;
      }
    });
    localStorage.setItem("cartItemIds", cartItemIdsString);
  }
});
