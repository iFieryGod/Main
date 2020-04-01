'use strict'

let mainlist = document.querySelector('#product');
let enqBtn = document.querySelector('#enquire4');


let sen1 = document.createElement('p');
let theX = document.createElement('div');
let btn = document.createElement('button');

enqBtn.addEventListener('click', function(){
let message = document.createTextNode('Hello');
btn.setAttribute('id', 'escapeBtn');
btn.classList.add('close', 'm-3');
theX.classList.add('float-left', 'mx-3'); 
btn.appendChild(sen1);
sen1.appendChild(message);
theX.appendChild(btn);
mainlist.appendChild(theX);
console.log(sen1)

})




