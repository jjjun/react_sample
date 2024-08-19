import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import PropTypes from 'prop-types';


import MyCustomButton from './modules/Button'

let UserLogin = (props) => {
  if (props.is_login) {
    return <div>Login! {props.name}</div>
  } else {
    return <div>please login</div>
  }
}


function ValidCheck(props) {
  return <div>{props.name}</div>;
}

ValidCheck.propTypes = {
  name: PropTypes.number
}



class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <UserLogin is_login={true} name='tanaka' />
    <MyCustomButton />
    <Welcome name='yamada' />
    <ValidCheck name={3} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
