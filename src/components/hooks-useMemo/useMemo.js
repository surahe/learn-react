import React from 'react'

function useMemo() {
  const [number, setNumber] = React.useState(0)
  console.log('useMemo初始化')
  const [handerClick1, handerClick2, handerClick3] = React.useMemo(() => {
    console.log('useMemo初始化方法')
    const fn1 = () => {
      console.log(1)
      /* 一些操作 */
    }
    const fn2 = () => {
      console.log(2)
      /* 一些操作 */
    }
    const fn3 = () => {
      console.log(3)
      /* 一些操作 */
    }
    return [fn1, fn2, fn3]
  }, []) /* 只有当数据里面的依赖项，发生改变的时候，才会重新声明函数。 */
  return <div>
    <p onClick={handerClick1} >点我有惊喜1</p>
    <p onClick={handerClick2} >点我有惊喜2</p>
    <p onClick={handerClick3} >点我有惊喜3</p>
    <button onClick={() => setNumber(number + 1)} > 点击 {number} </button>
  </div>
}


export default useMemo
