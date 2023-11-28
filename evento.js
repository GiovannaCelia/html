
document.getElementById("inputtext"). 
addEventListener("keypress", function mostratecla(event){
    var tecla= event.key;
    console.log(tecla);
    document.getElementById("tecla").
    innerText="ultima tecla pressionada: "+ tecla; 
})