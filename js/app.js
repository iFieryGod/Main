'use strict'

let ele1 = document.querySelector('#product');
let ele2 = document.querySelector('#price');
let ele3 = document.querySelector('#quantity');
let ele4 = document.querySelector('#total');
let ele5 = document.querySelector('#subtitle');
let ele6 = document.querySelector('#vat');
let ele7 = document.querySelector('#addCart1');
let ele8 = document.querySelector('#addCart2');
let ele9 = document.querySelector('#addCart3');
let ele10 = document.querySelector('#cartPic');
let ele11 = document.querySelector('#enquire1');
let ele12 = document.querySelector('#enquire2');
let ele13 = document.querySelector('#enquire3');

ele11.addEventListener('click',function(){
  console.log('click');
  ele10.classList.add('d-block');
})

ele12.addEventListener('click',function(){
  console.log('click');
  ele10.classList.add('d-block');
})

ele13.addEventListener('click',function(){
  console.log('click');
  ele10.classList.add('d-block');
})


ele7.addEventListener('click',function(){
  console.log('click');
  ele10.classList.add('d-block');
})

ele8.addEventListener('click',function(){
  console.log('click');
  ele10.classList.add('d-block');
})

ele9.addEventListener('click',function(){
  console.log('click');
  ele10.classList.add('d-block');
})
