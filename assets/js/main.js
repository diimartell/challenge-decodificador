let texto = document.getElementById("texto");
let showContent = document.querySelector('#show-content');
let inputCopy = document.createElement('button');
inputCopy.className = 'button-secondary';
inputCopy.setAttribute('id', 'copy');
inputCopy.textContent = 'Copiar';


let element = document.createElement('p');
element.setAttribute('id', 'text-cripto');

function criptografar() {
    let textoValue = texto.value;
    
    let textoCriptografado = textoValue
    .replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat')

    showContent.children[0].style.display = "none";
    showContent.children[1].style.display = "none";
    element.innerHTML = textoCriptografado;
    showContent.appendChild(element);
    showContent.appendChild(inputCopy);
    inputCopy.style.visibility = 'visible';

    if (!textoCriptografado) {
        showContent.children[0].style.display = "initial";
        showContent.children[1].style.display = "initial";
        showContent.removeChild(element);
        showContent.removeChild(inputCopy);
        inputCopy.style.visibility = 'hidden'; 
    }
    
}

function descriptografar() {
    let textoValue = texto.value;

    let textoDescriptografado = textoValue
    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ai/g, 'a')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u')

    showContent.children[0].style.display = "none";
    showContent.children[1].style.display = "none";
    element.innerHTML = textoDescriptografado;
    showContent.appendChild(element);
    showContent.appendChild(inputCopy);
    inputCopy.style.visibility = 'visible';

    if (!textoDescriptografado) {
        showContent.children[0].style.display = "initial";
        showContent.children[1].style.display = "initial";
        showContent.removeChild(element);
        showContent.removeChild(inputCopy);
        inputCopy.style.visibility = 'hidden'; 
    }
}

function copied() {
    let copyText = document.querySelector("#text-cripto");
    navigator.clipboard.writeText(copyText.innerText)
}

inputCopy.addEventListener('click', copied);

