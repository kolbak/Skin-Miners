import * as React from "react"

import imgDownload from '../../images/slide_2_how/download.svg'

import '../../styles/components/slide_2_how/downloadApp.scss'

// TODO попросить дизайнера исправить фон на пикче (разные оттенки)

const DownloadApp = () => (<div className="wrap-dl" id="download">

  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
  <i className="bg-line n-1" />
  <i className="bg-line n-2" />
  <img alt="download" className="download-img" src={imgDownload} />

</div>)

export default DownloadApp