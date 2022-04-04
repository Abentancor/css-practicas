const fila    = document.querySelectorAll('.fila');
const h2        = document.querySelectorAll('.h2');

h2.forEach((cadaH2, i)=>{

    h2[i].addEventListener('click', ()=>{

        fila.forEach((cadaFila, i)=>{

            fila[i].classList.remove('activo')
        })
        fila[i].classList.add('activo')

    })
})