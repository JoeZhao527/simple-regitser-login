const firstname = document.getElementById('first-name');
const lastname = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('diner-reg');
const back_btn = document.getElementById('back-home');

back_btn.addEventListener('click', function() {
    window.location.href = '/';
});

form.addEventListener('submit', function(e) {
    e.preventDefault()
    if (checkInput() === true) {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', '/diner_register', true)
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = function() {
            sessionStorage.setItem('diner_name', this.response);
            window.location.href = '/'
        }
        xhr.send(makeJson())
    }
});

function checkInput(){
    if (firstname.value===``||
        lastname.value===``||
        email.value===``||
        password.value===``
    ) {
        return false
    }
    return true
}

function clearInput() {
    firstname.value=``
    lastname.value=``
    email.value=``
    password.value=``
    form.reset();
}

function makeJson() {
    let diner_info = `{"firstname":"${firstname.value}","lastname":"${lastname.value}","email":"${email.value}","password":"${password.value}"}`
    return diner_info
}