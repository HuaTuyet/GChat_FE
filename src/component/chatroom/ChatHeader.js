import { MdArrowBack } from "react-icons/md";
import classes from './ChatHeader.module.css';
import image from '../../images/image.png';

function ChatHeader() {
    return (
        <div className={classes.chatheader}>  
            <div className={classes.ArrowBack}><MdArrowBack/></div>
            <div className={classes.blackbox}>
                <img src={image} alt="img"/>
            </div>   
        </div>
    );
  }
  
export default ChatHeader;