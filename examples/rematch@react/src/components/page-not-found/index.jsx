// ------------------------------------
// Component -- PageNotFound
// ------------------------------------
import React from 'react'
import './style.scss'

const status = {
  404: 'This page could not be found.',
  403: 'The page is not allowed.'
}

export default ({ code = 404 }) => (
  <div className="layout-page-not-found">
    <div className="page-not-found">
      <h1>{code}</h1>
      <div>
        <h2>{status[code]}</h2>
      </div>
    </div>
  </div>
)