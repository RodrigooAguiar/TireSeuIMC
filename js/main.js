import { Modal } from "./modal.js"
import { AlertError } from "./alert-error.js"
import { notNumber, IMC } from "./utils.js"



const form = document.querySelector('form')// interage com o formulário

//cria variavéis para os inputs
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')
inputHeight.oninput = () => AlertError.close()
inputWeight.oninput = () => AlertError.close()





form.onsubmit = function(event){ // ao clicar no submit não recarrega a página
    event.preventDefault()// não faça o padrão

    const weight = inputWeight.value// permite capturar o valor optido pelo input
    const height = inputHeight.value

    const showAlertError = notNumber(weight) || notNumber(height)

    if(showAlertError){
        AlertError.open()
        return;
    }

    AlertError.close()

    const result = IMC(weight, height)
    const message = `Seu IMC é de ${result}` // altera o texto da msg

    Modal.message.innerText = message // insere o novo texto no html
    Modal.open() // após o resultado abre a caixa do modal
}




