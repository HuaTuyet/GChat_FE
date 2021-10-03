import { MdArrowBack } from "react-icons/md";
import classes from './ChatHeader.module.css';

function ChatHeader() {
    return (
        <div className={classes.chatheader}>  
            <div className={classes.ArrowBack}><MdArrowBack/></div>
            <div className={classes.blackbox}></div>   
        </div>
    );
  }
  
export default ChatHeader;