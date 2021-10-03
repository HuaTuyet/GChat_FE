import './App.css';

import ChatRoom from './component/chatroom/ChatRoom';
import Profile from './component/profile/Profile';

function App() {
  return (
    <div className="App">
      <ChatRoom/>
      <div style={{marginRight: '10px'}}></div>
      <Profile/>
    </div>
  );
}

export default App;
