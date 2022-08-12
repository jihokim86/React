import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';

const 체중 = 100;

//state 수정방법 
function reducer(state = 체중, action){
   if (action.type === '증가'){
      state++;
      return state
   }else if(action.type === '감소'){
      state--;
      return state
   }else{
    return state
   }
}

let store = createStore(reducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);