function download() {
    domtoimage.toBlob(document.querySelector('.container-of-image-with-text'))
    .then(function (blob) {
        window.saveAs(blob, 'my-node.png');
    });
}