import React from 'react'
import styled from 'styled-components'

const StyledDate = styled.div`
  font-weight: 600;
  font-size: 0.5rem;
`

const Date = ({ children, ...props }) => {
  return <StyledDate {...props}>{children}</StyledDate>
}

export default Date
