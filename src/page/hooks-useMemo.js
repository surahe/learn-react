import React from 'react'
import Normal from '../components/hooks-useMemo/normal'
import UseMeno from '../components/hooks-useMemo/useMemo'

function hookUseMemo() {
  return <div>
    <h1>普通组件</h1>
    <Normal />
    <br/><br/><br/>
    <h1>useMemo组件</h1>
    <UseMeno></UseMeno>
  </div>
}


export default hookUseMemo
