import React, { useState } from 'react';
import styled from 'styled-components';
import { Popup } from 'semantic-ui-react';
import { UI_PRIMARY_COLOR } from '../Variables';

const Base= styled.button`
  font-size: 14px;
  font-weight: normal;
  background: transparent;
  padding: 7px 17px;
  text-align: center;
  vertical-align: middle;
  margin: 0;
  border-radius: 3px;
  outline: none;
  border: none;
  cursor: pointer;
  
  &:hover {
    opacity: .7;
  }
`

const Primary = styled(Base)`
  background-color: ${UI_PRIMARY_COLOR};
  color: #fff;
`

const Chip = styled(Base)`
  padding: 5px 15px;
  font-size: 13px;
  border-radius: 25px;
  background-color: #d8d8d8;
  color: #afafaf;
  margin-right: 5px;

  &.selected {
    background-color: ${UI_PRIMARY_COLOR};
    color: #fff;
  }
`

const Addons = styled.div`
  
`

function PrimaryButton(props) {
  const { text, children } = props;
  const [isLoading, setLoading] = useState(false);

  const submit = () => {
    setLoading(!isLoading);
    setTimeout(() => {
      setLoading(isLoading);
    }, 1000)
  }
  return (
    <Primary onClick={() => submit()} className={[isLoading ? 'ui loading button primary': '']}>
      <Addons >{children}</Addons>
      {text}
    </Primary>
  )
}

function ChipButton(props) {
  const { date, isSelected } = props;
  const [selected, setSelected] = useState(isSelected);

  const stylePopup = {
    borderRadius: '3px',
    opacity: 0.7,
    fontSize: '0.8em',
    padding: '5px 15px',
    minWidth: '115px',
    textAlign: 'center',
}

  const changeState = () => {
    setSelected(!selected);
  }

  return (
    <Popup
      trigger=
        {
          <Chip
            onClick={() => changeState()}
            className={[selected ? 'selected' : '']}
          >{date}</Chip>
        }
      content={selected ? 'Click to unselect' : 'Click to select'}
      style={stylePopup}
      inverted
      position='top center'
    />
  )
}

export { PrimaryButton, ChipButton };
