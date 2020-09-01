import React from 'react'; //импорт реакт-модуля для работы с файлом
import ReactDOM from 'react-dom'; // модуль, который позволит работать с высокоуровневыми DOM-методами (render/hydrate/findDOMnode...)
import './index.css';
import App from './App'; //импорт приложения для единовременной загрузки приложения
import * as serviceWorker from './serviceWorker'; //  ?

let dialogsData = [
  { id: '1', name: 'Roman' },
  { id: '2', name: 'Pavel' },
  { id: '3', name: 'Victor' },
  { id: '4', name: 'Anna' },
];

let messagesData = [
  { id: '1', message: 'Hi' },
  { id: '2', message: 'How are u?' },
  { id: '3', message: 'Mm?' },
  { id: '4', message: 'A?' },
];

let postsData = [
  { id: '1', message: 'Hi, how are you?', likesCount: 1 },
  { id: '2', message: 'It\'s my first post........!', likesCount: 3 },
];


ReactDOM.render(   //  ?
  <React.StrictMode>
    <App  dialogsData={dialogsData} messagesData={messagesData} postsData={postsData} />
  </React.StrictMode>,
  document.getElementById('root')  //элемент реактДОМа с методом render помещается в элемент с id "root"
);




serviceWorker.unregister();  // ?
