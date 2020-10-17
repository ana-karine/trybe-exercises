const selectEstado = document.getElementById('estado');
const estado = ['','Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];

// https://github.com/gomesanac/trybe-exercises/blob/main/FRONT-END/BLOCO_06/DIA_1_2/script.js
function createOption() {
  for (let index = 0; index < estado.length; index += 1) {
    const option = document.createElement('option');
    selectEstado.appendChild(option);
    selectEstado[index].innerText = estado[index];
  }
}
createOption();


// https://github.com/AlexKrupko/DatePickerX
const datePicker = document.getElementById('data');
datePicker.DatePickerX.init({
  format: 'dd/mm/yyyy',
  mondayFirst: false
});


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
}


// https://pt.stackoverflow.com/questions/299730/limpando-campos-do-formul%C3%A1rio
function clear() {
  var elements = document.querySelectorAll('.value');
  elements.forEach(value => {
    console.log(value);
    value.value = '';
  })
}

// https://github.com/gomesanac/trybe-exercises/blob/main/FRONT-END/BLOCO_06/DIA_1_2/script.js
function btnLimpar() {
  const deleteDiv = document.querySelectorAll('.div');
  for(let index = 0; index < deleteDiv.length; index += 1) {
    divConsolidated.removeChild(deleteDiv[index]);
  };
  clear();
}


document.querySelector('#submit').addEventListener('click', btnEnviar);
document.querySelector('#reset').addEventListener('click', btnLimpar);


// https://github.com/horprogs/Just-validate
// https://www.cssscript.com/custom-html5-form-validator-vanilla-javascript-just-validate/
new window.JustValidate('.curriculum');
new window.JustValidate('.curriculum', {
  rules: {
    name: {
      required: true,
      name: true
    },
    email: {
      required: true,
      email: true,
    },
    cpf: {
      required: true,
      cpf: true,
    },
    endereco: {
      required: true,
      endereco: true,
    },
    cidade: {
      required: true,
      cidade: true,
    },
    estado: {
      required: true,
      estado: true,
      value: false
    },
    radio: {
      required: true,
      radio: true,
    },
    resumo: {
      required: true,
      resumo: true,
    },
    cargo: {
      required: true,
      cargo: true,
    },
    descricao: {
      required: true,
      descricao: true,
    },
    data: {
      required: true,
      data: true,
    },
  },
})
