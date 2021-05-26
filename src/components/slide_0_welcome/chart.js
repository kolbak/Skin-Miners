import * as React from "react"

import '../../styles/components/slide_0_welcome/chart.scss'
import "../../styles/components/slide_0_welcome/slide_0_mobile.scss";

import user_default from '../../images/slide_0_welcome/user_default.jpg'

const data = [
  { name: 'Патрик', number: 7805.99, src: user_default },
  { name: 'Стив', number: 7403.87, src: user_default },
  { name: 'Анна', number: 6844.05, src: user_default },
  { name: 'Александр', number: 5985.84, src: user_default },
  { name: 'Полина', number: 5884.32, src: user_default }
]

const Chart = ({ screenWidth }) => (<div className="wrap-chart">
  {screenWidth > 991 &&
    <div id="chart">
      {data.map((item, i) => (
        <div className={`item  ${i ? '' : 'first-num'}`} key={`${item.name}-${i}`}>
          <span className={`serial-number ${i ? '' : `first-num`}`}><span>{i + 1}</span></span>
          <img className="avatar" src={item.src} alt="avatar" />
          <div>
            <span className='name' children={item.name} />
            <div className='line-bg' children={<div className='line-bg-inner' />} />
          </div>
          <span className='number' children={item.number} />
        </div>
      ))}
    </div>}
  <button className="btn" children={"Обновить"} />
</div>)

export default Chart