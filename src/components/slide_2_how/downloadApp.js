import * as React from "react"

import imgDownload from '../../images/download.svg'

import '../../styles/components/thirdSlide/downloadApp.scss'

// TODO попросить дизайнера исправить фон на пикче (разные оттенки)

const DownloadApp = () => {

  return (
    <div className="wrap-dl">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
      <i className="bg-line n-1" />
      <i className="bg-line n-2" />
      <img className="download-img" src={imgDownload} />
    </div>
  )
}

export default DownloadApp