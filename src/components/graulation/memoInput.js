import React from 'react'

const ComponentInput = React.memo(function ({ notifyFatherChange }) {
  const [inputValue, setInputValue] = React.useState('')
  const handerChange = React.useMemo(() => (e) => {
    setInputValue(e.target.value)
    notifyFatherChange && notifyFatherChange(e.target.value)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return <input value={inputValue} onChange={handerChange} />
})


export default ComponentInput