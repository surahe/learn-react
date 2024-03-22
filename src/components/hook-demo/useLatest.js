
  import React, { useState, useEffect } from 'react';
  import useLatest from '../../hooks/useLatest';
  
const UseLatest = () => {
    const [count, setCount] = useState(0);
  
    const latestCountRef = useLatest(count);
  
    useEffect(() => {
      const interval = setInterval(() => {
        // console.log(`Count is: ${count}`);
        console.log(`current Count is: ${latestCountRef.current}`);
      }, 1000);
      return () => clearInterval(interval);
    }, [latestCountRef]);

    function handleClickAsync() {
      setTimeout(function delay() {
        setCount(count => count + 1);
      }, 1000);
    }
  
    function handleClickSync() {
      setCount(count + 1);
    }

    function handleClickClosure() {
      setTimeout(function delay() {
        setCount(count + 1);
      }, 1000);
    }
  
    return (
      <div>
        <p>快速点击闭包问题， count 只会+1</p>
        <p>{count}</p>
        <button onClick={handleClickClosure}>Increase 闭包问题</button>
        <button onClick={handleClickAsync}>Increase async</button>
        <button onClick={handleClickSync}>Increase sync</button>
    </div>
    );
  };
export default UseLatest