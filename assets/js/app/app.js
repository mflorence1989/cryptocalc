import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Home from './home.js'

class Layout extends Component {
  constructor () {
    super()
    this.state = {
      name: 'mario'
    }
  }

  render () {
    return (<div className="home">
        <div className="container">
        <header>
      <div className="logo">
      lili
      </div>
      <nav className="menu">
      <a href="#">register</a>

      </nav>
        </header>
        <Home />
        </div>
      </div>)
  }
}

const app = document.getElementById('app')

ReactDOM.render(<Layout />, app)
