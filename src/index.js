import React from 'react'; //импорт реакт-модуля для работы с файлом
import ReactDOM from 'react-dom'; // модуль, который позволит работать с высокоуровневыми DOM-методами (render/hydrate/findDOMnode...)
import './index.css'; 
import App from './App'; //импорт приложения для единовременной загрузки приложения
import * as serviceWorker from './serviceWorker'; //  ?

ReactDOM.render(   //  ?
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')  //элемент реактДОМа с методом render помещается в элемент с id "root"
);

serviceWorker.unregister();  // ?
