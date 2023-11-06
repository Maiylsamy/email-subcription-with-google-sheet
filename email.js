const scriptURL = 'https://script.google.com/macros/s/AKfycbw17mKVYFOXNWFftPOPc8uinvwEVgNl8TChkFmVpjnN0b-TGqE3fleiFBmL5prwXi4/exec'
const form = document.forms['submit-to-google-sheet']
const msg=document.querySelector(".subscribe");

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response =>{ msg.innerHTML="thanks you for subscribing!"
    setTimeout(function(){msg.innerHTML=""},5000)
    form.reset()}
    )
    .catch(error => console.error('Error!', error.message))
})