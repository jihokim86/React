import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import loadable from '@loadable/component';
const SplitMe = loadable(() => import('./SplitMe'), {
    fallback: <div>loading...</div>
});
// loadable을 사용하는 부분을 수정하여 로딩 중에 다른 UI를 보여줌

function App() {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(true);
  };
  const onMouseOver = () => {
    SplitMe.preload();
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick} onMouseOver={onMouseOver}>
           Hello React!
        </p>
        {visible && <SplitMe />}
      </header>
    </div>
  );
}

export default App;