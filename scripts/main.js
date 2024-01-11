let myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";
let myvariable;
myvariable = "UESTC";
alert("If you are under 18 years old, please exit this site!!!");
let myImage = document.querySelector("img");
myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/uestc.png") {
        myImage.setAttribute("src", "images/snowman.svg");
    } else {
        myImage.setAttribute("src", "images/uestc.png");
    }
};
let myButton = document.querySelector("button");

function setUserName() {
    let myName = prompt("Enter your name:");
    if (!myName) {
        setUserName();
    }
    else {
        localStorage.setItem("name", myName);
        myHeading.textContent = "Nice to meet you! let's do something great," + myName;
    }
}
if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Nice to meet you! let's do something great," + storedName;
}
myButton.onclick = function () {
    setUserName();
};
