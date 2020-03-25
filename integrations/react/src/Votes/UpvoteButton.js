import React from 'react'
import styled from 'styled-components'
import hexToRGB from '../hexToRGB'

const Button = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  flex: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1;
  height: 2rem;
  min-width: 2rem;
  color: ${props => (props.active ? props.activeColor : props.textColor)};

  &:hover {
    color: rgba(${props => hexToRGB(props.activeColor)}, 0.87);
  }

  &:focus {
    outline: none;
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
    transform: translatex(-0.125rem) scale(0.95);
  }
`

const Spinner = styled.div`
  width: 1rem;
  height: 1rem;

  position: relative;

  &::before,
  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: ${props => props.color};
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;

    -webkit-animation: sk-bounce 2s infinite ease-in-out;
    animation: sk-bounce 2s infinite ease-in-out;
  }

  &::after {
    -webkit-animation-delay: -1s;
    animation-delay: -1s;
  }

  @-webkit-keyframes sk-bounce {
    0%,
    100% {
      -webkit-transform: scale(0);
    }
    50% {
      -webkit-transform: scale(1);
    }
  }

  @keyframes sk-bounce {
    0%,
    100% {
      transform: scale(0);
      -webkit-transform: scale(0);
    }
    50% {
      transform: scale(1);
      -webkit-transform: scale(1);
    }
  }
`

const UpvoteButton = ({ onClick, active, loading, votes = 0, colors, ...props }) => {
  return (
    <Button
      active={active}
      activeColor={colors.primary}
      textColor={colors.text}
      onClick={onClick}
      aria-label={active ? 'Unvote' : 'Vote'}
      {...props}
    >
      {loading ? (
        <Spinner color={colors.primary} />
      ) : (
        <>
          {votes}
          <svg viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M17.71,11.29l-5-5a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21l-5,5a1,1,0,0,0,1.42,1.42L11,9.41V17a1,1,0,0,0,2,0V9.41l3.29,3.3a1,1,0,0,0,1.42,0A1,1,0,0,0,17.71,11.29Z"
            />
          </svg>
        </>
      )}
    </Button>
  )
}

export default UpvoteButton
