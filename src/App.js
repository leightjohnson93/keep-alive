import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  state = {
    apps: [
      'https://secure-wildwood-12307.herokuapp.com',
      'https://shrouded-atoll-12007.herokuapp.com'
    ],
    interval: 300000,
    lastPing: 'unknown'
  }

  toMinutes = ms => `${ms / 1000 / 60} minutes`

  componentDidMount() {
    const { apps, interval } = this.state
    setInterval(() => {
      const timeStamp = Date()
      apps.forEach(app => fetch(app))
      console.log(`Pinging urls: ${timeStamp}`)
      this.setState({ lastPing: timeStamp })
    }, interval)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ul>
            Sites to ping every {this.toMinutes(this.state.interval)}:
            {this.state.apps.map(app => (
              <li key={app}>
                <code>{app}</code>
              </li>
            ))}
            <p>Sites last hit at: {this.state.lastPing}</p>
          </ul>
          <p />
        </header>
      </div>
    )
  }
}

export default App
