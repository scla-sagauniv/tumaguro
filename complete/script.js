const address = localStorage.getItem("address");
const post = localStorage.getItem("post");

const addressElement = document.getElementById("address");
const postElement = document.getElementById("post");

addressElement.textContent = address;
postElement.textContent = post;

localStorage.clear();
