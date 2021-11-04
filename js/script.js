let btnCategories = document.querySelector('.categories');
let ListCategories = document.querySelector('.categories__list');
let ToggleBtn = document.querySelector('.btn');
let MenuList = document.querySelector('.list__nav');


btnCategories.addEventListener('click', Dropdown);
function Dropdown() {
  document.body.classList.toggle('btnDown');
  if(document.body.className == 'btnDown'){
    btnCategories.innerHTML = `<img src="./imgs/crossbar.png"><span>Categories</span>`
    ListCategories.style.display = 'block'
  }
  else{
    btnCategories.innerHTML = `<img src="./imgs/menubar.png"><span>Categories</span>`
    ListCategories.style.display = 'none'

  }
}


ToggleBtn.addEventListener('click',ToggleMenu);
function ToggleMenu() {
  MenuList.classList.toggle('ToggleBar');
}

// Scroll reveal Animation

const sr = ScrollReveal({
  origin: 'left',
  distance: '30px',
  duration: 2000,
  reset: true
});
sr.reveal(`.active .main__content`,{
            interval:200
});
const sc = ScrollReveal({
  origin: 'right',
  distance: '30px',
  duration: 2000,
  reset: true
});
sr.reveal(`.active .main__img img`,{
            interval:200
});
const rr = ScrollReveal({
  origin: 'bottom',
  distance: '10px',
  duration: 2000,
  reset: true
});
rr.reveal(`.feature__container img,.inspirational__post img`,{
            interval:200
})
const dd = ScrollReveal({
  origin: 'bottom',
  distance: '0px',
  duration: 2000,
  reset: true
});
dd.reveal(`.saing__container img`,{
            interval:200
})


// Page slide bar

let NextPage = document.querySelector('.next');
let PreviousPage = document.querySelector('.previous');
let Items = document.querySelectorAll('.main__container');
let dot = document.querySelectorAll('.dot');
let count = 0;
console.log(dot);
function changeContent() {
  if(count > Items.length-1){
    count = 0;
  }
  else if(count < 0) {
    count = Items.length-1;
  }
    Items[count].classList.add('active');
    dot[count].style.backgroundColor = '#717171';
}
NextPage.addEventListener('click',function changeNext() {
  count++;
  Items[count-1].classList.remove('active');
  dot[count-1].style.backgroundColor = '#bbb';
  changeContent();
})
PreviousPage.addEventListener('click',function changeNext() {
  Items[count].classList.remove('active');
  dot[count].style.backgroundColor = '#bbb';
  count--;
  changeContent();
});
let interval = setInterval(run, 4000);

function run() {
  Items[count].classList.remove('active');
  dot[count].style.backgroundColor = '#bbb';
  count++;
  changeContent();
}

function resetInter() {
  clearInterval(interval);

  let interval = setInterval(run, 4000);
}

// Scroll HEader
function scrollHeader() {
  const nav = document.querySelector('.header');

  if(this.scrollY >= 200) {
    nav.classList.add('scroll-header');
    nav.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
  }
  else {
    nav.classList.remove('scroll-header');
  }
}

window.addEventListener('scroll', scrollHeader);

// show scroll top
function scrollTop() {
  const scrollTop = document.getElementById('scroll-top');

  if(this.scrollY >= 360){
    scrollTop.classList.add('show-scroll');
  }
  else{
    scrollTop.classList.remove('show-scroll');
  }
}
window.addEventListener('scroll',scrollTop);

console.log(window.innerWidth);