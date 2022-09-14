import React from 'react'
import {Tile, Grid, Row, Column} from '@carbon/react'

function Content() {
  return (
    <div style={{
      padding: '2rem',
    }}>
      <Tile>
        <div style={{
          height: '40vh'
        }}>
          <h1>Post Title</h1>
        </div>
      </Tile>
      <div style={{
        padding: '1rem',
      }}>
        <Grid>
          <Column lg={8} md={8} sm={16} style={{
            padding: '1rem',
          }}>
            <Tile>
              <div style={{
                height: '12rem'
              }}>
                <h1>Post Title</h1>
              </div>
            </Tile>
          </Column>
          <Column lg={8} md={8} sm={16} style={{
            padding: '1rem',
          }}>
            <Tile>
              <div style={{
                height: '12rem'
              }}>
                <h1>Post Title</h1>
              </div>
            </Tile>
          </Column>
          <Column lg={8} md={8} sm={16} style={{
            padding: '1rem',
          }}>
            <Tile>
              <div style={{
                height: '12rem'
              }}>
                <h1>Post Title</h1>
              </div>
            </Tile>
          </Column>
          <Column lg={8} md={8} sm={16} style={{
            padding: '1rem',
          }}>
            <Tile>
              <div style={{
                height: '12rem'
              }}>
                <h1>Post Title</h1>
              </div>
            </Tile>
          </Column>
        </Grid>
        
      </div>
    </div>
  )
}

export default Content