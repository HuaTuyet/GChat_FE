import classes from './GroupItem.module.css';

import image from '../../images/image.png';

function GroupItem(props){
    return(
        <div className={classes.item}>
            <div className={classes.avatar}>
                <img src={image} alt="avatar"/>
            </div>
            <div className={classes.info}>
                <h4>{props.name}</h4>
                <p>&lt;last_message&gt;</p>
            </div>
        </div>
    );
};

export default GroupItem;