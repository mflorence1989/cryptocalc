import React, { Component} from 'react'
import ReactDOM from 'react-dom'

export default class Results extends Component {
  constructor () {
    super()
    this.state = {
      name: 'mario'
    }
    this.checkGains =
    this.checkGains.bind(this)
  }
checkGains(){
  const {percent} = this.props.globalState.totalStatus
  if(this.props.globalState.totalStatus == 'gain'){
    return  `You made ${percent}% profit`
  } else {
    return  `You loss ${percent}% of your investment `
  }
}
  render () {
    const {percent, newCP, newSP} =
    this.props.globalState.totalStatus
    return (<section id='results'>
        <div className="container">
        <div className="col-md-12">
        <div className="ads">  </div>
          </div>
        <h3>Your ${newCP} investment
        is now</h3>
        <h1>${newSP}0</h1>
        <h4>{this.checkGains()}</h4>
        <a href="#" className="main-btn active">
        Create account to keep track of profits
        </a>
        <a href="#" className="main-btn active"
        onClick={this.props.goBack}>
        check another transaction
        </a>

        <div className="ads">  </div>
        </div>
      </section>)
  }
}
