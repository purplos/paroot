import React, { useState } from 'react'
import UpvoteButton from './UpvoteButton'
import FeatureTitle from '../FeatureTitle'
import FeatureDescription from '../FeatureDescription'
import styled from 'styled-components'

const Li = styled.li`
  border-bottom: 1px solid #eee;
  display: flex;
  width: 100%;
  flex-direction: column;
  padding-right: 1.25rem;
  padding-bottom: 0.75rem;
  padding-top: 1rem;
`

const Headerbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.25rem;
`

const ListItem = ({ item, user, onVote }) => {
  const [expandDescription, setExpand] = useState(false)
  return (
    <Li>
      <Headerbar>
        <FeatureTitle>{item.title}</FeatureTitle>
        <UpvoteButton
          loading={item.loading}
          votes={item.votes.length}
          onClick={() => onVote(item.id, item.votes)}
          active={item.votes.includes(user.uid)}
        />
      </Headerbar>
      <div onClick={() => setExpand(!expandDescription)}>
        <FeatureDescription>{item.description}</FeatureDescription>
      </div>
    </Li>
  )
}

export default ListItem
