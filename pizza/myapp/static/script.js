let cartCount = 0;
const cartCountElement = document.getElementById("cartCount");
const cartList = document.getElementById("cartItemsList");
const orderItemsList = document.getElementById("orderItemsList");
const cartOverlay = document.getElementById("cartOverlay");

function removeProduct(elem) {
  const li = elem.parentNode;
  console.log("li", li);
  li.remove()
}

function addToCart(button) {
  const container = button.parentNode;
  const productName = container.getAttribute("data-product-name");
  const productPrice = container.getAttribute("data-product-price");
  const productQuantity = container.querySelector(".product-quantity").value;

  const btn = document.createElement("button");
  btn.innerHTML = "X";
  btn.setAttribute("onclick", "removeProduct(this)");
  const listItem = document.createElement("li");
  listItem.innerText = `${productName}: ${
    parseInt(productPrice) * parseInt(productQuantity)
  } сум. (${productQuantity} шт.)} `;
  listItem.appendChild(btn);
  // const Item = document.getItemById("demo")
  //     Item.remove();

  cartList.appendChild(listItem);

  cartCount++;
  cartCountElement.innerText = cartCount;

  cartCountElement.classList.add("cart-animation");

  setTimeout(() => {
    cartCountElement.classList.remove("cart-animation");
  }, 1000);
}

function placeOrder() {
  const cartItems = cartList.querySelectorAll("li");

  cartItems.forEach((item) => {
    const orderItem = document.createElement("li");
    orderItem.innerText = item.innerText;
    orderItemsList.appendChild(orderItem);
  });

  cartList.innerHTML = "";
  cartCount = 0;
  cartCountElement.innerText = cartCount;
}

function showCart() {
  cartOverlay.style.display = "block";
}

function hideCart() {
  cartOverlay.style.display = "none";
}


// function getLocation() {
//     if ("geolocation" in navigator) {
//       navigator.geolocation.getCurrentPosition((position) => {
//         const latitude = position.coords.latitude;
//         const longitude = position.coords.longitude;

//         const geolocationIcon = document.createElement("div");
//         geolocationIcon.innerHTML = `Ваше местоположение: город ${latitude}, улица ${longitude}`;

//         const geolocationInfo = document.getElementById("geolocationInfo");
//         geolocationInfo.appendChild(geolocationIcon);
//       });
//     } else {
//       console.log("Геолокация не поддерживается");
//     }
//   }
