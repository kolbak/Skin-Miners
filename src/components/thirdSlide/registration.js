import * as React from "react"

import imgRegistration from '../../images/registration.png'

import '../../styles/components/thirdSlide/registration.scss'

const Registration = () => {
  return (
    <div className="wrap-reg">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
      <img className="registration-img" src={imgRegistration} />
    </div>
  )
}

export default Registration