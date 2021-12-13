

const prevImages = document.querySelectorAll(".image-prev"); // Thumbnail images
const mainImage = document.querySelector(".main-image"); // Main product image
const plus = document.querySelector("#plusSign");
const minus = document.querySelector("#minusSign");
const quantity = document.querySelector("#quantityOrder");

// Images interaction
prevImages.forEach(image =>{
    image.addEventListener('click',function(){
        // Remove every "Clicked" preview Image class
        for (const img of prevImages){
            img.classList.remove("active-prev-image");
        }
        //Define our regex to look for in our images gallery
        let regex = /(image-product-\d)/;
        // Executes the search on the image it was clicked
        let newSrc = regex.exec(image.src)[0]; 
        //Set up the new resource from the folder (Every image has a pair) Ex: image-product-22.jpg -> image-product-22-thumbnail.jpg
        let newStr = `/images/${newSrc}.jpg`
        // Add class to thumbnail image
        image.classList.add("active-prev-image");
        // Set up our new thumbnail to be the active image
        mainImage.src = newStr;      
        
    })
})

// Order amount
var amount = 1;


plus.addEventListener("click", ()=>{
    amount += 1;
    quantity.innerText = amount;

    if(amount !== 1){
        minus.classList.remove("disabled")
    }
})

minus.addEventListener("click", ()=>{
    if (amount === 1){
        return;
    } 
      
    amount -= 1;
    quantity.innerText = amount;
    if (amount === 1){
        minus.classList.add("disabled");
    }
})

// CART
const cartContent = document.querySelector(".content-box");
// ADD TO CART BUTTON
const addBtn = document.querySelector("#add")





addBtn.addEventListener("click",()=>{
    // variables created in the event due to not a
    let title = document.querySelector("h2").innerText;
    let price = document.querySelector(".price").innerText;
    let total = parseFloat(price.slice(1)*amount).toFixed(2);             


    //CREATE NEW PRODUCT VARS
    let newProduct = document.createElement("div");

    let cartImg = document.createElement("img");
    cartImg.src = prevImages[0].src;


    let infoProduct = document.createElement("p");
    infoProduct.innerHTML = `${title}<br>${price} x ${amount} <b>$${total}</b>`;


    // BASURITA
    let deleteIcon = document.createElement("img");
    deleteIcon.src = "images/icon-delete.svg";
    
    // DELETE EMPTY
    cartContent.textContent= "";
    newProduct.appendChild(cartImg);
    newProduct.appendChild(infoProduct);
    newProduct.appendChild(deleteIcon);
    // ADD CLASSES TO NEW PRODUCT
    cartContent.classList.remove("content-box");
    cartContent.classList.add("content-box-filled");
    newProduct.classList.add("cart-product");
    // ADD TO THE CART
    cartContent.appendChild(newProduct);
})
