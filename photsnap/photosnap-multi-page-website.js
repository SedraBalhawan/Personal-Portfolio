let menu = document.getElementById('menu')
let storiesFearuresPricing = document.getElementById('stories-fearures-pricing')
let getAnInvite = document.getElementById('get-an-invite')
let snapper = document.getElementById('snapper')
let nav = document.getElementById('nav')
let getAnInvite2 = document.getElementById('get-an-invite2')
let close = document.getElementById('close')
menu.addEventListener('click', function(){
  storiesFearuresPricing.classList.toggle('active')
  getAnInvite.classList.toggle('active')
  getAnInvite2.classList.toggle('active')
  close.classList.add('active')
  menu.classList.add('active2')
})
close.addEventListener('click', function(){
  storiesFearuresPricing.classList.remove('active')
  getAnInvite.classList.remove('active')
  getAnInvite2.classList.remove('active')
  close.classList.remove('active')
  menu.classList.remove('active2')
})
