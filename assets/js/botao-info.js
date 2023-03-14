const botao = document.querySelectorAll('.btn');

botao.forEach((el, i)=>{
    // el.classList.add('active');
    el.addEventListener('click', (event) => {
        event.target.closest('.menu-nav').classList.toggle('activa');
    })
})



