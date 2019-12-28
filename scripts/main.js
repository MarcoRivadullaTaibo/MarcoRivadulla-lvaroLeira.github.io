let myImage = document.querySelector("img");
 myImage.onclick = function(){
    let mySrc = myImage.getAttribute("src");
    if(mySrc === "images/descarga.jpg") {
     myImage.setAttribute ("src","images/deportivos.jpg");
    } else {
     myImage.setAttribute ("src","images/descarga.jpg");
     }
    }
    
    
    let myButton = document.querySelector("button");
    let myHeading = document.querySelector("h1");
    function setUserName() {
     let myName = prompt("Introduzca marca diferente a Porsche.");
     if(!myName || myName === null) {
      setUserName();
      } else {
      localStorage.setItem("name", myName);
      myHeading.innerHTML = 
