const back_btn = document.getElementById('back-home')
const form = document.getElementById('login-form');

back_btn.addEventListener('click', function() {
    window.location.href = '/';
});

form.addEventListener('submit', function(e) {
    e.preventDefault()
    if (email.value!==`` && password.value!==``) {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', '/login', true)
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = function() {
            if (this.response !== 'None'){
                sessionStorage.setItem('diner_name', this.response);
                document.getElementById('note').innerHTML = ''
                window.location.href = '/'
            }
        }
        xhr.send(`{"email":"${email.value}","password":"${password.value}"}`)
    }
    document.getElementById('note').innerHTML = 'login failed'
    setTimeout(function login_fail(){
        document.getElementById('note').innerHTML = ''
    }, 3000)
});
