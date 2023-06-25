import './Header.css';
import Logo from '../../../assets/Logo.jpg';

const Header = () => {
    return (
        <div className='HeaderBox'>
            <a href='/'>
                <img 
                    src={Logo} 
                    alt="공지곰지 로고"
                    className='Logo'
                />
            </a>
        </div>
    );
}

export default Header;