let box1 = document.getElementById('box1');
let box2 = document.getElementById('box2');
let appName = document.getElementById('appName');
let appImg = document.getElementById('appImg');
let dev = document.getElementById('dev');
let dat = document.getElementById('dt');
let about = document.getElementById('about');
let link = document.getElementById('link');
let rate = document.getElementById('rate');
let rates = document.getElementById('rates');
let bb2 = document.getElementById('bb2');

function back(){
  box1.style.display = 'block';
  box2.style.display = 'none';
}

function rfb(){
  box1.style.display = 'none';
  box2.style.display = 'block';
  appName.innerHTML = 'Receipt For Brazil';
  appImg.src = 'brazil-flag-wall-art.jpg';
  dev.innerHTML = 'Brazil limited';
  dat.innerHTML = 'dec 3, 2023';
  about.innerHTML = 'Create fake updated  lastest visions of Brazil Receipts.';
  rate.innerHTML = '4.8';
  rates.innerHTML = '547,621';
  link.href = 'receipt.html'; 
  bb2.innerHTML = "contain ads";
}

function nud(){
  box1.style.display = 'none';
  box2.style.display = 'block';
  appName.innerHTML = 'NU Bank Crediting';
  appImg.src = 'nu-icon.png';
  dev.innerHTML = 'Brazil limited';
  dat.innerHTML = 'dec 7, 2023';
  about.innerHTML = 'Use your android phone to do iphone crediting.';
  rate.innerHTML = '5.0';
  rates.innerHTML = '899,533'
  link.href = 'crediting.html'; 
  bb2.innerHTML = "contain ads";
}

function cfb(){
  box1.style.display = 'none';
  box2.style.display = 'block';
  appName.innerHTML = 'Instagram store';
  appImg.src = '/img/1684486560967.jpg';
  dev.innerHTML = 'business limited';
  dat.innerHTML = 'dec 9, 2023';
  about.innerHTML = 'buy ig account in a very cheap rate, you can also sell in a very high rate.';
  rate.innerHTML = '5.0';
  rates.innerHTML = '999,994'
  link.href = 'https://g-gifted.github.io/g-home/g-home.html'; 
  bb2.innerHTML = "no ads";
}
