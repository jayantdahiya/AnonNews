import React from 'react'
import {ExpandableTile, TileAboveTheFoldContent, TileBelowTheFoldContent} from '@carbon/react';

function Post() {
  return (
            <ExpandableTile tileCollapsedIconText="Click to Expand tile" tileExpandIconText="Click to Collapse Tile" style={{
                marginBottom: '1rem',
            }}>
            <TileAboveTheFoldContent>
                <div>
                    <img src='https://via.placeholder.com/400x200' alt='Post Image' />
                    <h4>Post Title</h4>
                </div>
            </TileAboveTheFoldContent>
            <TileBelowTheFoldContent>
                <div>
                    <p>Post Content</p>
                </div>
                <a href='#'>Read More</a>
            </TileBelowTheFoldContent>
        </ExpandableTile>
  )
}

export default Post