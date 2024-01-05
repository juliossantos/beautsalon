const btnMenu = document.getElementById('burger')

function toggleMenu(){
    const nav = document.getElementById('nav')

    nav.classList.toggle('active')
}

btnMenu.addEventListener('click', toggleMenu)


function removeActive(){
    const nav =  document.getElementById('nav')

    nav.classList.remove('active')

}

