const sign_up_btn = document.getElementById("sign-up");
const login_btn = document.getElementById("login");
const logout_btn = document.getElementById("log-out");

login_btn.addEventListener('click', function() {
    window.location.href = '/login';
});

sign_up_btn.addEventListener('click', function() {
    window.location.href = '/diner_register'
});

logout_btn.addEventListener('click', function(){
    sessionStorage.removeItem('diner_name')
    load_page()
});

function load_page() {
    let diner_name = sessionStorage.getItem('diner_name')
    console.log(diner_name)
    
    if (diner_name === null) {
        document.getElementById('msg').innerHTML = ` Welcome to Value Eat!`;
        logout_btn.style.display = 'none'
        login_btn.style.display = 'inline';
        sign_up_btn.style.display = 'inline';
    } else {
        document.getElementById('msg').innerHTML = diner_name + ` Welcome to Value Eat!`
        login_btn.style.display = 'none';
        sign_up_btn.style.display = 'none';
        logout_btn.style.display = 'inline';
    }
}

load_page()