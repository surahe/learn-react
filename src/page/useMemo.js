import React from 'react';

function ChildrenComponent() {
  console.log('不使用useMemo的子d组件渲染')
  return <div>不使用useMemo</div>
}
function ChildrenComponent2() {
  console.log('使用useMemo的子组件渲染')
  return <div>使用useMemo</div>
}

function useMemo() {
  const [list] = React.useState([{ id: 1, name: 'xixi' }, { id: 2, name: 'haha' }, { id: 3, name: 'heihei' }])
  const [number, setNumber] = React.useState(0)
  return <div>
    <span>{number}</span>
    <button onClick={() => setNumber(number + 1)} >点击</button>
    <ul>
      {
        list.map(item => {
          console.log('列表渲染')
          return <li key={item.id}  >{item.name}</li>
        })
      }
    </ul>
    { <ChildrenComponent2 /> }
    { React.useMemo(()=> <ChildrenComponent />,[]) }
  </div>
}

export default useMemo