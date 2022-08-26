import React from 'react'

class CompC extends React.Component {

  render() {
    console.log('组件C渲染')
    return <div>
      我是组件C
      {
        new Array(10).fill(0).map((item, index) => {
          console.log('组件C列表循环了')
          return <div key={index} >{item}</div>
        })
      }
    </div>
  }
}

export default CompC