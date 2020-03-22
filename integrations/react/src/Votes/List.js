import React from 'react'

const styles = {
  list: {
    listStyle: 'none',
    paddingLeft: '1.25rem',
    paddingBottom: '7rem',
    height: 'calc(100vh - 4rem)',
    overflow: 'auto'
  }
}

const List = ({ children, ...props }) => {
  return (
    <ul style={styles.list} {...props}>
      {children}
    </ul>
  )
}

export default List
