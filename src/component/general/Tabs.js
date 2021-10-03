import { useState, Fragment } from 'react';
import classes from './Tabs.module.css';
import TabItem from './TabItem';
import TabSetting from '../chatroom/TabSetting';

const Tabs = (props) => {
    const [tabActive, setTabActive] = useState(1);

    const toggleTab = (index) => {
        setTabActive(index);
    };

    return (
        <Fragment>
            <ul className={`${classes.tabs} ${classes.TabChatRoom}`}>
                <TabItem 
                    active={tabActive === 1 ? "active" : ""} 
                    onChooseTab={toggleTab}
                    index={1}
                >SETTING</TabItem>
                <TabItem
                    active={tabActive === 2 ? "active" : ""} 
                    onChooseTab={toggleTab}
                    index={2}
                >MEMBER</TabItem>
            </ul>
            <TabSetting
                active={tabActive === 1 ? "active" : ""} 
                //index={1}
            />
        </Fragment>
    );
  }
  
export default Tabs;