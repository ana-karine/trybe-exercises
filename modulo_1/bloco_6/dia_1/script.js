const selectEstado = document.getElementById('estado');
const estado = ['Selecione','Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];

// https://github.com/gomesanac/trybe-exercises/blob/main/FRONT-END/BLOCO_06/DIA_1_2/script.js
function createOption() {
  for (let index = 0; index < estado.length; index += 1) {
    const option = document.createElement('option');
    selectEstado.appendChild(option);
    selectEstado[index].innerText = estado[index];
  }
}
createOption();



const btnSubmit = document.getElementById('submit');

btnSubmit.addEventListener('click', function () {
  let date = document.getElementById('data').value;
// https://pt.stackoverflow.com/questions/398411/converter-string-no-formato-dd-mm-yyyy-hhmm-para-date  
  const [DD, MM, YYYY] = date.split('/');
  let ano = parseInt(`${YYYY}`, 10);
  let mes = parseInt(`${MM}`, 10);
  let dia = parseInt(`${DD}`, 10);

// https://github.com/codelie/validaData/blob/master/validaData.js  
  if ((ano !== null) && (mes !== null) || (dia !== null)) {
    
    if (ano > 0) {
      if ((mes <= 0) || (mes > 12)){
        alert('Número mês menor que 1 ou maior que 12 inválido!');
        return false;
      }
      if ((dia > 31) || (dia <= 0)) {
        alert('Número dia maior que 31 ou menor que 1 inválido!');
        return false;
      }
      if ((1 <= mes <= 12) && (1 <= dia <= 31)) {
        alert('Data Validada! '+dia+'/'+mes+'/'+ano);
        return true;
      }
    } else {
        alert('Ano negativo. Invalidado!');
        return false;            
      }
  } else { 
    alert('Dados não numéricos. Invalidado!');
      return false;
    } 
})
//console.log(checkDate(date)); 



const values = document.querySelectorAll('.value');
const divConsolidated = document.querySelector('#consolidated');

// https://github.com/gomesanac/trybe-exercises/blob/main/FRONT-END/BLOCO_06/DIA_1_2/script.js
function btnEnviar(event) {
  event.preventDefault();
  for(let index = 0; index < values.length; index += 1) {
      const createDiv = document.createElement('div');
      createDiv.innerText = values[index].value;
      createDiv.className = 'div';
      divConsolidated.appendChild(createDiv);
  };
  document.querySelector('#submit').disabled = true; 
}



const sectionRespostas = document.querySelector('#respostas');

// https://github.com/gomesanac/trybe-exercises/blob/main/FRONT-END/BLOCO_06/DIA_1_2/script.js
function btnLimpar() {
  const deleteDiv = document.querySelectorAll('.div');
  for(let index = 0; index < deleteDiv.length; index += 1) {
    divConsolidated.removeChild(deleteDiv[index]);
  };
  clear();
  document.querySelector('#submit').disabled = false; 
}


document.querySelector('#submit').addEventListener('click', function (event) {
  btnEnviar(event);
});


const erase = document.querySelector('#reset');
erase.addEventListener('click', btnLimpar);



// https://pt.stackoverflow.com/questions/299730/limpando-campos-do-formul%C3%A1rio
function clear() {
  var elements = document.querySelectorAll('.value');
  elements.forEach(value => {
    console.log(value);
    value.value = '';
  })
}
