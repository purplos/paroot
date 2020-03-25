import React, { useState } from 'react'
import styled from 'styled-components'
import hexToRGB from '../hexToRGB'

const StyledForm = styled.form`
  background: ${props => props.colors.background};
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
  padding-top: 0;
  position: relative;
  max-width: 40rem;
  margin: 0 auto;
  color: ${props => props.colors.text};

  & input,
  & textarea {
    width: 100%;
    padding: 0.75rem;
    background: rgba(${props => hexToRGB(props.colors.text)}, 0.06);
    border: none;
    outline: none;
    margin-bottom: 0.5rem;
    border-radius: 0.25rem;
    color: ${props => props.colors.text};
  }

  & textarea {
    min-height: 8rem;
  }

  & button {
    border: none;
    outline: none;
    background: transparent;
    padding: 0.75rem 1rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
      'Helvetica Neue', sans-serif;
    font-size: 0.875;
    border-radius: 0.25rem;
    font-weight: 500;
    cursor: pointer;
    color: ${props => props.colors.text};
  }

  & button:hover,
  & button:active {
    background: rgba(${props => hexToRGB(props.colors.primary)}, 0.12);
  }
`

const Form = ({ onSubmit, colors }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const handleSubmit = event => {
    event.preventDefault()
    if (title.length < 1) return
    setTitle('')
    setDescription('')
    onSubmit(title, description)
  }
  return (
    <StyledForm onSubmit={handleSubmit} colors={colors}>
      <input type="text" placeholder="Title" value={title} onChange={({ target }) => setTitle(target.value)} />
      <textarea placeholder="Description" value={description} onChange={({ target }) => setDescription(target.value)} />
      <button type="submit">Send suggestion</button>
    </StyledForm>
  )
}

export default Form
