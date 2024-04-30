function msg(){
    alert("Olá Mundo!!")
}

function mostrarnumero(){
    let numero = parseFloat(document.getElementById("numero").value);
    let mnumero = document.getElementById("mnumero");

    mnumero.innerHTML = (numero);
}

function somanumero(){
    let snumero1 = parseFloat(document.getElementById("snumero1").value);
    let snumero2 = parseFloat(document.getElementById("snumero2").value);
    let somanumero = document.getElementById("somanumero");

    somanumero.innerHTML = (snumero1 + snumero2);
    
}

function media(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let num3 = parseFloat(document.getElementById("num3").value);
    let num4 = parseFloat(document.getElementById("num4").value);

    let media = document.getElementById("media");

    media.innerHTML = ((num1 + num2 + num3 + num4) / 4)
}

function convertercm(){
    let centimetros = parseFloat(document.getElementById("centimetros").value);
    let convertercm = document.getElementById("convertercm")

    convertercm.innerHTML = (centimetros/100)

}

function vArea(){
    let pi = 3.14159
    let raio = parseFloat(document.getElementById("raio").value);
    let area = document.getElementById("area");

    area.innerHTML = (pi * raio ** 2)
}

function calcAreaQ(){
    let ladoq = parseFloat(document.getElementById("ladoq").value);
    let Areaq = parseFloat(document.getElementById("AreaQ"));

    AreaQ.innerHTML = "A área do quadrado é " + ladoq * ladoq + " o Dobro dessa área é " + (ladoq * ladoq) * 2;
}

function calcSalario(){
    let vHora = parseFloat(document.getElementById("vHora").value);
    let vValor = parseFloat(document.getElementById("vValor").value);
    let vSalario = document.getElementById("vSalario");

    vSalario.innerHTML = (vHora * vValor);
}

function transformFpC(){
    let vFa = parseFloat(document.getElementById("vFa").value);
    let FpC = document.getElementById("FpC");

    FpC.innerHTML = vFa + "F° Convertido para C° são : " + 5 * ((vFa - 32) / 9) + "C° .";
}

function transformCpF(){
    let vCe = parseFloat(document.getElementById("vCe").value);
    let CpF = document.getElementById("CpF");

    CpF.innerHTML = vCe + "C° Convertido para F° são : " +  (((vCe) * (9/5)) + 32) + "C° .";
}




