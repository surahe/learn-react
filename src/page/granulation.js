import React from 'react'
import ComA from '../components/graulation/a'
import ComB from '../components/graulation/b'
import ComC from '../components/graulation/c'
import MemoInput from '../components/graulation/memoInput'

class Granulation extends React.Component {
  formData = {}
  constructor(props) {
    super(props)
    this.state = {
      inputValue: ''
    }
  }
  handerChange = (e) => this.setState({ inputValue: e.target.value })
  handerChange2 = (e) => this.formData.inputValue =  e.target.value
  render() {
    const { inputValue } = this.state
    return <div>
      <div className="box" >
        优化前：<input value={inputValue} onChange={(e) => this.handerChange(e)} />
        <br/>
        优化后：<input value={this.formData.inputValue} onChange={(e) => this.handerChange2(e)} />
        <br/>
        使用memo：<MemoInput notifyFatherChange={(value) => { this.formData.inputValue = value }} />
        <button onClick={()=> console.log(this.formData)} >打印数据</button>
      </div>
      <br></br>

      { /*  我们增加三个子组件 */}
      <ComA />
      <ComB />
      <ComC />
      {/* 我们首先来一个列表循环 */}
      {
        new Array(10).fill(0).map((item, index) => {
          console.log('列表循环了')
          return <div key={index} >{item}</div>
        })
      }
      {
        /* 这里可能是更复杂的结构 */
        /* ------------------ */
      }
    </div>
  }
}

export default Granulation
