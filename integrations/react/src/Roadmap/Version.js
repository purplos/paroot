import React from 'react'
import styled from 'styled-components'
import hexToRGB from '../hexToRGB'

const StyledVersion = styled.div`
  height: 1rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background: ${props =>
    props.released ? `rgba(${hexToRGB(props.primaryColor)}, 0.24)` : `rgba(${hexToRGB(props.textColor)}, 0.06)`};
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0.75rem;
  color: ${props =>
    props.released ? `rgba(${hexToRGB(props.primaryColor)}, 1)` : `rgba(${hexToRGB(props.textColor)}, 1)`};
`

const Version = ({ children, ...props }) => {
  return <StyledVersion {...props}>{children}</StyledVersion>
}

export default Version
