const products = document.querySelector(".products");

const apiUrl = async () => {
  const response = await fetch("https://fakestoreapi.com/products");

  const data = await response.json();

  for (let i = 0; i < data.length; i++) {
    let description = data[i].description;
    let title = data[i].title;
    products.innerHTML += `
   <div class="product">
          <img src="${data[i].image}" alt="PRODUCT IMAGE" class="product_img" />
          <h2 class="product_title">${
            title.length > 25 ? title.substring(0, 25).concat(" ... ") : title
          }</h2>
          <h4 class="product_category">${data[i].category}</h4>
          <p class="product_description">${
            description.length > 80
              ? description.substring(0, 80).concat(" .... more")
              : description
          }</p>
          <div class="product_price_container">
            <h3 class="product_price"> $${data[i].price}</h3>
            <a href="#!" data-productId="${
              data[i].id
            }"  class="add-to-cart"><ion-icon name="cart-outline"></ion-icon></a>
          </div>
          
   </div>
`;
  }
};
apiUrl();
