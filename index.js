let currentImageSrc = ''; // Almacena la ruta de la imagen actual

function setupOptionHandler(optionId, imagePath) {
    const option = document.getElementById(optionId);

    option.addEventListener('mouseenter', function() {
        if (currentImageSrc !== imagePath) {
            animateImageChange(imagePath);
            currentImageSrc = imagePath;
        }
    });
    
    option.addEventListener('mouseleave', function() {
        if (currentImageSrc === imagePath) {
            animateImageChange('');
            currentImageSrc = '';
        }
    });
    
}   

function animateImageChange(newImageSrc) {
    const carouselImage = document.getElementById('carouselImage');
    carouselImage.classList.add('hide');

    setTimeout(function() {
        carouselImage.src = newImageSrc;
        carouselImage.classList.remove('hide');
    }, 200);
}

setupOptionHandler('option1', 'img/Danza_Viva.webp');
setupOptionHandler('option2', 'img/Discos.webp');
setupOptionHandler('option3', 'img/Voltyc.webp');
setupOptionHandler('option4', 'img/Menu.webp');
setupOptionHandler('option5', 'img/Aguita.webp');
setupOptionHandler('option6', 'img/Royalty.webp');
setupOptionHandler('option7', 'img/Cartas.webp');
setupOptionHandler('option8', 'img/Web.webp');
setupOptionHandler('option9', 'img/MVC.webp');
setupOptionHandler('option10', 'img/TRABAJO_2.webp');



const arrow = document.querySelector('.fa-arrow-left');
const textElement = document.getElementById('backtoPrincipalPage');

arrow.addEventListener('mouseenter', function() {
    textElement.classList.add('text-visible');
    textElement.classList.remove('text-hidden');
});

arrow.addEventListener('mouseleave', function() {
    textElement.classList.remove('text-visible');
    textElement.classList.add('text-hidden');
});