import React, { useState, useEffect } from 'react'
import { db } from '../firebaseApp'
import styles from './Roadmap.module.css'

const Roadmap = () => {
  const [roadmap, setRoadmap] = useState([])
  const [showDetail, setShowDetail] = useState(false)
  const [currentMilestone, setCurrentMilestone] = useState(null)
  const fetchRoadmap = async () => {
    try {
      const roadmapDoc = await db
        .collection('Feedback_Roadmap')
        .where('visible', '==', true)
        .get()
      setRoadmap(roadmapDoc.docs.map(doc => ({ ...doc.data(), id: doc.id })))
    } catch (error) {
      console.log('Fetch roadmap error: ', error)
    }
  }

  const onShowDetail = milestone => {
    setShowDetail(true)
    setCurrentMilestone(milestone)
  }

  useEffect(() => {
    fetchRoadmap()
  }, [])

  const sortedRoadmap = roadmap.sort((a, b) => b.date.toDate() - a.date.toDate())

  return (
    <div className={styles.roadmap}>
      <div className={styles.padding}></div>
      {sortedRoadmap.map(milestone => (
        <div className={styles.container} key={milestone.id}>
          <div className={styles.heading} onClick={() => onShowDetail(milestone)}>
            <div className={styles.date}>{milestone.date.toDate().toDateString()}</div>
            <div className={styles.separator}></div>
            <div className={styles.milestone}>{milestone.milestone}</div>
            <p>{milestone.features.length} new features/bugfixes</p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M17,13.41,12.71,9.17a1,1,0,0,0-1.42,0L7.05,13.41a1,1,0,0,0,0,1.42,1,1,0,0,0,1.41,0L12,11.29l3.54,3.54a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29A1,1,0,0,0,17,13.41Z"
              />
            </svg>
          </div>
          <ul>
            {milestone.features.map(feature => (
              <li key={feature.title}>
                <h2>{feature.title}</h2>
                <div className={styles.description}>
                  <p>{feature.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
      {showDetail && currentMilestone && (
        <div className={styles.detailContainer}>
          <div className={styles.detailHeader}>
            <div className={styles.milestone}>{currentMilestone.milestone}</div>
            <p className={styles.releaseInfo}>{currentMilestone.released ? 'Released' : 'Upcoming'}</p>
          </div>
          <div className={styles.detailDate}>{currentMilestone.date.toDate().toDateString()}</div>
          <ul className={styles.detailFeature}>
            {currentMilestone.features.map(feature => (
              <li key={feature.title}>
                <h2>{feature.title}</h2>
                <p>{feature.description}</p>
              </li>
            ))}
          </ul>
          <button className={styles.closeButton} onClick={() => setShowDetail(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  )
}

export default Roadmap
