

const products = [
  {id:1,name:"Wireless Headphones",price:79.99,img:"https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?auto=format&fit=crop&w=600&q=80"},
  {id:2,name:"Smart Watch",price:299.99,img:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80"},
  {id:3,name:"Backpack",price:49.99,img:"https://images.unsplash.com/photo-1581605405669-fcdf81165afa?auto=format&fit=crop&w=600&q=80"},
  {id:4,name:"Speaker",price:59.99,img:"https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=600&q=80"}
];

// LOGIN CHECK
if(!localStorage.getItem('login') &&
!location.pathname.includes('index') &&
!location.pathname.includes('signup')){
  location.href='index.html';
}

// SIGNUP
function signup(){
  const n = document.getElementById("name");
  const e = document.getElementById("email");
  const p = document.getElementById("password");

  // Check if elements exist (IMPORTANT)
  if(!n || !e || !p){
    alert("Input fields not found (check IDs)");
    return;
  }

  const nameVal = n.value.trim();
  const emailVal = e.value.trim();
  const passVal = p.value.trim();

  if(nameVal === "" || emailVal === "" || passVal === ""){
    alert("All fields are required");
    return;
  }

  if(nameVal.length < 3){
    alert("Name must be at least 3 characters");
    return;
  }

  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)){
    alert("Enter valid email");
    return;
  }

  if(passVal.length < 6){
    alert("Password must be at least 6 characters");
    return;
  }

  if(localStorage.getItem(emailVal)){
    alert("User already exists");
    return;
  }

  localStorage.setItem(emailVal, JSON.stringify({
    name: nameVal,
    email: emailVal,
    password: passVal
  }));

  alert("Account created successfully!");
  location.href = "index.html";
}

// LOGIN
function login(){
  const e = email.value.trim();
  const p = password.value.trim();

  // Email validation
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)){
    alert("Enter a valid email");
    return;
  }

  // Empty password
  if(p === ""){
    alert("Password is required");
    return;
  }

  const user = JSON.parse(localStorage.getItem(e));

  if(!user){
    alert("User not found");
    return;
  }

  if(user.password !== p){
    alert("Incorrect password");
    return;
  }

  // Success
  localStorage.setItem("login", e);
  location.href = "home.html";
}


// LOGOUT
function logout(){
  localStorage.removeItem('login');
  location.href="index.html";
}

// PRODUCTS
function loadProducts(){
  updateCart();
  let box=document.getElementById("products");
  box.innerHTML="";
  products.forEach(p=>{
    box.innerHTML+=`
    <div class="card">
      <img src="${p.img}">
      <div class="card-body">
        <h4>${p.name}</h4>
        <p>$${p.price}</p>
        <button onclick="add(${p.id})">Add to Cart</button>
      </div>
    </div>`;
  });
}

// CART
function add(id){
  let cart=JSON.parse(localStorage.getItem("cart"))||[];
  let item=cart.find(i=>i.id==id);
  if(item) item.qty++;
  else cart.push({id,qty:1});
  localStorage.setItem("cart",JSON.stringify(cart));
  updateCart();
}

// UPDATE CART COUNT
function updateCart(){
  let cart=JSON.parse(localStorage.getItem("cart"))||[];
  let count=0;
  cart.forEach(i=>count+=i.qty);
  let badge=document.getElementById("cart-count");
  if(badge) badge.innerText=count;
}

// LOAD CART
function loadCart(){
  let cart=JSON.parse(localStorage.getItem("cart"))||[];
  let total=0;
  let box=document.getElementById("cart");

  box.innerHTML="";

  if(cart.length === 0){
    box.innerHTML = "<p class='empty'>Your cart is empty</p>";
    document.getElementById("total").innerText="$0";
    return;
  }

  cart.forEach(i=>{
    let p=products.find(x=>x.id==i.id);
    total+=p.price*i.qty;

    box.innerHTML+=`
    <div class="cart-item">
      <span class="item-name">${p.name} (x${i.qty})</span>
      <div class="controls">
        <button onclick="change(${i.id},1)">+</button>
        <button onclick="change(${i.id},-1)">-</button>
        <button class="remove-btn" onclick="removeItem(${i.id})">Remove</button>
      </div>
    </div>`;
  });

  document.getElementById("total").innerText="$"+total;
}

// REMOVE
function removeItem(id){
  let cart=JSON.parse(localStorage.getItem("cart"));
  cart=cart.filter(i=>i.id!=id);
  localStorage.setItem("cart",JSON.stringify(cart));
  loadCart();
}

// CHECKOUT LOAD
function loadCheckout(){
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let total = 0;
  let box = document.getElementById("summary");

  box.innerHTML = "";

  if(cart.length === 0){
    box.innerHTML = "<p class='empty'>No items in cart</p>";
    document.getElementById("grandTotal").innerText = "$0";
    return;
  }

  cart.forEach(i=>{
    let p = products.find(x=>x.id==i.id);
    total += p.price * i.qty;

    box.innerHTML += `
    <div class="summary-item">
      <span>${p.name} x${i.qty}</span>
      <span>$${p.price}</span>
    </div>`;
  });

  document.getElementById("grandTotal").innerText = "$" + total;
}


// PLACE ORDER
function placeOrder(){
  const name = document.getElementById("name").value.trim();
  const address = document.getElementById("address").value.trim();
  const phone = document.getElementById("phone").value.trim();

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Check empty cart
  if(cart.length === 0){
    alert("Your cart is empty");
    return;
  }

  // Name validation
  if(name === ""){
    alert("Full Name is required");
    return;
  }

  if(name.length < 3){
    alert("Name must be at least 3 characters");
    return;
  }

  // Address validation
  if(address === ""){
    alert("Address is required");
    return;
  }

  if(address.length < 10){
    alert("Please enter a complete address");
    return;
  }

  // Phone validation (Pakistan format basic)
  if(!/^[0-9]{10,12}$/.test(phone)){
    alert("Enter a valid phone number (10–12 digits)");
    return;
  }

  // SUCCESS
  alert("🎉 Order Placed Successfully!");

  // Clear cart
  localStorage.removeItem("cart");

  // Redirect
  location.href = "home.html";
}
