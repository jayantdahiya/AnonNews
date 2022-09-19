import React from 'react'
import {Tile, Button, ButtonSet} from '@carbon/react';
import {ThumbsUp} from '@carbon/icons-react'
import { sampleHeading, samplePostContent } from '../assets/SampleText';
import sampleImage2 from '../assets/sampleImage2.webp'

function Post() {
  return (
    <Tile style={{
        marginBottom: '1rem',
    }}>
        <div>
            <img src={sampleImage2} alt="sampleImage" style={{
                width: '100%',
            }} />
            <br />
            <h4>{sampleHeading}</h4>
            <br />
            <p>{samplePostContent} <a href='#'>....read more</a></p>
            <br />
            <Button renderIcon={ThumbsUp} kind="secondary" iconDescription="Like Button">Like</Button>
        </div>
    </Tile>
  )
}

export default Post