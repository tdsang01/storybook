import React from 'react';
import styled from 'styled-components';

const Text = ({ bold, dark, white, small, children, ...props}) => {
  let color;
  if (dark) {
    color = '#2B2B2B';
  } else if (white) {
    color = '#fff';
  } else {
    color = '#627182';
  }

  const StyledText = styled.div`
    font-family: sans-serif;
    font-size: ${small ? '13px' : '15px'};
    font-weight: ${bold ? 'bold' : 'normal'};
    color: ${color};
  `

  return <StyledText {...props}>{children}</StyledText>;
}

const DescriptionText = styled.div`
  font-family: san-serif;
  font-size: 14px;
  color: #7a8994;
`

export { Text, DescriptionText };