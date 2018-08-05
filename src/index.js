import './index.css'
import './test.js'

console.log('222')
class App {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}
const a1 = new App('vince', 15)
console.log(a1.age)
async function test() {
  console.log('async')
}
test()
if (module.hot) {
  // 实现热更新
  module.hot.accept()
}
