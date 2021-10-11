///import classes from './TabMember.module.css';

import Member from './Member';

const TabMember = (props) => {

    return (
        <div>
            <Member name="kelvin"/>
            <Member name="admin"/>
            <Member name="brown"/>
        </div>
    );
  }
  
export default TabMember;