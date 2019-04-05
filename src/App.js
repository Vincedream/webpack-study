import React from 'react'
import './App.scss'

class App extends React.Component {
  componentDidMount() {
    console.log('this is App')
  }

  render() {
    const a = true
    const b = true
    return (
      <div className="app">
        <div className="title">title</div>
        this is Appa

        <If condition={a}>
          <h1>IfBlock</h1>
        </If>
        <Choose>
          <When condition={b}>
            <h1>1111</h1>
          </When>
          <Otherwise>
            <h1>2222</h1>
          </Otherwise>
        </Choose>
      </div>
    )
  }
}

export default App
