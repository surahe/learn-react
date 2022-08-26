import React from 'react'
import { withRouter } from 'react-router-dom' //引入withRouter
import Config from '../../config/data'

class Desc extends React.Component {
  render() {
    return <div>
      {Config.map(item => {
        if (`#/${item.name}` === window.location.hash) {
          return <div className="desc" key={item.name}>
            <p style={{ marginTop: '0' }}>时间：{item.date}</p>
            <p>参考自：<a href={item.url} rel="noreferrer" target="_blank">{item.from}</a></p>
            <p style={{ 'color': 'red' }}>{item.desc}</p>
          </div>
        } else return false
      })}
    </div>
  }
}

export default withRouter(Desc)