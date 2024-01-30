//mobile menu open and close

const mobileMenuOpen = document.querySelector('#mobile-menu-open')
const mobileMenu = document.querySelector('.navlinks')
const mobileMenuClose = document.querySelector('#mobile-menu-close')

mobileMenuOpen.addEventListener('click', function() {
    mobileMenuOpen.classList.add('hidden')
    mobileMenu.classList.remove('hidden')
})

mobileMenuClose.addEventListener('click', function() {
    mobileMenu.classList.add('hidden')
    mobileMenuOpen.classList.remove('hidden')
})
// find the display area

// const biscuitFacts = document.querySelector('.biscuits')

// get the data

fetch('data/projects.json').then(function (response) {
    return response.json() 
}).then(function (data) {
    data.projects.forEach(function (project) {
            console.log(project)
        // biscuitFacts.innerHTML += `<div class="single-biscuit">
        // <a href="${biscuit.wikipedia}"><h3>${biscuit.name}</h3></a>
        // <img src="${biscuit.img}" alt="a biscuit">
        // <p>Dunk Time: ${biscuit.RDT}</p>
        // <p>${biscuit.desc}</p>
        // <div>`
    }) 
})