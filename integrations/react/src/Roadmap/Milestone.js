import React from 'react'
import styled from 'styled-components'
import FeatureDescription from '../FeatureDescription'
import FeatureTitle from '../FeatureTitle'
import hexToRGB from '../hexToRGB'
import Date from './Date'
import Version from './Version'

const StyledMilestone = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  color: ${props => props.textColor};

  .heading {
    display: flex;
    align-items: center;
    width: 100%;
    padding-right: 1rem;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .heading:hover {
    background: rgba(${props => hexToRGB(props.textColor)}, 0.06);
  }

  .separator {
    width: 1rem;
    height: 1rem;
    border-radius: 1rem;
    border: 2px solid rgba(${props => hexToRGB(props.textColor)}, 0.2);
    transform: translateX(1px);
  }

  .heading p {
    font-size: 0.75rem;
    text-align: right;
    flex: 1 auto;
  }

  .heading svg {
    height: 1.5rem;
    width: 1.5rem;
    transform: rotate(90deg);
  }

  & ul {
    width: calc(100% - 3.5rem);
    border-left: 2px solid rgba(${props => hexToRGB(props.textColor)}, 0.2);
    padding: 1rem;
    list-style: none;
  }

  & li h2 {
    font-weight: 600;
    font-size: 0.75rem;
    line-height: 1.2;
    max-width: calc(100% - 3rem);
    margin: 0;
    flex: 1 auto;
    margin-bottom: 0.125rem;
  }

  .description {
    width: 100%;
  }

  & li p {
    font-weight: normal;
    font-size: 0.75rem;
    line-height: 1.2;
    margin-bottom: 0.75rem;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`

const Milestone = ({ milestone, onShowDetail, textColor, bgColor, primaryColor }) => {
  const colors = { textColor, bgColor, primaryColor }
  return (
    <StyledMilestone {...colors}>
      <div className="heading" onClick={() => onShowDetail(milestone)}>
        <Date
          style={{
            width: '3rem',
            padding: '0.25rem',
            paddingLeft: '0.5rem'
          }}
        >
          {milestone.date.toDate().toDateString()}
        </Date>
        <div className="separator"></div>
        <Version released={milestone.released} {...colors}>
          {milestone.version}
        </Version>
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
            <FeatureTitle>{feature.title}</FeatureTitle>
            <div className="description">
              <FeatureDescription>{feature.description}</FeatureDescription>
            </div>
          </li>
        ))}
      </ul>
    </StyledMilestone>
  )
}

export default Milestone
