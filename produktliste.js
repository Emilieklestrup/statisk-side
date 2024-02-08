const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

fetch("https://kea-alt-del.dk/t7/api/products?category=" + category)
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  //We have the data
  products.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);
  //fange tamplate
  const template = document.querySelector("#smallProductTemplate").content;

  //lav en kopi
  const copy = template.cloneNode(true);

  const productid = 123456;
  const imagePath = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

  //ændre indhold

  //   myClone.querySelector("img").src = product.img;
  copy.querySelector("h3").textContent = product.productdisplayname;
  copy.querySelector(".price").textContent = product.price;
  copy.querySelector(".mærke").textContent = product.brandname;
  copy.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

  // document.querySelector(
  //   ".billeder"
  // ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

  if (product.soldout) {
    //copy.querySelector("article").classList.add("soldOut");
  } else {
    copy.querySelector(".udsolgt").remove();
  }

  if (product.discount) {
    //copy.querySelector("article").classList.add("soldOut");
  } else {
    copy.querySelector(".tilbud").remove();
  }

  copy
    .querySelector(".product-link")
    .setAttribute("href", `produkt.html?id=${product.id}`);

  //appende
  document.querySelector(".grid").appendChild(copy);
}

//  <template id="smallProductTemplate">
/* <div class="product-list">
<a href="produkt.html" class="product-link">
  <article>
    <img
      src="https://kea-alt-del.dk/t7/images/webp/640/1163.webp"
      alt="lille billede af produkt"
    />
    <h3>Sahara Team India Fanwear Round Neck Jersey</h3>
    <p>NIKE - Sports</p>
    <p class="price">895 DKK</p>
    <p>Read more</p>
    <p class="udsolgt">Udsolgt</p>
  </article>
</a>
</div>
</template> */

// id	1163
// gender	"Men"
// category	"Apparel"
// subcategory	"Topwear"
// articletype	"Tshirts"
// season	"Summer"
// productionyear	2011
// usagetype	"Sports"
// productdisplayname	"Sahara Team India Fanwear Round Neck Jersey"
// price	895
// discount	null
// brandname	"Nike"
// soldout	0
