import React from 'react'
import styled from 'styled-components'
import FeatureDescription from '../FeatureDescription'
import FeatureTitle from '../FeatureTitle'
import Date from './Date'
import Version from './Version'

const StyledDetail = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: ${props => props.bgColor};
  padding: 2rem;
  color: ${props => props.textColor};

  .detailHeader {
    display: flex;
    align-items: center;
  }

  .detailHeader p {
    font-size: 0.875rem;
  }

  .detailHeader .milestone {
    margin: 0;
    margin-right: 0.5rem;
  }

  .detailDate {
    font-size: 0.625rem;
    opacity: 0.667;
    margin: 0.5rem 0;
  }

  .detailFeature {
    list-style: none;
  }

  .detailFeature li {
    margin-bottom: 1rem;
  }

  .detailFeature h2 {
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: 0.25rem;
  }

  .detailFeature p {
    font-size: 0.875rem;
  }

  .closeButton {
    position: absolute;
    top: 2rem;
    right: 2rem;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    color: ${props => props.textColor};
    opacity: 0.67;
  }

  .closeButton:hover {
    opacity: 1;
  }

  .closeButton svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`

const Detail = ({ currentMilestone, onClose, textColor, bgColor, primaryColor }) => {
  const colors = { textColor, bgColor, primaryColor }
  return (
    <StyledDetail {...colors}>
      <div className="detailHeader">
        <Version style={{ marginLeft: 0 }} released={currentMilestone.released} {...colors}>
          {currentMilestone.version}
        </Version>
        <p className="releaseInfo">{currentMilestone.released ? 'Released' : 'Upcoming'}</p>
      </div>
      <Date style={{ padding: '0.5rem 0' }}>{currentMilestone.date.toDate().toDateString()}</Date>
      <ul className="detailFeature">
        {currentMilestone.features.map(feature => (
          <li key={feature.title}>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
          </li>
        ))}
      </ul>
      <button className="closeButton" onClick={onClose}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"
          />
        </svg>
      </button>
    </StyledDetail>
  )
}

export default Detail
