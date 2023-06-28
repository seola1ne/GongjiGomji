import './Button.css';

const Button = ({Title, Type}) => {
    return (
        <div className='ButtonBox'>
            {Title}
        </div>
    );
}

export default Button;