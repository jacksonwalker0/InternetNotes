const listEL = []

const saveBTN = document.getElementById('saveBtn')

const inputEL = document.getElementById('inputEl')

const ListOrder = document.getElementById('list')

const clearBTN = document.getElementById('clearBtn')

let fullList = ''

saveBTN.addEventListener("click", () => {

  listEL.push(inputEL.value)

  inputEL.value = ''

  console.log(listEL)

  ListOrder.innerHTML = ''
  
  for (let i = 0; i < listEL.length; i++) {
    ListOrder.innerHTML += '<li>'+ listEL[i] +'</li>'
  }
})