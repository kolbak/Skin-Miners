import * as React from "react"
import ChartLine from "./chart-line";

import '../../styles/components/slide_0_welcome/chart.scss'
import '../../styles/components/slide_0_welcome/slide_0_mobile.scss'

import user_default from '../../images/slide_0_welcome/user_default.jpg'

const initialData = {
  users: [
    { name: '1', total: 1 },
    { name: '2', total: 2 },
    { name: '3', total: 3 },
    { name: '4', total: 4 },
    { name: '5', total: 5 }],
  max: 5
}

const Chart = () => {

  const [miners, setMiners] = React.useState(initialData)
  const [loading, setLoading] = React.useState(true)

  async function update() {
    if (!loading) setLoading(true)

    fetch("https://miningskins.com/api/top-users", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then(resp => resp.json())
      // .then(resp => { console.log(resp); return resp })
      .then(resp => setMiners({
        users: resp.users.sort((a, b) => b.total - a.total),
        max: Math.max(...resp.users.map(x => x.total))
      }))
      .finally(_ => setTimeout(() => setLoading(false), 300))
  }

  React.useEffect(update, [])

  return <div className="wrap-chart">
    <div id="chart">
      {miners.users.map((item, i) => (
        <div className={`item  ${i ? '' : 'first-num'}`} key={`${item.name}-${i}`}>
          <span className={`serial-number ${i ? '' : `first-num`}`}><span>{i + 1}</span></span>
          <img className="avatar  " src={item.src ?? user_default} alt="avatar" />
          <div className="name-line">
            <span className='name' children={item.name} />
            <div className='line-bg' children={<ChartLine current={item.total} max={miners.max} />} />
            <span className='number-mobile' children={item.total} />
          </div>
          <span className='number' children={item.total} />
        </div>
      ))}
    </div>
    <button className="btn" onClick={update} disabled={loading}>
      {loading && <>
        <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true" />
        <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true" />
        <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true" />
      </>}
      {!loading && "Обновить"}
    </button>
  </div>
}

export default Chart