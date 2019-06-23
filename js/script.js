function changeBackground(imageURL) {
    document.body.style.backgroundImage = "url('" + imageURL + "')";
}
let dataURL = 'https://api.nasa.gov/planetary/apod?api_key=3ue7xXIMt71PY0uAQ6iKjydrgbWPLKpVKV2cbkmH';

function getPicture() {
    fetch(dataURL)
    .then((resp) => {
        return resp.json();
    })
    .then((data) => {
        changeBackground(data.hdurl);
    });
}

getPicture()

let urlMars = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=3ue7xXIMt71PY0uAQ6iKjydrgbWPLKpVKV2cbkmH";

function getMarsPicture() {
    fetch(urlMars)
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {
            let pictureList = data.photos;
            createGallery(pictureList);
        });
}
getMarsPicture()

let gallery = document.getElementById('content');

function createGallery(dataList) {
    // console.log(dataList)
    for(let i = 0; i < 9; i++) {
        let img = document.createElement('img');
        let imgPath = dataList[i].img_src;
        img.src = imgPath;
        gallery.appendChild(img);
        
        
    }

}

