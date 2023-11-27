import React, { useState } from 'react'
import Datepicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.module.css';
import './Main.scss';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

const Main = () => {
  const [selectedDate, setDate] = useState(null);
  const [value, setValue] = useState(null);

  return (
    <main className='main'>
      <h1 className='main-title'>Замовити</h1>
      <form action="" className='form'>
        <div className='form-points'>
          <h2 className='form-title'>Маршрут</h2>
          <div className='form-points-point'>
            <h3 className='form-points-point-title'>Точка A</h3>
            <div className='form-points-point-data'>
              <div className='form-points-point-data-wrapper'>
                <div className='form-points-point-data-info'>
                  <p className='form-points-point-data-info-title'>Дата</p>
                  <div className='form-points-point-data-info-input'>
                    <label>
                      <div>
                        <img className='calendar-img' src="/Icons/calendar.svg" alt="calendar" />
                        <Datepicker type="text" className='text-info' selected={selectedDate} onChange={date => setDate(date)} dateFormat="d.M.yy" />
                      </div>
                    </label>
                  </div>
                </div>
                <div className='form-points-point-data-info'>
                  <p className='form-points-point-data-info-title'>Адреса</p>
                  <div className='form-points-point-data-info-input'>
                    <GooglePlacesAutocomplete
                      apiKey={process.env.NEXT_PUBLIC_API_KEY}
                      selectProps={{
                        value,
                        onChange: setValue,
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className='form-points-point-data-wrapper'>
                <div className='form-points-point-data-info'>
                  <p className='form-points-point-data-info-title'>Час роботи (год)</p>
                  <div className='form-points-point-data-info-input'>
                    <input className='text-info text-info-workTime' type="text" />
                  </div>
                </div>
                <div className='form-points-point-data-info'>
                  <p className='form-points-point-data-info-title'>Час прибуття</p>
                  <div className='form-points-point-data-info-input'>
                    <input className='text-info text-info-arriveTime' type="text" />
                  </div>
                </div>
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