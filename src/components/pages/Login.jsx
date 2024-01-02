import React, {useContext} from 'react';
import MyButton from "../UI/button/MyButton";
import MyInput from "../UI/input/MyInput";
import {AuthContext} from "../context";
const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const login = (e) => {
        e.preventDefault()
        setIsAuth(true);
        localStorage.setItem('auth', 'true')
    }

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <h1>Страница авторизации</h1>
            <form style={{display: "flex", flexDirection: "column", alignItems: "center"}} onSubmit={login}>
                <MyInput type="text" placeholder="Введите логин"/>
                <MyInput type="password" placeholder="Введите пароль"/>
                <MyButton>Войти</MyButton>
            </form>
        </div>
    );
};

export default Login;