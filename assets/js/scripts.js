const userInfoNavBarBtn = document.getElementById('userInfoNavBarBtn');
const sideMenuNavBarBtn = document.getElementById('sideMenuNavBarBtn');
const userInfoBtn = document.getElementById('userInfoBtn');
const sideMenuBtn = document.getElementById('sideMenuBtn');
const progressCircle1 = document.getElementById('progressCircle1');
const progressCircle2 = document.getElementById('progressCircle2');

userInfoNavBarBtn.addEventListener('click', () => {
    const userInfoBar = document.getElementById('userInfoBar');
    const sideMenu = document.getElementById('sideMenu');    

    userInfoBar.classList.toggle('active');

    if(sideMenu.classList.contains('active')){
        sideMenu.classList.toggle('active');
    }

    progressCircle1.classList.toggle('active');
    progressCircle2.classList.toggle('active');

    document.querySelectorAll('.skill-progress').forEach(function(i) {
        i.classList.toggle('active');
    });
});

sideMenuNavBarBtn.addEventListener('click', () => {
    const userInfoBar = document.getElementById('userInfoBar');
    const sideMenu = document.getElementById('sideMenu');

    sideMenu.classList.toggle('active');

    if(userInfoBar.classList.contains('active')){
        userInfoBar.classList.toggle('active');
    }

    progressCircle1.classList.remove('active');
    progressCircle2.classList.remove('active');

    document.querySelectorAll('.skill-progress').forEach(function(i) {
        i.classList.remove('active');
    });
});

userInfoBtn.addEventListener('click', () => {
    const userInfoBar = document.getElementById('userInfoBar');

    userInfoBar.classList.toggle('active');
    progressCircle1.classList.toggle('active');
    progressCircle2.classList.toggle('active');

    document.querySelectorAll('.skill-progress').forEach(function(i) {
        i.classList.toggle('active');
    });
});

sideMenuBtn.addEventListener('click', () => {
    const sideMenu = document.getElementById('sideMenu');

    sideMenu.classList.toggle('active');
});

function closeSideMenu(){
    const sideMenu = document.getElementById('sideMenu');

    sideMenu.classList.remove('active');
}

const pOption1 = document.getElementById('pOption1');
const pOption2 = document.getElementById('pOption2');

pOption1.addEventListener('click', () => {
    pOption1.classList.add('p-active');
    pOption2.classList.remove('p-active');
});

pOption2.addEventListener('click', () => {
    pOption1.classList.remove('p-active');
    pOption2.classList.add('p-active');
});

// Typewriting function

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ['Web Interfaces','Mobile applications','User Interfaces','Automation Tools'];
const typingDelay = 90;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if(charIndex < textArray[textArrayIndex].length){
    if(!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  }
  else{
    cursorSpan.classList.remove('typing');
    setTimeout(erase, newTextDelay);
  }
}

function erase(){
  if(charIndex > 0){
    if(!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  }
  else{
    cursorSpan.classList.remove('typing');
    textArrayIndex++;
    if(textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function(){
  if(textArray.length) setTimeout(type, newTextDelay);
});