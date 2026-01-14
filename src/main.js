const form = document.getElementById('registerForm')
const successMessage = document.getElementById('successMessage')

form.addEventListener('submit', (event) => {
  event.preventDefault()       
  form.reset()                  
  successMessage.classList.remove('d-none') 
})
