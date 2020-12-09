const icon = document.querySelector('#burgerIcon');
const menu = document.querySelector('#menu');

icon.addEventListener('click', ()=>{
   menu.classList.toggle('hidden')
});