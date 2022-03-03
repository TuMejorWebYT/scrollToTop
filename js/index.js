const arrow = document.querySelector('.scrollToTop')

window.addEventListener('scroll', () => {
    if(window.scrollY >= '200'){
        arrow.classList.add('show')
    }else {
        arrow.classList.remove('show')
    }
})

arrow.addEventListener('click', () => {
    scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
})