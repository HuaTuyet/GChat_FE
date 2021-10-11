import classes from './Member.module.css';
import image from '../../images/image.png';

import { MdKeyboardArrowRight } from "react-icons/md";

const Member = (props) => {

    return (
        <div className={classes.member}>
            <div className={classes.avatar}>
                <img src={image} alt="avatar"/>
            </div>
            <div className={classes.info}>
                <h4>{props.name}</h4>
                <p>0123456789</p>
            </div>
            <MdKeyboardArrowRight size={32} style={{opacity: 0.6}}/>
        </div>
    );
  }
  
export default Member;