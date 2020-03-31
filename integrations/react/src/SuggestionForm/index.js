import React, { useState } from 'react'
import styled from 'styled-components'
import defaultConfig from '../defaultConfig'
import FirebaseManager from '../FirebaseManager'
import Form from './Form'

const Container = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
`

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  pointer-events: ${props => (props.expanded ? 'auto' : 'none')};
  opacity: ${props => (props.expanded ? 1 : 0)};
  background: rgba(0, 0, 0, 0.2);
  will-change: opacity;
  transition: opacity 0.1s ease;
`

const ExpandableArea = styled.div`
  padding: 1.5rem 2rem;
  padding-bottom: 2rem;
  background: ${props => props.colors.background};
  box-shadow: 0px -4px 16px rgba(0, 0, 0, 0.06), 0px -2px 4px rgba(0, 0, 0, 0.06);
  font-size: 0.875rem;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  cursor: pointer;
  color: ${props => props.colors.text};

  &:hover {
    color: ${props => props.colors.primary};
  }

  & svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  &[data-expanded='true'] svg {
    transform: rotate(180deg);
  }
`

const SuggestionForm = ({
  db,
  auth,
  bgColor: background = defaultConfig.colors.background,
  textColor: text = defaultConfig.colors.text,
  primaryColor: primary = defaultConfig.colors.primary
}) => {
  const colors = { background, text, primary }
  const manager = new FirebaseManager(db, auth)
  const [expanded, setExpanded] = useState(false)
  const handleSubmit = (title, description) => {
    manager.handleSuggestionForm(title, description)
    setExpanded(false)
  }
  return (
    <Container>
      <Backdrop expanded={expanded} onClick={() => setExpanded(false)} />
      <ExpandableArea colors={colors} onClick={() => setExpanded(!expanded)} data-expanded={expanded}>
        Send a suggestion
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M17,13.41,12.71,9.17a1,1,0,0,0-1.42,0L7.05,13.41a1,1,0,0,0,0,1.42,1,1,0,0,0,1.41,0L12,11.29l3.54,3.54a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29A1,1,0,0,0,17,13.41Z"
          />
        </svg>
      </ExpandableArea>
      {expanded && <Form onSubmit={handleSubmit} colors={colors} />}
    </Container>
  )
}

export default SuggestionForm
