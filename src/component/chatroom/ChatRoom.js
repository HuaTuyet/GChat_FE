import Layout from '../general/Layout';
import Tabs from '../general/Tabs';
import ChatHeader from './ChatHeader';

function ChatRoom() {
  return (
    <Layout>
        <ChatHeader/> 
        <Tabs tabsOf="chatroom"/>
    </Layout>
  );
}

export default ChatRoom;
