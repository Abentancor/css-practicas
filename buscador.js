const formulario    = document.querySelector('.formulario')
const boton         = document.querySelector('.button-form')
const resultado     = document.querySelector('.frutas')

const productos = [
    {nombre:'banana 🍌', valor:'$150'},
    {nombre:'manzana 🍎', valor:'$200'},
    {nombre:'kiwi 🥝', valor:'$300'},
    {nombre:'frutilla 🍓', valor:'$250'},
    {nombre:'sandia 🍉', valor:'$125'},
    {nombre:'pera 🍐', valor:'$200'},
    {nombre:'melon 🍈', valor:'$250' }
]

const filtrar = ()=>{
    //console.log(formulario.value)
    resultado.innerHTML = '';

    const texto = formulario.value.toLowerCase();
    for(let producto of productos){
        let nombre = producto.nombre.toLowerCase();
        if (nombre.indexOf(texto) !== -1){
            resultado.innerHTML += `<li class="fruta">${producto.nombre}: ${producto.valor} </li>`
        }
    }
    if(resultado.innerHTML === ''){
        resultado.innerHTML += `<li class="fruta"> Producto no Encontrado... </li>`
    }
}
boton.addEventListener('click', filtrar)
formulario.addEventListener('keyup', filtrar)
filtrar()