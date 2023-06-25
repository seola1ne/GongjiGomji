import Button from '../../components/Button/Button';
import Notice from '../../components/Notice/Notice';
import './Main.css';

const Main = () => {
    return (
        <div className='Container'>
            <div className='Notices'>
                <Notice />
            </div>
        </div>
    );
}

export default Main;