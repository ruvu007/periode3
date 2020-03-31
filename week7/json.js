let objectArray = [];
const id = document.getElementById('gallery');

function fillGallery(obj) {
    let gallery = document.createElement('div');
    gallery.className = 'item';

    let galleryItem = document.createElement('img');

    galleryItem.src = 'images/' + obj.name;
    galleryItem.alt = obj.description;
    galleryItem.title = obj.description;

    gallery.append(galleryItem);
    id.append(gallery);
}

function showRandomImages() {
    for(let counter = objectArray.length; counter > 0; counter--) {
        let randomNumber = Math.floor(Math.random()*objectArray.length);
        fillGallery(objectArray[randomNumber] );
        objectArray.splice(randomNumber, 1);
    }
}

function createJSON() {
    let id = document.getElementById('json');

    let applicationData  = "application/json;charset=utf-8,"
        + encodeURIComponent(JSON.stringify(objectArray));

    let json       = document.createElement('a');
    json.href      = 'data:' + applicationData;
    json.download  = 'json.json';
    json.innerHTML = 'Ready to download your json file';

    id.appendChild(json);
}

function requestListener () {
    let obj = JSON.parse(this.responseText);
    objectArray = obj.slice();
}

function createGetRequest() {
    let request = new XMLHttpRequest();
    request.addEventListener("load", requestListener);
    // Zie de waarschuwing in je console bij het gebruik van false
    // Hoe los je dit op
    request.open("GET", "data/json.json", false);
    request.send();
}

createGetRequest();
showRandomImages();




