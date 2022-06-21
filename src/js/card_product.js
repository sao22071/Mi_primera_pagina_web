const products = [
  {
    name: "Bike 1",
    image: "./src/assets/png/img5.png",
    price: 54000,
    quantity: 3,
  },
  {
    name: "Bike 2",
    image: "./src/assets/png/img6.png",
    price: 54000,
    quantity: 3,
  },
  {
    name: "Bike 3",
    image: "./src/assets/png/img7.png",
    price: 54000,
    quantity: 3,
  },
  {
    name: "Bike 4",
    image: "./src/assets/png/img8.png",
    price: 54000,
    quantity: 3,
  },
  {
    name: "Bike 5",
    image: "./src/assets/png/img9.png",
    price: 54000,
    quantity: 3,
  },
];

var listProducts = products.map(function (product,i) {
  return (`
    <article class="card">
      <img
        src=${product.image}
        alt="Product${i+1}"
        width="200px"
      >
      <div class="container">
        <h4><b>${product.name}</b></h4>
        <p>Price: <b>${product.price}</b> </p>
        <p>Quantity: <b>${product.quantity}</b></p>
      </div>
      <div class="links-e">
        <a href="#">See more </a>
        <button>Add to cart</button>
      </div>
      </article>
    `
  );
});

document.getElementById("listProducts").innerHTML = listProducts;
