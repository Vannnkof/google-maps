import React from 'react'
import './Main.scss';
import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

new AirDatepicker('#calendar');

const Main = () => {
  return (
    <main className='main'>
      <h1 className='main-title'>Замовити</h1>
      <form action="" className='form'>
        <div className='form-points'>
          <h2 className='form-title'>Маршрут</h2>
          <div className='form-points-point'>
            <h3 className='form-points-point-title'>Точка A</h3>
            <div className='form-points-point-data'>
              <div className='form-points-point-data-info'>
                <p className='form-points-point-data-info-title'>Дата</p>
                <div className='form-points-point-data-info-input'>
                  <input type="text" id='calendar' />
                </div>
              </div>
              <div className='form-points-point-data-info'>
                <p className='form-points-point-data-info-title'>Час роботи (год)</p>
                <div className='form-points-point-data-info-input'></div>
              </div>
              <div className='form-points-point-data-info'>
                <p className='form-points-point-data-info-title'>Адреса</p>
                <div className='form-points-point-data-info-input'></div>
              </div>
              <div className='form-points-point-data-info'>
                <p className='form-points-point-data-info-title'>Час прибуття</p>
                <div className='form-points-point-data-info-input'></div>
              </div>
            </div>
          </div>
        </div>
        <div className='form-map'></div>
      </form>
    </main>
  )
}

export default Main