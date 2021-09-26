function download() {
    domtoimage.toBlob(document.querySelector('.container-of-image-with-text'))
    .then(function (blob) {
        window.saveAs(blob, playerName + "card art.png");
    });
}