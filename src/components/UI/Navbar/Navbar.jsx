import React, {useContext} from 'react';
import {Link} from  'react-router-dom';
import MyButton from "../button/MyButton";
import {AuthContext} from "../../context";
import styles from './Navbar.module.css';
import Logo from "./logo.png"
const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth')
    }
    return (
        <div className={styles.navbar}>
            <img src={Logo} alt="логотип" style={{width: "18%", marginLeft: "40px"}}/>
            <div style={{justifyContent: "flex-end"}}>
                <Link to={'/about'} className={styles.link}>О сайте</Link>
                <Link to={'/posts'} className={styles.link}>Посты</Link>
                <MyButton className={styles.butt} onClick={() => logout()} style={{marginRight: '40px', height: '40px', width: '100px'}}>Выход</MyButton>
        <   /div>
        </div>
    );
};

export default Navbar;