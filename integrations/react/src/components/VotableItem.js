import React from 'react'

const style = {
  padding: '2rem 4rem',
  borderBottom: '1px solid #eee'
}

const VotableItem = ({ item }) => {
  return (
    <li style={style} key={item.id}>
      {item.title} - {item.votes.length}
    </li>
  )
}

export default VotableItem
