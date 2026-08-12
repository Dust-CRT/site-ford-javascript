
//car
let carArr = [];

class Car {

    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image) {
        this.nome = nome;
        this.preco = preco;
        this.alturaCacamba = alturaCacamba;
        this.alturaVeiculo = alturaVeiculo;
        this.alturaSolo = alturaSolo;
        this.capacidadeCarga = capacidadeCarga;
        this.motor = motor;
        this.potencia = potencia;
        this.volumeCacamba = volumeCacamba;
        this.roda = roda;
        this.image = image;
    }

} 

// search on array if exist carClass returning 1 if not return -1
function GetCarArrPosition(arr, carClass) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i].nome  === carClass.nome)
            return i;
    }
    return -1;
}

function SetCarToCompare(el, carClass) {  
    if(carClass instanceof Car){       
        if(el.checked){
            if (pos === 1) {    
                if ( carArr.length < 2) {
                    carArr.push(carClass);
                } else {
                    el.checked = false;
                    alert("Você já selecionou 2 veiculos.")
                }
            }
            
        } else {
          if (pos !== -1) {
            carArr.splice(pos, 1);
          } 
        } 
    } else {
        throw "You need set a Car Class";
    }
}


function ShowCompare() {
    if(carArr.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }

    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare(){
    document.getElementById("compare").style.display = "none"; 
}

function setCellText(id, val) { 
    const el = document.getElementById(id);
    if (el) {
        el.innerText = val;
    }

}

function setCellHtml(id, html) {
    const el = document.getElementById(id);
    if (el) {
        el.innerHTML = html;  
    }
}

function formatValue(val) {
    return new Intl.NumberFormat("pt-br", {style: "currency", currency: "BRL"}).format(val);
}

function UpdateCompareTable() {
    carArr.forEach((car, i) => {
        const col = i;

        SetCellText(`compare-nome-${col}`, car.nome);
        SetCellText(`compare-altura-cacamba-${col}`, car.alturaCacamba);
        SetCellText(`compare-altura-veiculo-${col}`, car.alturaVeiculo);
        SetCellText(`compare-altura-solo-${col}`, car.alturaSolo);
        SetCellText(`compare-capacidade-carga-${col}`, car.capacidadeCarga);
        SetCellText(`compare-motor-${col}`, car.motor);
        SetCellText(`compare-potencia-${col}`, car.potencia);
        SetCellText(`compare-volume-cacamba-${col}`, car.volumeCacamba);
        SetCellText(`compare-roda-${col}`, car.roda);
        SetCellText(`compare-preco-${col}`, car.preco);
    });
}
