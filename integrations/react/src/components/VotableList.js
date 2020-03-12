import React from 'react'

const style = {
  listStyle: 'none'
}

const VotableList = ({ children, ...props }) => {
  return (
    <ul style={style} {...props}>
      {children}
    </ul>
  )
}

export default VotableList
