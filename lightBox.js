const enlaces = document.querySelectorAll('.u-l .a')

const lightBox  = document.querySelector('.lightBox')
const big    = document.querySelector('.big')
const cerrar    = document.querySelector('.cerrar')

enlaces.forEach((cadaEnlace, i)=>{
    enlaces[i].addEventListener('click', (e)=>{
        e.preventDefault()
        let ruta = cadaEnlace.querySelector('.img').src

        lightBox.classList.add('activo')
        big.setAttribute('src', ruta)
})
    cerrar.addEventListener('click',()=>{
        lightBox.classList.remove('activo')
    })
})