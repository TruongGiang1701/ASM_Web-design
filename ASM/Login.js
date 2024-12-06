function handleLogin(event) {
    event.preventDefault(); 
  
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Lấy danh sách người dùng từ Local Storage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Kiểm tra thông tin đăng nhập
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        window.location.href = 'Menu.html';
    } else {
        const message = document.getElementById('login-message');
        message.innerText = 'Incorrect email or password!';
        message.style.color = 'red';
    }
}
