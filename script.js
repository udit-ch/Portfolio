document.getElementById('year').textContent = new Date().getFullYear();
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target); }
  })
},{threshold:0.12});
revealEls.forEach(el=>io.observe(el));
const toTop = document.querySelector('.to-top');
window.addEventListener('scroll', ()=>{
  toTop.style.display = window.scrollY > 600 ? 'grid' : 'none';
});
toTop.addEventListener('click', ()=> window.scrollTo({top:0, behavior:'smooth'}));
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
toggle.addEventListener('click', ()=> nav.classList.toggle('open'));
