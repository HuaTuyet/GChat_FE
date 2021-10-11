import { useState, Fragment } from 'react';
import classes from './Tabs.module.css';
import TabItem from './TabItem';
import TabSetting from '../chatroom/TabSetting';
import TabMember from '../chatroom/TabMember';

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

            {tabActive === 1 && (
                <TabSetting/>
            )}

            {tabActive === 2 && (
                <TabMember/>
            )}
        </Fragment>
    );
  }
  
export default Tabs;