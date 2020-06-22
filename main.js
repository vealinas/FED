// carousel

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
     showSlides((slideIndex += n));
}

function currentSlide(n) {
     showSlides((slideIndex = n));
}

function showSlides(n) {
     var i;
     var slides = document.getElementsByClassName("mySlides");
     var dots = document.getElementsByClassName("dot");
     if (n > slides.length) {
          slideIndex = 1;
     }
     if (n < 1) {
          slideIndex = slides.length;
     }
     for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
     }
     for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
     }
     slides[slideIndex - 1].style.display = "block";
     dots[slideIndex - 1].className += " active";
}

// product list

// {
const productList = [
     {
          name: "Redmi Note 9S",
          price: "Php 10,129",
          colors: "Black, White, Blue",
          memory: "4/64GB",
          picture:
               "https://d2pa5gi5n2e1an.cloudfront.net/webp/global/images/product/mobilephones/Xiaomi_Redmi_Note_9_Pro/Xiaomi_Redmi_Note_9_Pro_L_1.jpg",
     },
     {
          name: "Mi Note 10 Lite",
          price: "Php 15,699.99",
          colors: "Black, White, Purple",
          memory: "8/128GB",
          picture:
               "https://d2pa5gi5n2e1an.cloudfront.net/webp/global/images/product/mobilephones/Xiaomi_Mi_Note_10_Lite_ph/Xiaomi_Mi_Note_10_Lite_ph_L_1.jpg",
     },
     {
          name: "Redmi K30 Pro",
          price: "Php 19,000",
          colors: "Gray, White, Blue, Purple",
          memory: "8/128GB",
          picture:
               "https://d2pa5gi5n2e1an.cloudfront.net/webp/global/images/product/mobilephones/Xiaomi_Redmi_K30_pro_x/Xiaomi_Redmi_K30_pro_x_L_4.jpg",
     },
     {
          name: "Redmi 9",
          price: "Php 6,990",
          colors: "Gray, Green, Purple",
          memory: "3/32GB",
          picture:
               "https://d2pa5gi5n2e1an.cloudfront.net/webp/global/images/product/mobilephones/Xiaomi_Redmi_9_th/Xiaomi_Redmi_9_th_L_1.jpg",
     },
     {
          name: "Mi 10 Pro",
          price: "Php 26,672.49",
          colors: "Gray, White",
          memory: "8/256GB",
          picture:
               "https://d2pa5gi5n2e1an.cloudfront.net/webp/global/images/product/mobilephones/Xiaomi_Mi_10_Pro/Xiaomi_Mi_10_Pro_L_2.jpg",
     },
     {
          name: "Redmi 7A",
          price: "Php 5,200",
          colors: "Black, Yellow, Blue",
          memory: "3/32GB",
          picture:
               "https://d2pa5gi5n2e1an.cloudfront.net/webp/global/images/product/mobilephones/Xiaomi_Redmi_7a/Xiaomi_Redmi_7a_L_1.jpg",
     },
     {
          name: "POCO F2 Pro",
          price: "Php 30,620",
          colors: "Gray, White, Blue, Purple",
          memory: "6/128GB",
          picture:
               "https://d2pa5gi5n2e1an.cloudfront.net/webp/global/images/product/mobilephones/Xiaomi_POCO_F2_Pro/Xiaomi_POCO_F2_Pro_L_1.jpg",
     },
     {
          name: "Redmi Note 8",
          price: "Php 8,490",
          colors: "Black, White, Blue",
          memory: "6/64GB",
          picture:
               "https://d2pa5gi5n2e1an.cloudfront.net/webp/global/images/product/mobilephones/Xiaomi_Redmi_Note_8/Xiaomi_Redmi_Note_8_L_2.jpg",
     },
     {
          name: "Redmi 8A",
          price: "Php 5,699",
          colors: "Black, Red, Blue",
          memory: "4/64GB",
          picture:
               "https://d2pa5gi5n2e1an.cloudfront.net/webp/global/images/product/mobilephones/Xiaomi_Redmi_8A/Xiaomi_Redmi_8A_L_2.jpg",
     },
     {
          name: "Mi A3",
          price: "Php 7,990",
          colors: "Gray, White, Blue",
          memory: "4/64GB",
          picture:
               "https://d2pa5gi5n2e1an.cloudfront.net/webp/global/images/product/mobilephones/Xiaomi_Mi_A3/Xiaomi_Mi_A3_L_1.jpg",
     },
     {
          name: "Redmi S2",
          price: "Php 6,990",
          colors: "Gray, Pink, Gold",
          memory: "4/64GB",
          picture:
               "https://d2pa5gi5n2e1an.cloudfront.net/webp/global/images/product/mobilephones/Xiaomi_Redmi_S2_/Xiaomi_Redmi_S2__L_4.jpg",
     },
];
// }

let productListContainer = document.getElementById("productList");
let cart = document.getElementById("cart");
let modal = document.getElementById("myModal");
let span = document.getElementsByClassName("close")[0];
let orderList = document.getElementById("orders");
let orderCount = document.getElementById("orderCount");
let output = "";
let count = 0;

function displayProducts(obj) {
     let out = "";
     for (let i = 0; i < obj.length; i++) {
          out += `
               <article class="item">
                    <img src="${obj[i].picture}" class="thumbnail">
                    <h2 class="center">${obj[i].name}</h2>
                    <h3 class="center">${obj[i].price}</h3>
                    <div class="center">Memory: </div><div class="center">${obj[i].memory}</div><br>
                    <div class="center">Available colors: </div><div class="center">${obj[i].colors}</div><br>
                    <div class="center"><button class="btn" id="${i}">Order</button></div>
               </article>
               <br>
               `;
     }
     productListContainer.innerHTML = out;
}

function addOrderListener(obj) {
     let btn = document.getElementsByClassName("btn");
     for (let i = 0; i < obj.length; i++) {
          btn[i].addEventListener("click", btnClick);
     }
}

function btnClick(event) {
     alert("Item added to cart");
     output += `
          <article class="item">
               <img src="${
                    productList[event.target.id].picture
               }" class="thumbnail">
               <div class="center">Item: ${
                    productList[event.target.id].name
               }</div>
               <div class="center">Price: ${
                    productList[event.target.id].price
               }</div>
          </article>
     `;
     count++;
     orderList.innerHTML = output;
     orderCount.innerHTML = count;
}

// When the user clicks the button, open the modal
cart.onclick = function () {
     modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
     modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
     if (event.target == modal) {
          modal.style.display = "none";
     }
};

// modal();
displayProducts(productList);
addOrderListener(productList);
