import './Header.css';
import Logo from '../../../assets/Logo.jpg';
import { db, authService } from "../../../firebase";
import { collection, connectFirestoreEmulator, getDocs } from "firebase/firestore";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from 'react';
import { useEffect } from 'react';

const Header = () => {
    const [user, setUser] = useState(null);

    const handleGoogleLogin = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(authService, provider)
            .then((result) => {
                const user = result.user;
                setUser(user);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleLogout = () => {
        authService
        .signOut()
        .then(() => {
            setUser(null);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    return (
        <div className='HeaderBox'>
            <a href='/'>
                <img 
                    src={Logo} 
                    alt="공지곰지 로고"
                    className='Logo'
                />
            </a>
            {user ? (
                <div>
                    <button className='Btn LogoutBtn' onClick={handleLogout}>
                        로그아웃
                    </button>
                </div>
            ) : (
                <div>
                    <button className='Btn LoginBtn' onClick={handleGoogleLogin}>
                        로그인
                    </button>
                </div>
            )}
        </div>
    );
}

export default Header;