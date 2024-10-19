const apiUrl = async () => {
  const response = await fetch("https://fakestoreapi.com/products");

  const data = await response.json();
  console.log(data);
};
apiUrl();

let product_html = `
   <div class="product">
          <img src="" alt="" class="product_img" />
          <h2 class="product_title"></h2>
          <h4 class="product_category"></h4>
          <p class="product_description"></p>
          <div class="product_price_container">
            <h3 class="product_price"></h3>
            <a href="" class="add_to_cart"></a>
          </div>
        </div>
`;
