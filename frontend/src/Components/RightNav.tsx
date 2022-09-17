import React from 'react'
import {ClickableTile, Layer} from "@carbon/react"

function RightNav() {
  return (
      <div> 
      <h4 style={{
        marginBottom : '1rem',
        width: '100%'
      }}>Trending Posts</h4>
      <ClickableTile>
      New Post 1
    </ClickableTile>
    <Layer>
      <ClickableTile>
        Post 2
      </ClickableTile>
      <Layer>
        <ClickableTile>
          Post 3
        </ClickableTile>
      </Layer>
    </Layer>
    </div>
  )
}

export default RightNav