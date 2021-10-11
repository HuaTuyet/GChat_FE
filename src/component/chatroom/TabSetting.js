import classes from './TabSetting.module.css';

import InputText from '../general/InputText';
import Button from '../general/Button';

const TabSetting = (props) => {
    
    return (
        <div className={classes.tab}>
            <form>
                <div className={classes.GroupBox}>
                    <label htmlFor="groupname">Group name</label>
                    <InputText defaultValue="Admin Group 2"/>
                </div>
                <div className={classes.OnOffBox}>
                    <p>Mute all</p>
                    <label className={classes.switch}>
                        <input type="checkbox" />
                        <span className={`${classes.slider} ${classes.round}`}></span>
                    </label>
                </div>
                {/* <button type="submit">UPDATE</button> */}
                <Button>UPDATE</Button>
            </form>
        </div>
    );
  }
  
export default TabSetting;