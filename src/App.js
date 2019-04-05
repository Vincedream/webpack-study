import React from 'react'
import './App.scss'

class App extends React.Component {
  componentDidMount() {
    console.log('this is App')
  }

  render() {
    return (
      <div className="app">
        <div className="title">title</div>
        this is Appa
      </div>
    )
  }
}

export default App
