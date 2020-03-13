import React, { useState, useEffect } from 'react'
import { db } from '../firebaseApp'

const Roadmap = () => {
  const [roadmap, setRoadmap] = useState([])
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

  useEffect(() => {
    fetchRoadmap()
  }, [])

  return (
    <div>
      {roadmap.map(milestone => (
        <div key={milestone.id}>
          <h2>{milestone.milestone}</h2>
          <p>{milestone.date.toDate().toDateString()}</p>
          <p>Released: {milestone.released}</p>
          <ul>
            {milestone.features.map(feature => (
              <li key={feature.title}>
                {feature.title} - {feature.votes}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default Roadmap
