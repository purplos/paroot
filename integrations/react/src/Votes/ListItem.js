import React, { forwardRef, useState } from 'react'
import styled from 'styled-components'
import FeatureDescription from '../FeatureDescription'
import FeatureTitle from '../FeatureTitle'
import hexToRGB from '../hexToRGB'
import UpvoteButton from './UpvoteButton'

const Li = styled.li`
  border-bottom: 1px solid rgba(${props => hexToRGB(props.textColor)}, 0.16);
  display: flex;
  width: 100%;
  flex-direction: column;
  padding-right: 1.25rem;
  padding-bottom: 0.75rem;
  padding-top: 1rem;
  background: ${props => props.backgroundColor};
  color: ${props => props.textColor};
`

const Headerbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.25rem;
`

const ListItem = forwardRef(({ item, user, onVote, colors }, ref) => {
  const [expandDescription, setExpand] = useState(false)
  return (
    <Li ref={ref} textColor={colors.text} backgroundColor={colors.background}>
      <Headerbar>
        <FeatureTitle>{item.title}</FeatureTitle>
        <UpvoteButton
          loading={item.loading}
          votes={item.votes.length}
          colors={colors}
          onClick={() => onVote(item.id, item.votes)}
          active={item.votes.includes(user.uid)}
        />
      </Headerbar>
      <div onClick={() => setExpand(!expandDescription)}>
        <FeatureDescription>{item.description}</FeatureDescription>
      </div>
    </Li>
  )
})

export default ListItem
