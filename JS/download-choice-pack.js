function downloadChoicePack() {
    domtoimage.toBlob(document.querySelector('.container-of-images'))
    .then(function (blob) {
        window.saveAs(blob, "My Choice Pack.png");
    });
}