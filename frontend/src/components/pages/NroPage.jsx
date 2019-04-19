import React from 'react'
import { getDataSelection } from '../../utils/selectionUtils'
import Map from '../map/Map'
import PieGrid from '../pies/PieGrid'
import './NroPage.scss'

const NroPage = ({ location }) => {
  const dataSelection = getDataSelection(location)
  const dataSelectionCapitalized = dataSelection.charAt(0).toUpperCase() + dataSelection.slice(1)
  const breakdowns = location.pathname === '/breakdowns'
  return (
    <div className="vertical-scroll-container">
      <div className="nro-page">
        <h1>
          <span className="light">Showing </span>
          <span>{dataSelectionCapitalized + ' per NRO'}</span>
          <span className="light">{breakdowns ? ' with ' : ' at a '}</span>
          <span>{breakdowns ? 'breakdowns' : 'relative scale'}</span>
        </h1>
        {breakdowns ? <PieGrid /> : <Map />}
      </div>
    </div>
  )
}

export default NroPage