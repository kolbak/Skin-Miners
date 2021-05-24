import * as React from "react"

import '../../styles/components/slide_2_how/login.scss'

const Login = () => {

  return (
    <div className="wrap-how" id="login">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
      <i className="bg-line n-1" />
      <i className="bg-line n-2" />
      <i className="bg-line n-3" />
      <i className="bg-line n-4" />
      <i className="bg-line n-5" />

      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3"><input type="password" class="form-control" id="exampleInputPassword1" /></div>
        <div class="mb-3 form-check"><input type="checkbox" class="form-check-input" id="exampleCheck1" /></div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Login