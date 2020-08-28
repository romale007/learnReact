import React from "react";
import s from "./Navbar.module.css";        // создаёт объект s, в который передаются наши стили из МОДУЛЯ Navbar.module.css (слово module -обязательно!!)
                                            // использовать слово className вместо class !!
                                            // Метод предназначен для того, чтобы мы могли оспользовать одинаковые названия стилей для разных компонент 
                                            // таким образом у каждой компоненты будет свой модуль css, из которого передаются стили в объект в jsx файле
                                            // в ДОМе элемент будет выглядеть как-то так <div class="Navbar_item__2Din7">

import { NavLink } from "react-router-dom"; // Если оставить тег <a href> то будет дефолтное поведение ссылки с атрибутом href - при клике получим перезагрузку страницы
                                            // навЛинк - изменяет адресную строку браузера не перезагружая страницу (подсовывает путь без перезагрузки)
                                            // <a href="/profile">Profile</a> -  в DOM ссылка будет прописываться как раньше, но по факту
                                            // с помощью NavLink вешается EventListener на ссылку (роуты "слушают" путь) (History API (появился в HTML5)) 
                                            // и подменяет путь в строке и делает PreventDefault (отмена действия ссылки по умолчанию)


const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>

      {/*Атрибут activeClassName указывает на класс активной ссылки. Для этой цели в стилях веб-станицы определен класс activeLink. */}

        <NavLink to="/profile"  activeClassName={s.activeLink}>Profile</NavLink>    
      </div>
      <div className = {s.item}>
        <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
