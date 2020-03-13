import React from 'react'
import styles from './VotableList.module.css'

const VotableList = ({ children, ...props }) => {
  return (
    <ul className={styles.list} {...props}>
      {children}
    </ul>
  )
}

export default VotableList
