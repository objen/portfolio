//Set all the elements to work on

const mobileMenuOpen = document.querySelector('#mobile-menu-open')
const mobileMenu = document.querySelector('.navlinks')
const mobileMenuClose = document.querySelector('#mobile-menu-close')
const projectDetails = document.querySelector('.project-details')
const projectContent = document.querySelector('.project-content')
const modal = document.querySelector('.modal-wrapper')
const modalHeader = document.querySelector('.modal-header')
const modalSkills = document.querySelector('.modal-skills')
const modalDesc = document.querySelector('.modal-desc')
const modalLinks = document.querySelector('.modal-links')

const modalClose = document.querySelector('.modal-close')

// get the data

fetch('data/projects.json').then(function (response) {
    return response.json() 
}).then(function (data) {
    data.projects.forEach(function (project) {
            // console.log(project)
        // Set up overview section
        projectDetails.innerHTML += `<div class="flex flex-row lg:flex-col justify-center items-center">
        <div class="single-project min-h-72 xl:min-h-80 min-w-80 pl-4 flex justify-center items-center basis-1/3 z-10 transition-all motion-safe:hover:scale-105 motion-safe:hover:-rotate-12">
            <img src="${project.img}" alt=" " class="drop-shadow-lg size-36 xl:size-44 object-cover z-10 rounded-full border-solid border-black border-8 outline outline-8 outline-white">
        </div>
        <button id="${project.id}" class="projectBtn w-full lg:w-3/4 bg-slate-50 py-4 pr-4 pl-8 lg:pt-8 lg:px-4 rounded-lg -ml-12 lg:mx-auto lg:-mt-8  text-center text-slate-900 text-3xl lg:text-4xl font-semibold basis-2/3 z-0 transition-all motion-safe:hover:bg-slate-200">${project.name}</button>
        </div>`
        
    })
       // Set up modals

    let projectBtn = document.querySelectorAll('.projectBtn')
        projectBtn.forEach(function (button) {
            button.addEventListener('click', function () {
               modal.classList.remove('hidden')
               let btnID=this.id
                data.projects.forEach(function (project){
                    if (project.id == btnID){
                        console.log(project.skills)
                    modalHeader.innerHTML = `<img src="${project.img}" alt=" " class="drop-shadow-lg size-44  md:size-48 lg:size-56 xl:size- 64 object-cover z-10 rounded-full border-solid border-black border-8 outline outline-8 outline-white">
                    <h3 class="text-3xl font-bold text-right md:text-4xl lg:text-5xl xl:text-8xl">${project.name}</h3>`
                    modalSkills.innerHTML = `<p class="font-semibold">Skills Used:</p><p>${project.skills}</p>`
                    modalDesc.innerHTML = `${project.desc}`
                    modalLinks.innerHTML += `<a href="${project.live}" target="_blank"></i> Live Site</a>
                    <a href="${project.git}" target="_blank"></i> Github</a>`
                    }
                })
            })
        })
    })


// Open and close mobile menu

mobileMenuOpen.addEventListener('click', function() {
    mobileMenuOpen.classList.add('hidden')
    mobileMenu.classList.remove('hidden')
})

mobileMenuClose.addEventListener('click', function() {
    mobileMenu.classList.add('hidden')
    mobileMenuOpen.classList.remove('hidden')
})

// modal close

modalClose.addEventListener('click', function() {
    modal.classList.add('hidden')
})