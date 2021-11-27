const selectSeries = document.querySelector("#select-series");
selectSeries.addEventListener("change", myFunction);
function myFunction() {
    if (this.value === "kansas-city-royals") {
        kansasCityRoyals();
    } else if (this.value === "gold-glove") {
        goldGlove();
    } else if (this.value === "mvp") {
        MVP();
    } else if (this.value === "rookie-of-the-year") {
        rookieOfTheYear();
    } else if (this.value === "silver-slugger") {
        silverSlugger();
    }
}
function kansasCityRoyals() {
    document.getElementById("team-background").src="./Images/Kansas City Royals Background.png";
    document.getElementById("team-background").style.display="inline-block";
    document.getElementById("template-rectangle").src="./Images/Signature Series Rectangle.png";
    document.getElementById("template-rectangle").style.display="inline-block";
    document.getElementById("team-rectangle").src="./Images/Kansas City Royals Rectangle.png";
    document.getElementById("team-rectangle").style.display="inline-block";
    document.getElementById("player-first-name").removeAttribute('disabled');
}
const playerFirstName = document.getElementById("player-first-name");
playerFirstName.addEventListener('input', function () {
    document.getElementById("container").innerHTML = this.value;
    document.getElementById("player-last-name").removeAttribute('disabled');
})
const playerLastName = document.getElementById("player-last-name");
playerLastName.addEventListener('input', function () {
    document.getElementById("container2").innerHTML = this.value;
    document.getElementById("player-overall").removeAttribute('disabled');
})
const playerOverall = document.getElementById("player-overall");
playerOverall.addEventListener('input', function () {
    document.getElementById("overall").innerHTML = this.value;
    document.getElementById("select-position").removeAttribute('disabled')
})
const selectPosition = document.querySelector("#select-position");
selectPosition.addEventListener("change", newFunction);
function newFunction() {
    document.getElementById("file1").removeAttribute('disabled');
    document.getElementById("photo1").style.color="black";
    document.getElementById("photo1").style.border="solid 1px black";
    if (this.value === "starting-pitcher") {
        startingPitcher();
    } else if (this.value === "relief-pitcher") {
        reliefPitcher();
    } else if (this.value === "closing-pitcher") {
        closingPitcher();
    } else if (this.value === "catcher") {
        catcher();
    } else if (this.value === "first-base") {
        firstBase();
    } else if (this.value === "second-base") {
        secondBase();
    } else if (this.value === "third-base") {
        thirdBase();
    } else if (this.value === "shortstop") {
        shortstop();
    } else if (this.value === "left-field") {
        leftField();
    } else if (this.value === "center-field") {
        centerField();
    } else if (this.value === "right-field") {
        rightField();
    }
}
function startingPitcher() {
    document.getElementById("position-on-card").style.left="18px";
    document.getElementById("position-on-card").innerHTML = "SP";
}
function reliefPitcher() {
    document.getElementById("position-on-card").style.left="18px";
    document.getElementById("position-on-card").innerHTML = "RP";
}
function closingPitcher() {
    document.getElementById("position-on-card").style.left="18px";
    document.getElementById("position-on-card").innerHTML = "CP";
}
function catcher() {
    document.getElementById("position-on-card").style.left="30px";
    document.getElementById("position-on-card").innerHTML = "C";
}
function firstBase() {
    document.getElementById("position-on-card").style.left="18px";
    document.getElementById("position-on-card").innerHTML="1B";
}
function secondBase() {
    document.getElementById("position-on-card").style.left="18px";
    document.getElementById("position-on-card").innerHTML="2B";
}
function thirdBase() {
    document.getElementById("position-on-card").style.left="18px";
    document.getElementById("position-on-card").innerHTML="3B";
}
function shortstop() {
    document.getElementById("position-on-card").style.left="18px";
    document.getElementById("position-on-card").innerHTML="SS";
}
function leftField() {
    document.getElementById("position-on-card").style.left="18px";
    document.getElementById("position-on-card").innerHTML="LF";
}
function centerField() {
    document.getElementById("position-on-card").style.left="18px";
    document.getElementById("position-on-card").innerHTML="CF";
}
function rightField() {
    document.getElementById("position-on-card").style.left="18px";
    document.getElementById("position-on-card").innerHTML="RF";
}
function loadFile1(event) {
    const photo = document.getElementById("output");
    photo.style.display="block";
    photo.src = URL.createObjectURL(event.target.files[0]);
    document.getElementById("player-size").removeAttribute('disabled');
};
const playerSize = document.getElementById("player-size");
playerSize.addEventListener('input', function () {
    document.getElementById("output").style.width=400+parseInt(this.value)+"px";
    document.getElementById("player-top-bottom").removeAttribute('disabled');
})
const playerTopBottom = document.getElementById("player-top-bottom");
playerTopBottom.addEventListener('input', function () {
    document.getElementById("output").style.top=parseInt(this.value)+"px";
    document.getElementById("output").style.height=522.14-parseInt(this.value)+"px";
    document.getElementById("player-left-right").removeAttribute('disabled');
})
const playerLeftRight = document.getElementById("player-left-right");
playerLeftRight.addEventListener('input', function () {
    document.getElementById("output").style.left=this.value+"px";
    document.getElementById("file2").removeAttribute('disabled');
    document.getElementById("photo2").style.color="black";
    document.getElementById("photo2").style.border="solid 1px black";
})
function loadFile2(event) {
    const photo = document.getElementById("signature");
    photo.style.display="block";
    photo.src = URL.createObjectURL(event.target.files[0]);
    document.getElementById("signature-size").removeAttribute('disabled');
};
const signatureSize = document.getElementById("signature-size");
signatureSize.addEventListener('input', function () {
    document.getElementById("signature").style.width=150+parseInt(this.value)+"px";
    document.getElementById("signature-top-bottom").removeAttribute('disabled');
})
const signatureTopBottom = document.getElementById("signature-top-bottom");
signatureTopBottom.addEventListener('input', function () {
    document.getElementById("signature").style.top=425-parseInt(this.value)+"px";
    document.getElementById("signature-left-right").removeAttribute('disabled');
})
const signatureLeftRight = document.getElementById("signature-left-right");
signatureLeftRight.addEventListener('input', function () {
    document.getElementById("signature").style.left=115+parseInt(this.value)+"px";
    document.getElementById("download-card-art").removeAttribute('disabled');
})