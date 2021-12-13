const prevImages = document.querySelectorAll(".image-prev");
const mainImage = document.querySelector(".main-image");


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

