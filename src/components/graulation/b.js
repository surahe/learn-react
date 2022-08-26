import React from 'react'

class CompB extends React.Component {
	componentWillReceiveProps() {
		console.log('componentWillReceiveProps执行')
		/* 可能做一些骚操作 wu lian */
	}
	render() {
		console.log('组件B渲染')
		return <div>
			我是组件B
      </div>
	}
}

export default CompB
