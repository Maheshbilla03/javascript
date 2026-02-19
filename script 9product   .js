// Select product container and error message elements
const container = document.querySelector("#product-container");
const errorMessage = document.querySelector("#error-message");

// Fetch product data from public API
fetch("https://fakestoreapi.com/products")
  .then((response) => {
    // Convert response into JSON format
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    return response.json();
  })
  .then((data) => {
    // Loop through product data
    data.forEach((product) => {
      // Create product card dynamically
      const card = document.createElement("div");
      card.classList.add("product-card");

      const title = document.createElement("h4");
      title.textContent = product.title;

      const image = document.createElement("img");
      image.src = product.image;

      // Append elements to card
      card.appendChild(title);
      card.appendChild(image);

      // Append card to container
      container.appendChild(card);
    });
  })
  .catch((error) => {
    // Display error message dynamically
    errorMessage.textContent =
      "Error loading products. Please try again later.";
    console.error(error);
  });