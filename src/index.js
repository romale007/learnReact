import React from 'react'; //импорт реакт-модуля для работы с файлом
import ReactDOM from 'react-dom'; // модуль, который позволит работать с высокоуровневыми DOM-методами (render/hydrate/findDOMnode...)
import './index.css';
import App from './App'; //импорт приложения для единовременной загрузки приложения
import * as serviceWorker from './serviceWorker'; //  ?
import state from './redux/state';


ReactDOM.render(   //  ?
  <React.StrictMode>
    <App  state={state} />
  </React.StrictMode>,
  document.getElementById('root')  //элемент реактДОМа с методом render помещается в элемент с id "root"
);




serviceWorker.unregister();  // ?
