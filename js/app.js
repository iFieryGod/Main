'use strict'
let carts = document.querySelectorAll('.add-to-cart-btn');

let products = [
  {
    name: 'Become a Full Stack Web Developer',
    tag: 'webdeveloper',
    price: 26000,
    inCart: 0
  },
  {
    name: 'Become a Front End Web Developer',
    tag: 'frontend-dev-banner',
    price: 9000,
    inCart: 0
  },
  {
    name: 'Become a Java Spring Boot Developer',
    tag: 'spring-boot-dev',
    price: 26000,
    inCart: 0
  }
];

for (let i=0; i < carts.length; i++) {
  carts[i].addEventListener('click', () => {
    cartNumbers(products[i]);
    totalCost(products[i])
  })
}

function onloadCartNumbers() {
  let productNumbers = localStorage.getItem('cartNumbers');
  if(productNumbers){
    document.querySelector('.mainCart span').textContent = productNumbers;
  }
}

function cartNumbers(product) {
  let productNumbers = localStorage.getItem('cartNumbers');
  productNumbers = parseInt(productNumbers);
  if(productNumbers) {
    localStorage.setItem('cartNumbers', productNumbers + 1);
    document.querySelector('.mainCart span').textContent = productNumbers + 1;
  } else {
    localStorage.setItem('cartNumbers', 1);
    document.querySelector('.mainCart span').textContent = 1;
  }
  setItems(product);
}

function setItems(product) {
 let cartItems = localStorage.getItem('productsInCart');
 cartItems = JSON.parse(cartItems);
 
  if(cartItems != null) {

    if(cartItems[product.tag] == undefined) {
      cartItems = {
        ...cartItems,
        [product.tag]: product
      }
    }
    cartItems[product.tag].inCart += 1;
  } else {
      product.inCart = 1;
      cartItems = {
      [product.tag]: product
      }
  }
    localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}

function totalCost(product) {
  // console.log('the product price is', product.price);
  let cartCost = localStorage.getItem('totalCost');
  
  console.log(typeof cartCost);

  if(cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem('totalCost', cartCost + product.price);
  } else {
    localStorage.setItem('totalCost', product.price);
  }
}

function displayCart(){
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);
  let productContainer = document.querySelector('.cart-container');
  let productContainerBelow = document.querySelector('.cartContainerBelow');
  if( cartItems && productContainer && productContainerBelow) {
    productContainer.innerHTML = '';
    Object.values(cartItems).map(item => {
      productContainer.innerHTML += `
      <td class="all-maven-text"> 
        <i class="fas fa-times"></i>
        <img id="product-details" src="images/${item.tag}.png">
        <span>${item.name}</span>
      </td>
      <td class="all-maven-text">$${item.price},00</td> 
      <td class="all-maven-text">
            <i class="fas fa-arrow-left"></i>
            <span>  ${item.inCart} </span>
            <i class="fas fa-arrow-right"></i>
      </td> 
      <td class="all-maven-text">
      $${item.inCart * item.price},00
      </td>
      `
    }),
    
    Object.values(cartItems).map(item => {
    productContainerBelow.innerHTML = '';  
    productContainerBelow.innerHTML += `
    <td id="empty-block"></td>
    <td id="empty-block"></td>
    <td id="empty-block"></td>
    <td>
      <div class="all-maven-text">
          <h3>Cart Totals</h3>
      </div>  
      </div> 
        <div class="small all-maven-text text-left">
          Subtitle
        </div>
          <span class="all-maven-text text-left"></span>
        </div>
        <hr>
          <div class="small all-maven-text text-left">
            Vat(15%)
          </div>
          <p class="all-maven-text text-left"></p>
          </div>
        <hr>
          <div class="small all-maven-text text-left">
              Total
          </div>
            <p class="all-maven-text text-left">$${item.inCart * item.price},00</p>
          </div>
        <hr>
          <button style="width: 150px;;" class="btn btn-outline-primary text-center">
            <span class="all-maven-text">Enquire</span> 
          </button>
      </td>
    `
  })}
}

onloadCartNumbers();
displayCart();