import * as React from "react"

import '../../styles/components/firstSlide/chart.scss'

import rhomb from '../../images/chart-bg-rhomb.svg'
import points from '../../images/points.svg'
import ellipse from '../../images/Ellipse.svg'
import ellipseBlurred from '../../images/Ellipse-blurred.svg'
import downArrow from '../../images/down-arrow.svg'
import user_default from '../../images/user_default.jpg'

const Chart = () => {

  const data = [
    { name: 'Патрик', number: 7805.99, src: user_default },
    { name: 'Стив', number: 7403.87, src: user_default },
    { name: 'Анна', number: 6844.05, src: user_default },
    { name: 'Александр', number: 5985.84, src: user_default },
    { name: 'Полина', number: 5884.32, src: user_default }
  ]

  return (
    <div className="wrap-chart">
      {/* Данные */}
      {data.map((item, i) => (
        <div className={`item  ${i ? '' : 'first-num'}`} key={`${item.name}-${i}`}>
          <span className={`serial-number ${i ? '' : `first-num`}`}><span>{i + 1}</span></span>
          <img className="avatar" src={item.src} alt="avatar" />
          <div>
            <span className='name' children={item.name} />
            <div className='line-bg'>
              <div className='line-bg-inner' />
            </div>
          </div>
          <span className='number' children={item.number} />
        </div>
      ))}

      <button className="btn">Обновить</button>
      <img alt="rhomb" className="rhomb" src={rhomb} />
      <i className="bg-line n-1" />
      <i className="bg-line n-2" />
      <i className="bg-line n-3" />
      <img alt="points" className="points" src={points} />
      <img alt="down-arrow" className="down-arrow" src={downArrow} />
      <img alt="ellipse" className="ellipse" src={ellipse} />
      <img alt="ellipse-blurred" className="ellipse-blurred" src={ellipseBlurred} />
    </div>
  )
}

export default Chart