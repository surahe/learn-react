import React from 'react'
/* 控制更新 ,第二个参数可以作为组件更新的依赖 ， 这里设置为 ()=> true 只渲染一次 */
const NotUpdate = React.memo(({ children }) => typeof children === 'function' ? children() : children, () => true)

class ChildrenComponent extends React.Component {
  render() {
    console.log('使用memo子组件渲染')
    return <div>使用memo子组件</div>
  }
}class ChildrenComponent2 extends React.Component {
  render() {
    console.log('不使用memo子组件渲染')
    return <div>不使用memo子组件</div>
  }
}

class ClassMemo extends React.Component {
  constructor(prop) {
    super(prop)
    this.state = {
      list: [{ id: 1, name: 'xixi' }, { id: 2, name: 'haha' }, { id: 3, name: 'heihei' }],
      number: 0,
    }
  }
  handerClick = () => {
    this.setState({ number: this.state.number + 1 })
  }
  render() {
    const { list } = this.state
    return <div>
      <span>{this.state.number}</span>
      <button onClick={this.handerClick} >点击</button>
      <h1>使用memo</h1>
      <NotUpdate>
        {() => (<ul>
          {
            list.map(item => {
              console.log('使用memo列表渲染')
              return <li key={item.id}  >{item.name}</li>
            })
          }
        </ul>)}
      </NotUpdate>
      <NotUpdate>
        <ChildrenComponent />
      </NotUpdate>

      <h1>不使用memo</h1>
      <ul>
        {
          list.map(item => {
            console.log('不使用memo列表渲染')
            return <li key={item.id}  >{item.name}</li>
          })
        }
      </ul>
      <ChildrenComponent2 />
    </div>
  }
}

export default ClassMemo