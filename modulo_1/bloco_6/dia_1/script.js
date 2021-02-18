// script.js
const states = document.getElementById('state');
function createStateOptions() {
  const stateOptions = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
  let value = 1;
  for (let index = 0; index < stateOptions.length; index += 1) {
    const createOptions = document.createElement('option');
    states.appendChild(createOptions).innerText = stateOptions[index];
    states.appendChild(createOptions).value = stateOptions[index];
  }
}

// https://cursos.alura.com.br/forum/topico-como-faco-para-pegar-o-valor-da-selecao-do-combobox-40107
let comboBox = document.querySelector('[name="state"]').addEventListener('change', function(event) {
  const valueCapture = event.target.value; // Pegando o valor diretamente do evento atual
  console.log(valueCapture);
  const selectState = document.getElementById('select-state');
  selectState.value = valueCapture;
})

function validateSelect() {
  const formSelect = document.querySelectorAll('option');
  for (let index = 0; index < formSelect.length; index += 1) {
    if(formSelect[index].value === "") {
      states.style.borderColor = "Tomato";
      return false;
    }
  }
  states.style.borderColor = ""
  return true;
}

function validateData(data) {
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
  if (data.indexOf('/') === 2 || data.indexOf('/') === 5) {
    // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/substr
    const day = data.substr(0, 2);
    const month = data.substr(3, 2);
    const year = data.substr(6, 4);
    if ((day > 0 && day <= 31) && (month > 0 && month <= 12) && (year > 0 && year.length === 4)) {
      return true;
    }
  }
  return false;
}

function checkData() {
  const inputData = document.querySelector('.input-data');
  let data = inputData.value;
  const userData = validateData(data);
  if (!userData && data.length) {
    inputData.value = '';
    alert('Data inválida!');
    inputData.style.borderColor = "Tomato";
    return false;
  }
  if (userData) {
    inputData.style.borderColor = "";
    return userData;
  }
}

function checkEmail() {
  const email = document.querySelector('.email-input');
  let insertedEmail = email.value;
  // https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
  const emailFormat = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/.test(insertedEmail);
  if (!emailFormat && insertedEmail.length) {
    email.value = '';
    alert('E-mail inválido!');
    email.style.borderColor = "Tomato";
    return false;
  }
  if (emailFormat) {
    email.style.borderColor = "";
    return emailFormat;
  }
}

function validateTextArea() {
  const formTextArea = document.getElementById('cv-resume');
  let resumeCV = formTextArea.value;
  let result = true;
  if (resumeCV === "") {
    formTextArea.style.borderColor = "Tomato";
    formTextArea.placeholder = "Campo obrigatório!";
    result = false;
  }
  if (resumeCV !== "") {
    formTextArea.style.borderColor = "";
    return result;
  }
}

// https://www.guj.com.br/t/validar-resposta-do-tipo-radio/374986/2
function validateRadio() {
  let result = true;
  const alternatives = document.querySelectorAll("input[name=house-apartment]:checked");
  if (alternatives.length < 1) {
    alert("Selecione o Tipo de Imóvel");
    result = false;
  }
  return result;
}

// https://pt.stackoverflow.com/questions/193371/como-validar-campos-em-branco-em-html
function validateInputs() {
  const formInputs = document.querySelectorAll('.verification');
  let result = true;
  for (let index = 0; index < formInputs.length; index += 1) {
    if (formInputs[index].hasAttribute('required') && formInputs[index].value === "") {
        formInputs[index].style.borderColor = "Tomato";
        formInputs[index].placeholder = "Campo obrigatório!";
        result = false;
      }
      if (formInputs[index].hasAttribute('required') && formInputs[index].value !== "") {
        formInputs[index].style.borderColor = "";
        result = true;
      }
    }
  }


function renderCurriculum(event) {
  validateInputs();
  validateSelect();
  validateRadio();
  validateTextArea();

  // https://developer.mozilla.org/pt-BR/docs/Web/API/Event/preventDefault
  event.preventDefault();
  const formElements = document.querySelectorAll('input');
  for (let index = 0; index < formElements.length; index += 1) {
    if (formElements[index].type === 'radio' && !formElements[index].checked) {
      continue;
    }
    const userInput = formElements[index].value;
    const dataUser = document.querySelector('.form-data');
    if (checkEmail() && checkData()) {
      const div = document.createElement('div');
      div.className = 'div-curriculum';
      div.innerHTML = userInput;
      dataUser.appendChild(div);
    }
  }
}

function clearFields() {
  const formElements = document.querySelectorAll('input');
  const textArea = document.querySelector('textarea')
  const div = document.querySelectorAll('.div-curriculum');
  const inputData = document.querySelector('.input-data');

  for (let index = 0; index < formElements.length && index < div.length; index += 1) {
    const userInput = formElements[index];
    userInput.value = '';
    textArea.value = '';
    inputData.value = '';
    formElements[index].checked = false;
    div[index].innerText = '';
  }
}

const submitButton = document.querySelector('.submit-button');
submitButton.addEventListener('click', renderCurriculum);

const clearButton = document.querySelector('.clear-button');
clearButton.addEventListener('click', clearFields);

window.onload = function () {
  createStateOptions();
}
