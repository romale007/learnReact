import React from "react";                            //импорт реакт-модуля для работы с файлом
//import logo from "./logo.svg";
import "./App.css";                                   //импорт общих стилей для SPA
import Header from "./components/Header/Header";      //импорт компонентов (хедера)
import Navbar from "./components/Navbar/Navbar";      //импорт компонентов
import Profile from "./components/Profile/Profile";   //импорт компонентов
import Dialogs from "./components/Dialogs/Dialogs";   //импорт компонентов
import News from "./components/News/News";            //импорт компонентов
import Music from "./components/Music/Music";         //импорт компонентов
import Settings from "./components/Settings/Settings";//импорт компонентов
import { Route, BrowserRouter } from "react-router-dom";//импорт модуля роутинга для анализа пути в в строке браузера и вставки компонента нужного пути
                                                          // C помощью компоненты <Route path="/dialogs" component = {Dialogs}/>


// <BrowserRouter> // попадая в компоненту App.js мы устанавливаем, что всё приложение будет "под властью" модуля <BrowserRouter>
//   <div className="app-wrapper"> // передаём класc app-wrapper для всего приложения из файла App.css (применяем грид тут)
//   <Header />
//   <Navbar />
//   <div className="app-wrapper-content"> передаём класc для "контента"
//     <Route path="/dialogs" component = {Dialogs}/> // => когда path = /dialogs, "бери" компоненту Dialogs
//     <Route path="/profile" component = {Profile}/> // => ...
//     <Route path="/news" component = {News}/>       // => ...
//     <Route path="/music" component = {Music}/>     // => ...
//     <Route path="/settings" component = {Settings}/>// => ...
//   </div>
// </div>
//  </BrowserRouter>
//
//  Здесь будет использоваться более "продвинутый" роутинг. Для этого будем использовать NavLink в Navbar.js



const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">

          {/* Роуты "слушают" изменения в адресной строке*/}

          <Route exact path="/dialogs" render={() =>  <Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData} />} />
          <Route path="/profile" render={() => <Profile postsData={props.postsData} />} />

          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
