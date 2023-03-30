let user = document.getElementById('user')
let gmail = document.getElementById('gmail')
let password = document.getElementById('password')
let password1 = document.getElementById('password1')
let form = document.getElementById('form')

form.onsubmit = function(e){
    if(user.value === ''){
        alert('dsdas')
        preventDefault(e)
    }
}

