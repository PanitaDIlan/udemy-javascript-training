const carrito = document.querySelector('#carrito');

const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');

const listashoes = document.querySelector('#list-shoes');


cargarEventListeners();
function cargarEventListeners(){
    listashoes.addEventListener('click', agregarshoes )

}

function agregarshoes(e){
    

    if (e.target.classList.contains('agregar-carrito')){
        const shoesselect = e.target.parentElement.parentElement;
        leerdatoscompra(shoesselect);
    }
}

function leerdatoscompra(compra){
   

   const infocompra = {
    imagen: compra.querySelector('img').src,
    nombre: compra.querySelector('h4').textContent,
    precio: compra.querySelector('.precio').textContent,
    id: compra.querySelector('a').getAttribute('data-id')

   }
   console.log(infocompra)
}