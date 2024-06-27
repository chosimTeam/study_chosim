function button_prompt() {
    // var user_name = prompt("너의 이름은?");
    // // var user_name = prompt("너의 이름은?", "몰라임마");
    // alert(`${user_name} 입니닼ㅋㅋ`);
    // console.log(user_name);

    var password = confirm("비밀번호 입력");
    // alert(password);
    if (password) { alert("접속했다."); }
    else { alert("나가"); }
}

button_prompt();
        