import classes from './Profile.module.css';

import Layout from '../general/Layout';
import Tabs from '../general/Tabs';
import TaskBar from './TaskBar';
import Avatar from './Avatar'
import Information from './Information';


function Profile() {
  return (
    <div className={classes.Profile}>
      <Layout>
        <TaskBar/>
        <Avatar/>
        <Information/>
        <Tabs tabsOf="profile"/>
      </Layout>
    </div>
      
  );
}

export default Profile;
