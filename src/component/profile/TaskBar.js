import { MdClose } from "react-icons/md";
import { RiPencilLine } from "react-icons/ri";

import classes from './TaskBar.module.css';

function TaskBar() {
  return (
    <div className={classes.TaskBar}>
        <div className={classes.Icon}><MdClose style={{paddingTop: '5px'}}/></div>
        <div className={classes.Profile}>Profile</div>
        <div className={`${classes.Icon} ${classes.IconEdit}`}><RiPencilLine/></div>
    </div>
  );
}

export default TaskBar;
