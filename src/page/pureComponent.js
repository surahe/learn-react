import React from 'react'

class Text extends React.Component {
  render() {
    console.log('React.Component', this.props)
    return <div>React.Component</div>
  }
}
class PureText extends React.PureComponent {
  render() {
    console.log('React.PureComponent', this.props)
    return <div>React.PureComponent</div>
  }
}


class Pure extends React.Component {
  state = {
    data: { a: 1, b: 2 }
  }
  handerClick = () => {
    const { data } = this.state
    data.a++
    this.setState({ data })
  }
  render() {
    const { data } = this.state
    return <div>
      <button onClick={this.handerClick} >点击</button>
      <Text data={data} />
      <PureText data={{ ...data }} />
    </div>
  }
}

export default Pure
