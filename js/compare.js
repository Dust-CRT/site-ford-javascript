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

// search on array if exist carClass returning position, if not return -1
function GetCarArrPosition(arr, carClass) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].nome === carClass.nome)
            return i;
    }
    return -1;
}

function SetCarToCompare(el, carClass) {
    if (carClass instanceof Car) {
        const pos = GetCarArrPosition(carArr, carClass); // faltava essa linha

        if (el.checked) {
            if (pos === -1) { // -1 = carro ainda não está no array (não "pos === 1")
                if (carArr.length < 2) {
                    carArr.push(carClass);
                } else {
                    el.checked = false;
                    alert("Você já selecionou 2 veiculos.");
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
    if (carArr.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }

    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare() {
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
    return new Intl.NumberFormat("pt-br", { style: "currency", currency: "BRL" }).format(val);
}

function UpdateCompareTable() {
    // IDs reais do lancamento.html: compare_<campo>_0 e compare_<campo>_1
    carArr.forEach((car, i) => {
        const col = i;

        setCellHtml(`compare_image_${col}`, `<img src="${car.image}" width="100">`);
        setCellText(`compare_modelo_${col}`, car.nome);
        setCellText(`compare_alturacacamba_${col}`, car.alturaCacamba);
        setCellText(`compare_alturaveiculo_${col}`, car.alturaVeiculo);
        setCellText(`compare_alturasolo_${col}`, car.alturaSolo);
        setCellText(`compare_capacidadecarga_${col}`, car.capacidadeCarga);
        setCellText(`compare_motor_${col}`, car.motor);
        setCellText(`compare_potencia_${col}`, car.potencia);
        setCellText(`compare_volumecacamba_${col}`, car.volumeCacamba);
        setCellText(`compare_roda_${col}`, car.roda);
        setCellText(`compare_preco_${col}`, formatValue(car.preco));
    });
}