// client.js

document.getElementById('registerForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    try {
        const response = await fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        if (!response.ok) {
            throw new Error('회원가입에 실패했습니다.');
        }

        const data = await response.json();
        console.log('회원가입 성공:', data);
        alert('회원가입이 완료되었습니다.');
    } catch (error) {
        console.error('Error registering user:', error.message);
        alert('회원가입 중 오류가 발생했습니다.');
    }
});

document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        if (!response.ok) {
            throw new Error('로그인에 실패했습니다.');
        }

        const data = await response.json();
        console.log('로그인 성공:', data);
        alert('로그인 성공!');
    } catch (error) {
        console.error('Error logging in:', error.message);
        alert('로그인 중 오류가 발생했습니다.');
    }
});
