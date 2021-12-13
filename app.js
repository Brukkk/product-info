const prevImages = document.querySelectorAll(".image-prev");
const mainImage = document.querySelector(".main-image");

function isActive(){
    return element.classList.contains("active-prev-image");
}

prevImages.forEach(image =>{
    image.addEventListener('click',function(){
<<<<<<< HEAD
        // Remove every "Clicked" preview Image class
=======
        
        // Remove every class before starts ... couldn't implement .some() with array of prevImages
>>>>>>> a9a2bba9e61b2213897b441e76dbd031e6ae15eb
        for (const img of prevImages){
            img.classList.remove("active-prev-image");
        }
        
        let regex = /(image-product-\d)/;
        let newSrc = regex.exec(image.src)[0]; 
        let newStr = `/images/${newSrc}.jpg`
        image.classList.add("active-prev-image");
        mainImage.src = newStr;      
        
    })
})

