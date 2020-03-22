import React from 'react'

const style = {
  fontWeight: '600',
  fontSize: '1.125rem',
  lineHeight: '1.2',
  maxWidth: 'calc(100% - 3rem)',
  margin: '0',
  flex: '1 auto'
}

const FeatureTitle = ({ children }) => {
  return <h2 style={style}>{children}</h2>
}

export default FeatureTitle
