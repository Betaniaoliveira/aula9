

let base, expoente; 

base= parseInt(prompt("Digite um número de base para a potência"));
expoente=parseInt(prompt("Digite um número de expoente"));

alert(potencia(base, expoente));
function potencia (base, expoente){
    let resultado=1;
    let i =0; 
    while (i < expoente){
        resultado*= base;
        console.log(resultado);
        i++; 
        

    }
    return resultado;
}
