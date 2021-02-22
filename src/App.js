import './App.css';
import React, { useState, useEffect } from 'react'
import useForm from './useForm.js'
import useFetch from './useFetch';
// import Hello from './Hello.js'

const App = () => {
  const [values, handleChange] = useForm({ email: '', password: ''});
  // const [showHello, setShowHello] = useState(true);

  // useEffect(() => {
  //   const onMouseMove = e => {
  //     console.log(e)
  //   }
  //   window.addEventListener('mousemove', onMouseMove)
  //   // clean up function - like componentWillUnmount
  //   return () => {
  //     window.removeEventListener('mousemove', onMouseMove);
  //   }
  // }, []);
  // dependacy array second argument, if it's empty will fire only once, if value inside it will fire every time that value is changed
  // replace componentDidMount and componentWillUnmount

  // we can have multiple useEffect
  // useEffect(() => {
  //   console.log('mount1')
  // }, [])

  // useEffect(() => {
  //   console.log('mount2')
  // }, [])

  // http:/numbersapi.com/43/trivia
  const { data, loading } =   useFetch('http:/numbersapi.com/43/trivia')


  const [count, setCount] = useState(0);

  // we now have singl value but JSON.parse works for objects in case we need, 
  // when we use initializer function of useState we dont call JSON.parse(localeStorage.getItem("count") every single render
  // const [count, setCount] = useState(JSON.parse(localeStorage.getItem("count")));
  // JSON.stringyfy(count) if I waqnt to set count as something else not number
  // useEffect(() => {
  //   localeStorage.setItem("count", JSON.stringyfy(count));
  // }, [count])

  return (
    <div className="App">
      <div>{loading ? 'loading...' : data }</div>
      <div>count: {count}</div>
      <button onClick={() => setCount(c => c + 1)}>increment</button><br/>
      {/* <button onClick={() => setShowHello(!showHello)}>toggle</button>
      {showHello && <Hello/>} */}
      <input name='email'value={values.email}  onChange={handleChange}/>
      <input type='password' name='password' value={values.password}  onChange={handleChange}/>
    </div>
  );
}
export default App;
