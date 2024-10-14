const inputVitorias = document.querySelector("#input-vitorias");
const inputDerrotas = document.querySelector("#input-derrotas");

const btnCheck = document.querySelector("#btn-check");

let dialogPop = document.querySelector("#box-dialog");

const btnFechar = document.querySelector('#btn-fechar');

const containerDialog = document.querySelector("#container-dialog");
let elementP;
btnCheck.addEventListener("click", function(event){
    event.preventDefault();

    let vitoria = Number.parseInt(inputVitorias.value);
    let derrota = Number.parseInt(inputDerrotas.value);

    

    if(isNaN(vitoria) || isNaN(derrota)){
        alert("Somente numeros!");
    }else{
        let saldo = calcSaldo(vitoria,derrota);
        elementP = document.createElement("p");
        elementP.innerHTML = "O Herói tem o saldo de: "+ saldo +" e está no nível de: "+ checarNivel(saldo);
        containerDialog.appendChild(elementP);
        dialogPop.showModal();
    }
})

btnFechar.addEventListener("click",function(){
    elementP.innerHTML = "";
    dialogPop.close();
;})

function calcSaldo(num1, num2){
    return num1 - num2;
}


function checarNivel(saldo){
    if(saldo <= 10){
        return "Ferro";
    }else if(saldo >= 11 && saldo <= 20){
        return "Bronze";
    }else if(saldo >= 21 && saldo <= 50){
        return "Prata";
    }else if(saldo >= 51 && saldo <= 80){
        return "Ouro";
    }else if(saldo >= 81 && saldo <= 90){
        return "Diamante";
    }else if(saldo >= 91 && saldo <= 100){
        return "Lendário";
    }else if(saldo >= 101){
        return "Imortal";
    }else{
        return "Error";
    }
}




