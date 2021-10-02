function loadFile1(event) {
    const photo1 = document.getElementById("output1");
    photo1.style.display="block";
    photo1.src = URL.createObjectURL(event.target.files[0]);
    document.getElementById("photo2").style.color="black";
    document.getElementById("photo2").style.border="solid 1px black";
    document.getElementById("file2").removeAttribute('disabled');
};
function loadFile2(event) {
    const photo2 = document.getElementById("output2");
    photo2.style.display="block";
    photo2.src = URL.createObjectURL(event.target.files[0]);
    document.getElementById("photo3").style.color="black";
    document.getElementById("photo3").style.border="solid 1px black";
    document.getElementById("file3").removeAttribute('disabled');
};
function loadFile3(event) {
    const photo3 = document.getElementById("output3");
    photo3.style.display="block";
    photo3.src = URL.createObjectURL(event.target.files[0]);
    document.getElementById("randomize").removeAttribute('disabled');
};
function randomize() {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    if (randomNumber === 1) {
        document.getElementById("output1").style.bottom="397px";
        document.getElementById("output1").style.left="237px";
        document.getElementById("output2").style.bottom="630px";
        document.getElementById("output2").style.left="413px";
        document.getElementById("output3").style.bottom="863px";
        document.getElementById("output3").style.left="589px";
    }
    else if(randomNumber === 2) {
        document.getElementById("output1").style.bottom="397px";
        document.getElementById("output1").style.left="237px";
        document.getElementById("output3").style.bottom="863px";
        document.getElementById("output3").style.left="413px";
        document.getElementById("output2").style.bottom="630px";
        document.getElementById("output2").style.left="589px";
    }
    else if(randomNumber === 3) {
        document.getElementById("output2").style.bottom="630px";
        document.getElementById("output2").style.left="237px";
        document.getElementById("output1").style.bottom="397px";
        document.getElementById("output1").style.left="413px";
        document.getElementById("output3").style.bottom="863px";
        document.getElementById("output3").style.left="589px";
    }
    else if(randomNumber === 4) {
        document.getElementById("output2").style.bottom="630px";
        document.getElementById("output2").style.left="237px";
        document.getElementById("output3").style.bottom="863px";
        document.getElementById("output3").style.left="413px";
        document.getElementById("output1").style.bottom="397px";
        document.getElementById("output1").style.left="589px";
    }
    else if(randomNumber === 5) {
        document.getElementById("output3").style.bottom="863px";
        document.getElementById("output3").style.left="237px";
        document.getElementById("output1").style.bottom="397px";
        document.getElementById("output1").style.left="413px";
        document.getElementById("output2").style.bottom="630px";
        document.getElementById("output2").style.left="589px";
    }
    else if(randomNumber === 6) {
        document.getElementById("output3").style.bottom="863px";
        document.getElementById("output3").style.left="237px";
        document.getElementById("output2").style.bottom="630px";
        document.getElementById("output2").style.left="413px";
        document.getElementById("output1").style.bottom="397px";
        document.getElementById("output1").style.left="589px";
    }
    document.getElementById("download-choice-pack").removeAttribute('disabled');
};