import React from 'react';

import PropTypes from 'prop-types';

import MyCustomButton from './Button'

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

export default function LoginSample() {
  return (
    <>
      <UserLogin is_login={true} name='tanaka' />
      <MyCustomButton />
      <Welcome name='yamada' />
      <ValidCheck name={3} />
    </>
  )
}
