import React from 'react';
import styled from 'styled-components';

const Image = styled.div`
  border-radius: 50%;
  background-size: cover;
  background-position: top;
`

function Avatar(props) {
  const { src, size = 64 } = props;
  return (
    <Image
      style={{
        backgroundImage: `url(${src || 'https://www.w3schools.com/howto/img_avatar2.png'})`,
        width: size,
        height: size
      }}
    />
  )
}

export default Avatar;
