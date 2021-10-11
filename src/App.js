//import './App.css';

import ChatRoom from './component/chatroom/ChatRoom';
import AdminGroup from './component/create-admin-group/AdminGroup';
import List from './component/list-chatroom/List';

function App() {
  return (
    <div className="App">
      <ChatRoom/>
      <hr/>
      <AdminGroup/>
      <hr/>
      <List/>
    </div>
  );
}

export default App;
