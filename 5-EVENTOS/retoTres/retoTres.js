const parrafo1 = document.querySelector('.message');
const list = document.querySelector('.message1');

const showAlert=()=> {
    list.innerHTML = '<p>este es el parrafo 2 de lorem ipsum</p>';
}
     parrafo1.addEventListener('click',showAlert)
