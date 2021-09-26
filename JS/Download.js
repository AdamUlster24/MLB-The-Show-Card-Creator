let downloadPlayerName = downloadPlayerNameTransfer;
function download() {
    domtoimage.toBlob(document.querySelector('.container-of-image-with-text'))
    .then(function (blob) {
        window.saveAs(blob, downloadPlayerName + "Card Art.png");
    });
}