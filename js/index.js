
var Thissentence= document.getElementById("p");
var images=document.getElementById("picture");
var boite=document.getElementById("boite");

function affiche(value,infi){
    boite.style.visibility="visible";
    images.src=value;
    images.style.width="608px";
    images.style.height="342px";
    Thissentence.innerHTML=infi;
    
        
}

function masque(){
    boite.style.visibility="hidden";
}