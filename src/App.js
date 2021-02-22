import './App.css';
import React, { useState, useEffect } from 'react'
import useForm from './useForm.js'
// import Hello from './Hello.js'

const App = () => {
  const [values, handleChange] = useForm({ email: '', password: ''});
  // const [showHello, setShowHello] = useState(true);

  useEffect(() => {
    const onMouseMove = e => {
      console.log(e)
    }
    window.addEventListener('mousemove', onMouseMove)
    // clean up function - like componentWillUnmount
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    }
  }, []);
  // dependacy array second argument, if it's empty will fire only once, if value inside it will fire every time that value is changed
  // replace componentDidMount and componentWillUnmount
  return (
    <div className="App">
      {/* <button onClick={() => setShowHello(!showHello)}>toggle</button>
      {showHello && <Hello/>} */}
      <input name='email'value={values.email}  onChange={handleChange}/>
      <input type='password' name='password' value={values.password}  onChange={handleChange}/>
    </div>
  );
}
export default App;
