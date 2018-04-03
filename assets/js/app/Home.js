import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import DatePicker from 'react-datepicker'
import moment from 'moment'

export default class Home extends Component {
  constructor () {
    super()
    this.state = {
      name: 'mario'
    }
  }

  render () {
    return (<section id='home'>
        <div className="container">
        <div className="col-md-6">
        <img src="/img/bitcoin-logo.png"
        className="bitcoin-logo" />
        </div>
        <div className="col-md-6">
      <h2>Enter transaction</h2>
      <label>Crypto Amount</label>
      <input type="text" name="amount"
      onChange={this.props.onInputChange}
      value={this.props.globalState.cryptoAmount} />

      <label>Date</label>

      <DatePicker  selected={this.props.globalState.date}
        onChange={this.props.handleDateChange}/>
      <button type="submit">Check Profits </button>
        </div>

        </div>
      </section>)
  }
}
