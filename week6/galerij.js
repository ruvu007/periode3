const allImages = [
    'IMG_3377.jpeg',
    'IMG_3379.jpeg',
    'IMG_3387.jpeg',
    'IMG_3408.jpeg',
    'IMG_3419.jpeg',
    'IMG_3466.jpeg',
    'IMG_3480.jpeg',
    'IMG_3481.jpeg',
    'IMG_3486.jpeg',
    'IMG_3489.jpeg',
    'IMG_3495.jpeg',
    'IMG_3500.jpeg',
    'IMG_3502.jpeg',
    'IMG_3506.jpeg',
    'IMG_3513.jpeg',
    'IMG_3517.jpeg',
    'IMG_4036.jpeg',
    'IMG_4102.jpeg',
    'DSCN4645_1.jpeg',
    'DSCN4670_1.jpeg',
    'DSCN4671_1.jpeg',
    'DSCN4674_1.jpeg',
    'DSCN4680_1.jpeg',
    'DSCN4682_1.jpeg',
    'DSCN4684_1.jpeg'
];
const id = document.getElementById('gallery');

function fillGallery(url) {
    let gallery = document.createElement('div');
    gallery.className = 'item';

    let galleryItem = document.createElement('img');

    // Afbeeldingen vanuit directory
    galleryItem.src = 'images/' + url;
    galleryItem.alt = 'With love from Lissabon';

    // Maak tekst zichtbaar
    galleryItem.title = 'With love from Lissabon';

    gallery.append(galleryItem);
    id.append(gallery);
}

function showRandomImages() {
    for(let counter = allImages.length; counter > 0; counter--) {
        let randomNumber = Math.floor(Math.random()*allImages.length);
        fillGallery(allImages[randomNumber] );
        allImages.splice(randomNumber, 1);
    }
}

showRandomImages();

