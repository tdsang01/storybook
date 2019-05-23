import React, { useState } from 'react'
import styled from 'styled-components';

const LoginBoxWrapper = styled.div`
  background-color: #eef2f8;
  padding: 30px;
  border-radius: 5px;
  max-width: 300px;
  justify-content: center;
  button {
    background-color: #48c400;
  }
`

function LoginBox(props) {
  const [isLoading, setLoading] = useState(false);
  const submit = () => {
    setLoading(!isLoading);
    setTimeout(() => {
      setLoading(isLoading)
    }, 1000)
  }

  return (
    <LoginBoxWrapper>
      <button
        className={`ui fluid green button ${isLoading ? 'loading disabled' : ''}`}
        onClick={() => submit()}
      >Log in</button>
    </LoginBoxWrapper>
  )
}

export default LoginBox;