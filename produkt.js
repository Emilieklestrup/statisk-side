fetch("https://kea-alt-del.dk/t7/api/products/1525")
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
    ".produkt_billede img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
}
