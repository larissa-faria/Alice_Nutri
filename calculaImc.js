let pacientes = document.querySelectorAll(".paciente");
let paciente = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++) {
  console.log(pacientes[i]);

  let tdPeso = document.querySelector(".info-peso");
  let peso = tdPeso.textContent;

  let tdAltura = pacientes[i].querySelector(".info-altura");
  let altura = tdAltura.textContent;

  let imc = peso / altura ** 2;
  let infoImc = pacientes[i].querySelector(".info-imc");

  pesoValido = validaPeso(peso);

  pesoMenor = peso <= 0;
  pesoMaior = peso > 700;
  alturaMenor = altura <= 0;
  alturaMaior = altura > 2.65;
  if (!pesoValido) {
    infoImc.textContent = "Peso inválido";
  } else if (alturaMenor || alturaMaior) {
    infoImc.textContent = "Altura inválida";
  } else {
    infoImc.textContent = imc.toFixed(2);
  }
}

function validaPeso(peso) {
  if (peso >= 0 && peso < 700) {
    return true;
  } else {
    return false;
  }
}

function calculaImc(peso, altura) {
  var imc = 0;
  imc = peso / altura ** 2;
  return imc.toFixed(2);
}
