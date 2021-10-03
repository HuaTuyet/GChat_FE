import classes from './Layout.module.css';
// import ChatHeader from '../chatroom/ChatHeader';
// import Tabs from './Tabs';

const Layout = (props) => {
    return (
      <div className={classes.layout}> 
        {/* // <ChatHeader/> 
        // <Tabs/> */}
        {props.children}
      </div>
    );
  }
  
export default Layout;
  