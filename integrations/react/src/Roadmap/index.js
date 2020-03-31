import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import defaultConfig from '../defaultConfig'
import FirebaseManager from '../FirebaseManager'
import hexToRGB from '../hexToRGB'
import Detail from './Detail'
import Milestone from './Milestone'

const Container = styled.div`
  width: 100%;
  overflow: auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  background: ${props => props.bgColor};

  .padding {
    width: calc(100% - 3.5rem);
    border-left: 2px solid rgba(${props => hexToRGB(props.textColor)}, 0.2);
    height: 2rem;
  }
`

const Roadmap = ({
  db,
  auth,
  bgColor: background = defaultConfig.colors.background,
  textColor: text = defaultConfig.colors.text,
  primaryColor: primary = defaultConfig.colors.primary
}) => {
  const manager = new FirebaseManager(db, auth)
  const [roadmap, setRoadmap] = useState([])
  const [showDetail, setShowDetail] = useState(false)
  const [currentMilestone, setCurrentMilestone] = useState(null)

  const onShowDetail = milestone => {
    setShowDetail(true)
    setCurrentMilestone(milestone)
  }

  const onClose = () => {
    setShowDetail(false)
  }

  const fetchMilestones = async () => {
    const milestones = await manager.fetchRoadmap()
    setRoadmap(milestones)
  }

  useEffect(() => {
    fetchMilestones()
  }, [])

  const sortedRoadmap = roadmap.sort((a, b) => b.date.toDate() - a.date.toDate())

  return (
    <Container textColor={text} bgColor={background} primaryColor={primary}>
      <div className="padding"></div>
      {sortedRoadmap.map(milestone => (
        <Milestone
          key={milestone.id}
          milestone={milestone}
          onShowDetail={onShowDetail}
          textColor={text}
          bgColor={background}
          primaryColor={primary}
        />
      ))}
      {showDetail && currentMilestone && (
        <Detail
          currentMilestone={currentMilestone}
          onClose={onClose}
          textColor={text}
          bgColor={background}
          primaryColor={primary}
        />
      )}
    </Container>
  )
}

export default Roadmap
