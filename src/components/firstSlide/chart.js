import * as React from "react"

import '../../styles/components/chart.scss'

import rhomb from '../../images/chart-bg-rhomb.svg'
import points from '../../images/points.svg'
import ellipse from '../../images/Ellipse.svg'
import ellipseBlurred from '../../images/Ellipse-blurred.svg'
import downArrow from '../../images/down-arrow.svg'

const Chart = () => {

  let data = [{ name: 'Стив', number: 7805.99, src: '' },
  { name: 'Стив', number: 7805.99, src: '' },
  { name: 'Стив', number: 7805.99, src: '' },
  { name: 'Стив', number: 7805.99, src: '' },
  { name: 'Стив', number: 7805.99, src: rhomb }]

  return (
    <div className="wrap-chart">
      {/* <div> */}
      {data.map((item, i) => {
        return (
          <div className="item" key={`${item.name}-${i}`}>
            <span className={`serial-number ${i ? '' : `first-num`}`}><span>{i + 1}</span></span>
            <img src={item.src} /> {/* alt={item.name}*/}
            <div>
              <span>{item.name}</span>
              <div className='line-bg'>
                <div></div>
              </div>
            </div>
            <span>{item.number}</span>
          </div>
        )
      })}
      {/* </div> */}
      <img className="rhomb" src={rhomb} />
      <i className="bg-line n-1"></i>
      <i className="bg-line n-2"></i>
      <i className="bg-line n-3"></i>
      <img className="points" src={points} />
      <img className="down-arrow" src={downArrow} />
      <img className="ellipse" src={ellipse} />
      <img className="ellipse-blurred" src={ellipseBlurred} />
    </div>
  )
}

export default Chart