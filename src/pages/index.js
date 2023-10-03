import { getAsyncWeather, sky } from '@/redux/slice/sky.slice';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Home() {
  const dispatch = useDispatch();
  const weather = useSelector(sky)

  useEffect(() => {
    dispatch(getAsyncWeather());
  }, [dispatch])

  return (
    <div id="main">
      <div className="background">
        <img src="https://weather.p.kuldeep.tech/assets/day_bg-29e11b47.jpg" alt="Wallpaper" className="img-background" />
      </div>
      <div className="main-grid">
        <div style={{ opacity: 1 }}>
          <div className="content">
            <div className="principal">
              <div className="result">
                <h1 className="temperature">{weather.main?.temp} <span>ºC</span>
                </h1>
                <span className="local">Bursa, TR
                </span>
              </div>
              <div className="other-results">
                <div className="other">Avg Temp: <br />
                  <span>{(weather.main?.temp_min + weather.main?.temp_max) / 2} ºC</span>
                </div>
                <div className="other">Min Temp: <br />
                  <span>{weather.main?.temp_min} ºC</span>
                </div>
                <div className="other">Max Temp: <br />
                  <span>{weather.main?.temp_max} ºC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
