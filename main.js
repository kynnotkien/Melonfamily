let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 3000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);

    
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};

//time set

function diff(){
    let a = moment('2023-3-26 12:00:00');
    let b = moment();
    diff = moment.preciseDiff(a, b, true);

    diff_years = diff['years'];
    diff_months = diff['months'];
    diff_days = diff['days']; 
    diff_hours = diff['hours'];
    diff_minutes = diff['minutes'];
    diff_seconds = diff['seconds']; diff_seconds = diff['seconds'] < 10 ? '0' + diff_seconds : diff_seconds;

    document.getElementById("days-output").innerHTML = diff_years + " years " + diff_months + " months " + diff_days + " days " + diff_hours + " hours " + diff_hours + " hour " + diff_minutes + " minutes " + diff_seconds + " seconds ";
    
  }
  setInterval(diff, 1000);

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

function showSidebar(){ 
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex'
}

function hideSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none'
}

//login

const login = document.getElementById('myCanvas');
const signin = document.getElementById('myCanvas');

function LoginToggle() {
  const toggle = document.querySelector('.toggle');
  const button = document.querySelector('.sign');
  const buttonself = document.querySelector('.log');
  toggle.style.left = '50%';
  toggle.style.borderTopLeftRadius = '20%';
  toggle.style.borderBottomLeftRadius = '20%';
  toggle.style.borderTopRightRadius = '20px';
  toggle.style.borderBottomRightRadius = '20px';
  button.style.display = 'flex';
  buttonself.style.display = 'none';
}

function SigninToggle(){
  const toggle = document.querySelector('.toggle')
  const button = document.querySelector('.log')
  const buttonself = document.querySelector('.sign')
  toggle.style.left = '0'
  toggle.style.borderTopLeftRadius = '20px';
  toggle.style.borderBottomLeftRadius = '20px';
  toggle.style.borderTopRightRadius = '20%';
  toggle.style.borderBottomRightRadius = '20%';
  button.style.display = 'flex'
  buttonself.style.display = 'none'
  
}

function MSignup(){
  const msign = document.querySelector('.box-sign')
  const mlog = document.querySelector('.box-log')

  msign.style.display = 'block';
  mlog.style.display = 'none';
  console.log('test')
}

function MLogin(){
  const msignup = document.querySelector('.box-sign');
  const mlogin = document.querySelector('.box-log');

  msignup.style.display = 'none';
  mlogin.style.display = 'block';  
}

//cate
