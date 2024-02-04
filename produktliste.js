fetch("https://kea-alt-del.dk/t7/api/products")
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
  //ændre indhold
  copy.querySelector("h3").textContent = product.productdisplayname;
  if (product.soldout) {
    copy.querySelector("article").classList.add("soldout");
  }
  //   myClone.querySelector("img").src = product.img;

  copy.querySelector(".price").textContent = product.price;
  copy.querySelector(".mærke").textContent = product.brandname;
  //   copy.querySelector(".billeder").src = product.smallimage;

  //appende
  document.querySelector("main").appendChild(copy);
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
