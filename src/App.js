import React, {useEffect} from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import About from './components/pages/About';
import Posts from './components/pages/Posts';
import Navbar from './components/UI/Navbar/Navbar';
import PostIdPage from "./components/pages/PostIdPage";
import Login from "./components/pages/Login";
import { AuthContext } from "./components/context/index";
const App = () => {
    const [isAuth, setIsAuth] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(true);
    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true);
        }
        setIsLoading(false);
    }, []);

    if (isLoading) {
        return <div>Загрузка...</div>;
    }

    return (
        <AuthContext.Provider value={{
                isAuth,
                setIsAuth,
                isLoading
        }}>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    {isAuth ? (
                        <>
                            <Route path="/about" element={<About />} />
                            <Route path="/posts" element={<Posts />} />
                            <Route path="/posts/:id" element={<PostIdPage />} />
                            <Route path="*" element={<Navigate to="/posts" />} />
                        </>
                    ) : (
                        <>
                            <Route path="/login" element={<Login />} />
                            <Route path="*" element={<Navigate to="/login" />} />
                        </>
                    )}
                </Routes>
            </BrowserRouter>
        </AuthContext.Provider>
    );
};

export default App;
