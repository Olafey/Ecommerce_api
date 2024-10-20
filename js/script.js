const products = document.querySelector(".products");

const apiUrl = async () => {
  const response = await fetch("https://fakestoreapi.com/products");

  const data = await response.json();

  for (let i = 0; i < data.length; i++) {
    products.innerHTML += `
   <div class="product">
          <img src="" alt="" class="product_img" />
          <h2 class="product_title">${data[i].title}</h2>
          <h4 class="product_category"></h4>
          <p class="product_description"></p>
          <div class="product_price_container">
            <h3 class="product_price"></h3>
            <a href="" class="add_to_cart"></a>
          </div>
          <div class="rate">
          <h3 class="ratings"></h3>
          <h5 class="count"></h5>
          </div>

        </div>
`;
  }
};
apiUrl();
