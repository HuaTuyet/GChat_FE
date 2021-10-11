import classes from './InputText.module.css';

const InputText = (props) => {
    return (
        <input 
            type="text" 
            placeholder={props.placeholder}
            defaultValue={props.defaultValue}
        />
    );
};

export default InputText;