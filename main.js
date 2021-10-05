//fazer os botoes funcionar
//document.getElementById - chama o elemento

const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

//função para atualizar a pagina
function isLampBroken() {
  return lamp.src.indexOf('quebrada') > -1;
}

//função ligar
// ! função negativa - se estiver quebrada não liga
function lampOn() {
  if (!isLampBroken()) {
    lamp.src = './img/ligada.jpg';
  }
}
//função desligar
// ! função negativa - se estiver quebrada não desliga
function lampOff() {
  if (!isLampBroken()) {
    lamp.src = './img/desligada.jpg';
  }
}

function lampBroken() {
  lamp.src = './img/quebrada.jpg';
}

//eventlist captura o clic no botão
turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);
