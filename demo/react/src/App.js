import React, { useEffect, useState } from 'react'
import firebase, { db } from './firebaseApp'
import Roadmap from './pages/Roadmap'
import Votes from './pages/Votes'
import Tabs from './components/Tabs'
import { Votes as ParootVotes, SuggestionForm } from 'paroot-react'
import parootConfig from './parootConfig'

const App = () => {
  const auth = firebase.auth()
  return (
    <>
      <ParootVotes config={parootConfig} auth={auth} db={db}></ParootVotes>
      <SuggestionForm
        config={{ name: 'paroot' }}
        auth={auth}
        db={db}
        bgColor="#282828"
        textColor="#FFF"
        primaryColor={parootConfig.colors.primary}
      ></SuggestionForm>
    </>
  )
}

export default App
