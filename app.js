const prevImages = document.querySelectorAll(".image-prev");
const mainImage = document.querySelector(".main-image");

function isActive(){
    return element.classList.contains("active-prev-image");
}

prevImages.forEach(image =>{
    image.addEventListener('click',function(){
        
        // Remove every class before starts ... couldn't implement .some() with array of prevImages
        for (const img of prevImages){
            if (img.classList.contains("active-prev-image")){
                img.classList.remove("active-prev-image");
            }
        }
        
        let regex = /(image-product-\d)/;
        let newSrc = regex.exec(image.src)[0]; 
        let newStr = `/images/${newSrc}.jpg`
        image.classList.add("active-prev-image");
        mainImage.src = newStr;      
        
    })
})