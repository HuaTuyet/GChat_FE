//import { useState, Fragment } from 'react';
import classes from './TabItem.module.css';

const TabItem = (props) => {
  const active = props.active;
  const index = props.index;

  const toggleTab = () => {
    props.onChooseTab(index);
  };

    return (
        <li 
          className={`${active && classes.active}`}
          onClick={toggleTab}
        >{props.children}</li>
    );
  }
  
export default TabItem;