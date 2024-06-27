// server.js
import express from 'express';
import bodyParser from 'body-parser';
import mysql from 'mysql2/promise';
import bcrypt from 'bcrypt'
// const express = require('express');
// const bodyParser = require('body-parser');
// const mysql = require('mysql2/promise');
// const bcrypt = require('bcrypt');
const saltRounds = 10;

const app = express();
const PORT = 3000;

// MySQL 연결 설정
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'qor100',
    database: 'auth_example',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Body-parser 설정
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 회원가입 API
app.post('/register', async (req, res) => {
    const { username, password } = req.body;

    try {
        // 비밀번호 암호화
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // MySQL 쿼리 실행
        const connection = await pool.getConnection();
        const [result] = await connection.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword]);
        connection.release();

        console.log(`사용자 ${username}이(가) 회원가입했습니다.`);
        res.json({ message: '회원가입 성공' });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: '회원가입 중 오류 발생' });
    }
});

// 로그인 API
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        // MySQL에서 사용자 정보 조회
        const connection = await pool.getConnection();
        const [results] = await connection.query('SELECT * FROM users WHERE username = ?', [username]);
        connection.release();

        if (results.length === 0) {
            throw new Error('사용자를 찾을 수 없습니다.');
        }

        // 비밀번호 비교
        const user = results[0];
        const match = await bcrypt.compare(password, user.password);

        if (!match) {
            throw new Error('비밀번호가 일치하지 않습니다.');
        }

        console.log(`사용자 ${username}이(가) 로그인했습니다.`);
        res.json({ message: '로그인 성공' });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(401).json({ error: '로그인 실패' });
    }
});

// 서버 시작
app.listen(PORT, () => {
    console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
