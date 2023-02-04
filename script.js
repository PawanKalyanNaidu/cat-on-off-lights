function switchOff(){
    document.getElementById("bulb-on").src="img/bulb-go-off-img.png";
    document.getElementById("cat-img").src="img/cat-eyes-img.png";
    document.getElementById("switchstatus").textContent="Switch Off";
    document.getElementById("offswitch").style.backgroundColor="#cbd2d9";
    document.getElementById("onswitch").style.backgroundColor="#22c55e";
}

function switchOn(){
    document.getElementById("bulb-on").src="img/bulb-go-on-img.png";
    document.getElementById("cat-img").src="img/cat-img.png";
    document.getElementById("switchstatus").textContent="Switch On";
    document.getElementById("onswitch").style.backgroundColor="#cbd2d9";
    document.getElementById("offswitch").style.backgroundColor="#e12d39"
}