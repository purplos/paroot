import React from 'react'
import styled from 'styled-components'

const Ul = styled.ul`
  list-style: none;
  padding-left: 1.25rem;
  padding-bottom: 7rem;
  height: calc(100vh - 5rem);
  overflow: auto;
  background: ${props => props.backgroundColor};
`

const List = ({ children, ...props }) => {
  return <Ul {...props}>{children}</Ul>
}

export default List
