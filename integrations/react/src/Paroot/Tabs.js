import React from 'react'
import styled from 'styled-components'
import hexToRGB from '../hexToRGB'

const Nav = styled.nav`
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: ${props => props.bgColor};

  & button {
    background: transparent;
    padding: 0rem 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2rem;
    border-radius: 1rem;
    line-height: 0;
    border: none;
    outline: none;
    margin-left: 0.5rem;
    font-size: 0.875rem;
    cursor: pointer;
    color: ${props => props.textColor};
  }

  & button:hover {
    color: rgba(${props => hexToRGB(props.primaryColor)}, 0.87);
  }

  & button[data-active='true'] {
    color: ${props => props.primaryColor};
    font-weight: 500;
  }

  & button svg {
    width: 1rem;
    height: 1rem;
    margin-right: 0.5rem;
  }
`

const Tabs = ({ onTabChange, currentTab, textColor, bgColor, primaryColor }) => {
  const colors = { textColor, bgColor, primaryColor }
  return (
    <Nav {...colors}>
      <button data-active={currentTab === 'feedback'} onClick={() => onTabChange('feedback')}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M22,1H15a2.44,2.44,0,0,0-2.41,2l-.92,5.05a2.44,2.44,0,0,0,.53,2,2.47,2.47,0,0,0,1.88.88H17l-.25.66A3.26,3.26,0,0,0,19.75,16a1,1,0,0,0,.92-.59l2.24-5.06A1,1,0,0,0,23,10V2A1,1,0,0,0,22,1ZM21,9.73l-1.83,4.13a1.33,1.33,0,0,1-.45-.4,1.23,1.23,0,0,1-.14-1.16l.38-1a1.68,1.68,0,0,0-.2-1.58A1.7,1.7,0,0,0,17.35,9H14.06a.46.46,0,0,1-.35-.16.5.5,0,0,1-.09-.37l.92-5A.44.44,0,0,1,15,3h6ZM9.94,13.05H7.05l.25-.66A3.26,3.26,0,0,0,4.25,8a1,1,0,0,0-.92.59L1.09,13.65a1,1,0,0,0-.09.4v8a1,1,0,0,0,1,1H9a2.44,2.44,0,0,0,2.41-2l.92-5a2.44,2.44,0,0,0-.53-2A2.47,2.47,0,0,0,9.94,13.05Zm-.48,7.58A.44.44,0,0,1,9,21H3V14.27l1.83-4.13a1.33,1.33,0,0,1,.45.4,1.23,1.23,0,0,1,.14,1.16l-.38,1a1.68,1.68,0,0,0,.2,1.58,1.7,1.7,0,0,0,1.41.74H9.94a.46.46,0,0,1,.35.16.5.5,0,0,1,.09.37Z"
          />
        </svg>
        Feedback
      </button>
      <button data-active={currentTab === 'roadmap'} onClick={() => onTabChange('roadmap')}>
        <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M21.78,11.88l-2-2.5A1,1,0,0,0,19,9H13V3a1,1,0,0,0-2,0V4H5a1,1,0,0,0-.78.38l-2,2.5a1,1,0,0,0,0,1.24l2,2.5A1,1,0,0,0,5,11h6v9H9a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2H13V16h6a1,1,0,0,0,.78-.38l2-2.5A1,1,0,0,0,21.78,11.88ZM11,9H5.48L4.28,7.5,5.48,6H11Zm7.52,5H13V11h5.52l1.2,1.5Z"
          />
        </svg>
        Roadmap
      </button>
    </Nav>
  )
}

export default Tabs
