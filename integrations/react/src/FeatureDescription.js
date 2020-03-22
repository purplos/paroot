import React from 'react'

const style = {
  fontWeight: 'normal',
  fontSize: '0.875rem',
  lineHeight: '1.2'
}

const FeatureDescription = ({ children }) => {
  return <p style={style}>{children}</p>
}

export default FeatureDescription
