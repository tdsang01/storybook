import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  align-items: ${props => (props.alignItemsCenter ? 'center' : 'flex-start')};
  justify-content: ${props => (props.spaceBetween ? 'space-between' : 'none')}
`

const Col = styled.div`
  display: flex;
  flex-direction: column;
`

export { Row, Col };
