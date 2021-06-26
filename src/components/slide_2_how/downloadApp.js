import * as React from "react"

import imgDownload from '../../images/slide_2_how/installation.png'
import hidden_triangle from '../../images/slide_2_how/triangle.svg'

import '../../styles/components/slide_2_how/downloadApp.scss'


const DownloadApp = () => (<div className="wrap-dl" id="download">

  <p>Скачайте приложение из личного кабинета. Оно автоматически определит мощность и подберет оптимальный режим майнинга.</p>
  <i className="bg-line_computer n-1" />
  <i className="bg-line_computer n-2" />
  <img loading="lazy" alt="download" className="download-img" src={imgDownload} />
  <img loading="lazy" alt="hidden_triangle" id="hidden_triangle" src={hidden_triangle} />

</div>)

export default DownloadApp