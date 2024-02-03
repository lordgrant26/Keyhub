const togglebtn = document.getElementsByClassName('toggle-btn')[0]
const navLink = document.getElementsByClassName('navLink')[0]

togglebtn.addEventListener('click', () =>{
        navLink.classList.toggle('active')
})