import React from 'react'
import './Footer.scss';


const Footer = () => {
  return (
    <footer className='footer'>
      <a className='footer-logo' href="/">
        <img src="/logo.svg" alt="logo" />
      </a>
      <div className='info'>
        <div className='info-links info-links-pages'>
          <img className='info-links-icon' src="/Icons/vector.svg" alt="vector" />
          <div className='info-links-topics'>
            <p className='info-links-topics-topic'>Сторінки</p>
            <p className='info-links-topics-text'>Про нас</p>
            <p className='info-links-topics-text'>Про сервіс</p>
            <p className='info-links-topics-text'>FAQ</p>
            <p className='info-links-topics-text'>Команда</p>
          </div>
        </div>
        <div className='info-links'>
          <img className='info-links-icon' src="/Icons/vector.svg" alt="vector" />
          <div className='info-links-topics'>
            <p className='info-links-topics-topic'>Контакти</p>
            <a className='info-links-topics-contacts' href="/">
              <img className='info-links-icon' src="/Icons/map-pin.svg" alt="map" />
              <p className='info-links-topics-contacts-text'>Київ-03188</p>
            </a>
            <a className='info-links-topics-contacts' href="/">
              <img className='info-links-icon' src="/Icons/mail.svg" alt="mail" />
              <p className='info-links-topics-contacts-text'>moow.ltd@gmail.com</p>
            </a>
            <a className='info-links-topics-contacts' href="/">
              <img className='info-links-icon' src="/Icons/telegram.svg" alt="telegram" />
              <p className='info-links-topics-contacts-text'>telegram</p>
            </a>
            <a className='info-links-topics-contacts' href="/">
              <img className='info-links-icon' src="/Icons/viber.png" alt="viber" />
              <p className='info-links-topics-contacts-text'>viber</p>
            </a>
          </div>
        </div>
        <div className='info-links'>
          <img className='info-links-icon' src="/Icons/vector.svg" alt="vector" />
          <div className='info-links-topics'>
            <p className='info-links-topics-topic'>Соціальні мережі</p>
            <div className='info-links-topics-socials'>
              <a className='info-links-topics-socials-social' href="/">
                <img className='info-links-icon' src="/Icons/facebook.svg" alt="facebook" />
              </a>
              <a className='info-links-topics-socials-social' href="/">
                <img className='info-links-icon' src="/Icons/instagram.svg" alt="instagram" />
              </a>
              <a className='info-links-topics-socials-social' href="/">
                <img className='info-links-icon' src="/Icons/youtube.svg" alt="youtube" />
              </a>
            </div>
          </div>
        </div>
        <div className='info-links'>
          <img className='info-links-icon' src="/Icons/vector.svg" alt="vector" />
          <div className='info-links-topics'>
            <p className='info-links-topics-topic info-links-topics-topic-docs'>Документи</p>
          </div>
        </div>
        <div className='info-payApp'>
          <p className='info-payApp-text'>Встанови безкоштовний додаток на смартфон</p>
          <div className='info-payApp-download'>
            <img className='info-payApp-download-img' src="/Images/google-store.png" alt="google-store" />
            <img className='info-payApp-download-img' src="/Images/app-store.png" alt="app-store" />
          </div>
          <div className='info-payApp-payPall'>
            <img className='info-payApp-payPall-img' src="/Images/visa.png" alt="visa" />
            <img className='info-payApp-payPall-img' src="/Images/mastercard.png" alt="mastercard" />
            <img className='info-payApp-payPall-img info-payApp-payPall-img-liq' src="/Images/liqpay.png" alt="liqpay" />
          </div>
        </div>
      </div>
      <p className='rights'>©ТОВ «Діджітал інвест адвайзор», 2021-2023</p>
    </footer>
  )
}

export default Footer