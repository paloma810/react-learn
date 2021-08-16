import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers'; 
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';


//アプリの中で唯一無二なものになる
//アプリ内部のstateはここに集約される
//外の全階層のコンポーネントで参照できる（引数にreducerを指定する）
const store = createStore(reduce)

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </Provider>
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
