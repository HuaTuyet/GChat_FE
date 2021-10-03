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
            {props.tabsOf === 'profile' && (
                <Fragment>
                <ul className={`${classes.tabs} ${classes.TabProfile}`}>
                    <TabItem 
                        active={tabActive === 1 ? "active" : ""} 
                        onChooseTab={toggleTab}
                        index={1}
                    >Media</TabItem>
                    <TabItem
                        active={tabActive === 2 ? "active" : ""} 
                        onChooseTab={toggleTab}
                        index={2}
                    >Files</TabItem>
                    <TabItem
                        active={tabActive === 3 ? "active" : ""} 
                        onChooseTab={toggleTab}
                        index={3}
                    >Links</TabItem>
                    <TabItem
                        active={tabActive === 4 ? "active" : ""} 
                        onChooseTab={toggleTab}
                        index={4}
                    >Music</TabItem>
                    <TabItem
                        active={tabActive === 5 ? "active" : ""} 
                        onChooseTab={toggleTab}
                        index={5}
                    >Voice</TabItem>
                </ul>
                <div></div>
                </Fragment>
            )}

            {props.tabsOf === 'chatroom' && (
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
            )}
        </Fragment>
    );
  }
  
export default Tabs;