import React, { useState } from 'react'
import defaultConfig from '../defaultConfig'
import Roadmap from '../Roadmap'
import SuggestionForm from '../SuggestionForm'
import Votes from '../Votes'
import Tabs from './Tabs'

const Paroot = ({
  db,
  auth,
  bgColor: background = defaultConfig.colors.background,
  textColor: text = defaultConfig.colors.text,
  primaryColor: primary = defaultConfig.colors.primary,
  ...props
}) => {
  const [currentTab, setCurrentTab] = useState('feedback')
  const componentProps = {
    db,
    auth,
    bgColor: background,
    textColor: text,
    primaryColor: primary
  }

  const handleTabChange = newTab => {
    setCurrentTab(newTab)
  }

  return (
    <div {...props}>
      <Tabs currentTab={currentTab} onTabChange={handleTabChange} {...componentProps} />
      {currentTab === 'feedback' ? (
        <>
          <Votes {...componentProps} />
          <SuggestionForm {...componentProps} />
        </>
      ) : (
        <Roadmap {...componentProps} />
      )}
    </div>
  )
}

export default Paroot
