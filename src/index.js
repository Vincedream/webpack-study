import ReactDOM from 'react-dom'
import React from 'react'
import App from './App.js'
import './index.scss'

class Index extends React.PureComponent {
  componentDidMount() {
    console.log('this is index')
  }

  render() {
    return (
      <div>
        <App />
      </div>
    )
  }
}
ReactDOM.render(<Index />, document.querySelector('#root'))

if (module.hot) {
  // 实现热更新
  module.hot.accept()
}
