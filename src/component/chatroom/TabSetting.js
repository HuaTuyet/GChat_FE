//import { useState } from 'react';
import classes from './TabSetting.module.css';

const TabSetting = (props) => {
    const activeContent = props.active;

    return (
        <div className={`${activeContent ? classes.tab : classes.hidden}`}>
            <form>
                <div className={classes.GroupBox}>
                    <label htmlFor="groupname">Group name</label>
                    <input type="text" defaultValue="Admin Group 2" id="groupname"/>
                </div>
                <div className={classes.OnOffBox}>
                    <p>Mute all</p>
                    <label className={classes.switch}>
                        <input type="checkbox" />
                        <span className={`${classes.slider} ${classes.round}`}></span>
                    </label>
                </div>
                <button type="submit">UPDATE</button>
            </form>
        </div>
    );
  }
  
export default TabSetting;