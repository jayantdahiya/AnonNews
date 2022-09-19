import React from 'react'
import {ClickableTile, Layer} from "@carbon/react"
import { sampleHeading } from '../assets/SampleText'

function RightNav() {
  return (
      <div style={{
        width: '100%',
        marginTop: '2rem',
      }}> 
      <h4 style={{
        marginBottom : '1rem',
        width: '100%'
      }}>Trending Posts</h4>
      <ClickableTile>
      {sampleHeading}
      <a href='#'>....read more</a>
    </ClickableTile>
    <Layer>
      <ClickableTile>
      {sampleHeading}
      <a href='#'>....read more</a>
      </ClickableTile>
      <Layer>
        <ClickableTile>
        {sampleHeading}
      <a href='#'>....read more</a>
        </ClickableTile>
      </Layer>
    </Layer>
    <ClickableTile>
      {sampleHeading}
      <a href='#'>....read more</a>
    </ClickableTile>
    </div>
  )
}

export default RightNav