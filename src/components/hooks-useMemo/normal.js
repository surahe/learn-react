import React from 'react'

function Normal() {
  const [number, setNumber] = React.useState(0)
  console.log('normal初始化')
  const handerClick1 = () => {
    /* 一些操作 */
    console.log(1)
  }
  const handerClick2 = () => {
    /* 一些操作 */
    console.log(2)
  }
  const handerClick3 = () => {
    /* 一些操作 */
    console.log(3)
  }
  return <div>
    <p onClick={handerClick1} >点我有惊喜1</p>
    <p onClick={handerClick2} >点我有惊喜2</p>
    <p onClick={handerClick3} >点我有惊喜3</p>
    <button onClick={() => setNumber(number + 1)} > 点击 {number} </button>
  </div>
}
export default Normal
