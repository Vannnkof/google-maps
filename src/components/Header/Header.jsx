import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header className='header'>
      <a className='logo' href="/">
        <img src="/logo.svg" alt="logo" />
      </a>
      <button className='Category'>
        <span className='Category-text'>Категорії</span>
      </button>
      <div className='search'>
        <input className='search-input' type="text" />
        <img className='search-img' src="/Icons/search.svg" alt="search" />
      </div>
      <button className='create'>
        <span className='create-text'>Створити оголошення</span>
      </button>
      <a className='navigate-icon' href="/">
        <img src="/Icons/message-square.svg" alt="message" />
      </a>
      <a className='navigate-icon' href="/">
        <img src="/Icons/domiki.svg" alt="domiki" />
      </a>
      <a className='navigate-icon' href="/">
        <div className='navigate-icon-notification'></div>
        <img src="/Icons/user.svg" alt="user" />
      </a>
      <a className='navigate-icon' href="/">
        <div className='navigate-icon-notification'></div>
        <img src="/Icons/bell.svg" alt="bell" />
      </a>
      <a className='navigate-icon' href="/">
        <div className='navigate-icon-notification'></div>
        <img src="/Icons/more-horizontal.svg" alt="more" />
      </a>
      <div className='language'>
        <p className='language-text'>УКР</p>
        <img className='language-img' src="/Icons/chevron-down.svg" alt="language" />
      </div>
    </header>
  )
}

export default Header;
