const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("https://kea-alt-del.dk/t7/api/products/" + id)
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector("h1").textContent = product.productdisplayname;
  document.querySelector("h2").textContent = product.brandname;
  document.querySelector(".price").textContent = product.price;
  document.querySelector(".Subcategory").textContent = product.subcategory;
  document.querySelector(".Articletype").textContent = product.articletype;
  document.querySelector(".Usagetype").textContent = product.usagetype;

  document.querySelector(
    ".produkt_billede"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

  const productid = 123456;
  const imagePath = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
}
