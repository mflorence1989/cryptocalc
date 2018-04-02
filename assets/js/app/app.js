import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import axios from 'axios'
import Home from './Home.js'
import Results from './Results.js'


class Layout extends Component {
  constructor () {
    super()
    this.state = {
      name: 'mario',
      location: 'home',
      date: moment(),
      data: ''
    }
    this.routingSystem =
    this.routingSystem.bind(this)
    this.handleDateChange =
    this.handleDateChange.bind(this)
    this.apiCall =
    this.apiCall.bind(this)
  }
  routingSystem(){
    switch(this.state.location) {
    case 'home':
    return <Home handleDateChange={this.handleDateChange}
    globalState={this.state}/>

        break;
    case 'results':
      return <Results/>

        break;
    default:
      return <Home/>
  }
}
handleDateChange(date) {
    this.setState({
      date: date
    }, () => console.log(this.state.date.unix()));
  }
  apiCall(){
    //https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=BTC,USD,EUR&ts=1522638147&extraParams=crypto_calc
    var self = this;
    axios.get('https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=BTC,USD,EUR&ts=1522638147&extraParams=crypto_calc')
  .then(function (response) {

    self.setState({
      data: response.data.BTC
    }, () => {
      console.log(self.state);
    })
  })
  .catch(function (error) {
    console.log(error);
  });
  }


  render () {
    return (<div className="home">
        <div className="container">
        <header>
      <div className="logo" onClick={this.apiCall}>
      CryptoCalc
      </div>
      <nav className="menu">
      <a href="#"
      className="main-btn">register</a>

      </nav>
        </header>

        {this.routingSystem()}
        </div>
      </div>)
  }
}

const app = document.getElementById('app')

ReactDOM.render(<Layout />, app)
