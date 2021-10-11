import classes from './Button.module.css';

const Button = (props) => {
    return (
        <button type="submit">{props.children}</button>
    );
};

export default Button;