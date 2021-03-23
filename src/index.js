import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';


const Header = () => {
  return <h2>Hello World!</h2>
}

const styledField = {
  width: '300px'
}

const Field = () => {
  const holder = 'Enter'
  return <input 
            style = {styledField}
            type='text'
            placeholder={holder}
            autoComplete=''
            className='first'
            htmlFor=''/>
}

const Button = () => {
  const text = 'Login';
  // const res = () => {  тоже возможно
  //   return 'Login please'
  // }

  const logged = true;
return <button>{logged ? "Enter" : text}</button>
}

// const Tick = () => {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById('root'));
//   return setInterval(Tick, 1000);
// }



const App = () => {
  return (
    <div>
      <Header/>
      <Field/>
      <Button/>
   
    </div>

  )
}

// const Time = () => {
//   return (
//     <div>
//          <Tick />
//     </div>
//   )
// }
// const elem = React.createElement('h2', null, "HW")

ReactDOM.render(
  <App />, 
  // <Time />,
  document.getElementById('root')
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
