import React from 'react'
import PieChart from '../pies/PieChart'
import { formatCurrency } from '../../utils'
import { labels } from '../../utils/fakeData'
import './DetailsPopup.scss'

const DetailsPopup = ({ data, dataSelection }) => (
  <div className="details-popup">
    <div className="pie-container">
      <PieChart
        data={data[dataSelection].map((d, i) => ({
          label: labels[dataSelection][i],
          value: d,
        }))}
      />
    </div>
    <h2>{data.location}</h2>
    <div className="total">{formatCurrency(data[dataSelection].reduce((a, b) => a + b, 0))}</div>
    <div className="line" />
    <div className="table">
      {data[dataSelection].map((d, i) => (
        <div key={labels[dataSelection][i]} className="row">
          <div className="label">{labels[dataSelection][i]}</div>
          <div className="value">{formatCurrency(d)}</div>
        </div>
      ))}
    </div>
  </div>
)

export default DetailsPopup
