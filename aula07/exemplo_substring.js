var s = "JavaScript e Python"

var pos1 = s.indexOf("Python");
console.log(pos1)

var novaString = s.substring(13, 19)
console.log(novaString);

var frase = "Olá mundo"
if(frase.startsWith("Olá")){
    let sub = frase.substring("0")
    let novaString = sub.replace("mundo", "Pessoal");
    let novaStringMaicuscula = novaString.toUpperCase();
    console.log(novaStringMaicuscula)
}
