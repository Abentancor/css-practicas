const liModal= document.getElementById('#li')
const modal = document.querySelector('.modal')


liModal.forEach((cadaLi, i)=> {
    li[i].addEventListener('click', ()=>{
        console.log('hiciste click')
        modal[i].classList.add('cerrar')
    })
});