import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {

  const 꺼내온거 = useSelector( (state) => state );
  //컴포넌트에서 state를 수정 요청하려면 dispatch를 사용함.
  const dispatch = useDispatch()

  return (
    <div className="App">
      <p>님의 처참한 몸무게  : {꺼내온거} </p>
      <button onClick={()=>{ dispatch({type : '증가'})}}>더하기</button>      
    </div>
  );
};

export default App;