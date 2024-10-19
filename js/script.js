const section1 = document.querySelector("section");

const apiUrl = async () => {
  const response = await fetch("https://fakestoreapi.com/products");

  const data = await response.json();
  console.log(data);
};
apiUrl();
