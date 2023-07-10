function getInputValueById(inputId) {
  const inputField = document.getElementById(inputId);
  const inputValueString = inputField.value;
  const inputFieldValue = parseFloat(inputValueString);
  inputField.value = '';

  return inputFieldValue;
}

function getTextElementById(elementId) {
  const element = document.getElementById(elementId);
  const elementValueString = element.innerText;
  const elementValue = parseFloat(elementValueString);
  return elementValue;
}

function setElementValueById(elementId, newValue) {
  const element = document.getElementById(elementId);
  element.innerText = newValue;
}
