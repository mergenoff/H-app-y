const open = document.querySelector('.signBtn')
const close = document.querySelector('.modal_content-close')
const modal = document.querySelector('.modal')
const login = document.querySelector('#login')
const register = document.querySelector('#register')
const content = document.querySelector('.modal_content')
const input = document.querySelector('#inp')


//popup
const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const menu = document.querySelector("#menu").cloneNode(1);
const body = document.body;

open.addEventListener("click", function (){
    modal.style.display = 'block'
})

close.addEventListener("click", () =>{
    modal.style.display = 'none'
})

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


login.addEventListener('click', ()=>{
    input.classList.toggle('hidden')
    document.querySelector('.signin').innerText = "Войти"

})

register.addEventListener('click', ()=>{
    input.classList.toggle('hidden')

})

hamb.addEventListener('click', hambHandler)

function hambHandler(e) {
    e.preventDefault();
    popup.classList.toggle("open");
    hamb.classList.toggle("active");
    body.classList.toggle("noscroll");
    renderPopup();
}

function renderPopup(){
    popup.appendChild(menu)
}
const links = Array.from(menu.children);

links.forEach((link) => {
    link.addEventListener("click", closeOnClick);
});

function closeOnClick(){
    popup.classList.remove('open')
    hamb.classList.remove("active");
    body.classList.remove("noscroll");
}



