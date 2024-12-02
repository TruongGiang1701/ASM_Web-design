function handleSignUp(event) {
  event.preventDefault(); 

  // Lấy dữ liệu 
  const name = document.getElementById('signup-name').value;
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;

  // Lấy danh sách người dùng hiện có từ Local Storage
  const users = JSON.parse(localStorage.getItem('users')) || [];

  // Kiểm tra xem email đã tồn tại hay chưa
  const userExists = users.some(user => user.email === email);
  if (userExists) {
      const message = document.getElementById('signup-message');
      message.innerText = 'Email already exists. Please use a different email.';
      message.style.color = 'red';
      return;
  }

  // Lưu người dùng mới
  const newUser = { name, email, password };
  users.push(newUser);
  localStorage.setItem('users', JSON.stringify(users));

  // Hiển thị thông báo đăng ký thành công
  const message = document.getElementById('signup-message');
  message.innerText = 'Sign-up successful! You can now log in.';
  message.style.color = 'green';
  
  // Lưu thông tin người dùng đang đăng nhập
  localStorage.setItem('loggedInUser', JSON.stringify(newUser)); 

}
