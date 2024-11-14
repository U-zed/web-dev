// array method

let numbers = [1, 2, 3, 4, 5];

// map

console.log(numbers);

// let newArray = numbers.map((num) => {
//     return num * num
// })

// let newArray = numbers.map(num => num * num)

let newArray = numbers.map((num) => num * num);

console.log(newArray);

// APi (application program interface) - endpoint -url

// function to fetch products

// Function to fetch products
const fetchDisplayProduct = async () => {
    const fakestore = "https://fakestoreapi.com/products";
    try {
      // Runs when fetch is successful
      const response = await fetch(fakestore);
      const products = await response.json(); // Await here to get the resolved array
  
      displayProducts(products); // Pass the resolved array to displayProducts
    } catch (error) {
      // Runs when fetch is unsuccessful
      console.log("Error message", error);
      alert("error displaying product, check console for more information");
    }
  };
  
  // Function to display on our document
  const displayProducts = (products) => {
    const productList = document.querySelector(".product-list");
  
    let productHTML = "";
  
    products.forEach(product => {
      console.log(product);
  
      productHTML += `
             <div class="w-full shadow p-3 m-2 ">
              <h1 class="text-4xl font-bold uppercase text-center">${product.title }</h1>
              <img src="${product.image}" alt="${product.title.slice(0, 3 )}" class="mx-auto rounded-md w-[15rem] h-[15rem]">
              <p class="text-center text-md text-gray-400">${ product.description }</p>
              <p class="text-sm">${product.category}</p>
              <p class="text-red-500 font-bold text-md">$${product.price}</p>
              <span class="text-lg font-semibold">Rating: <span>${product.rating.rate} (${product.rating.count} reviews)</span></span>
              </div> 
          `;
    });
  
    productList.innerHTML = productHTML;
  };
  
  fetchDisplayProduct();
  