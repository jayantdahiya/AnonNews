import React from "react";
import Post from "../Components/Post";
import {Grid, Column, Row} from "@carbon/react"
import LeftNav from "../Components/LeftNav";
import RightNav from "../Components/RightNav";

function Content() {
  return (
    <div style={{
      paddingTop: '2rem',
    }}>
      <Grid>
      <Column lg={2} sm={0} md={0}>
        <LeftNav />
      </Column>
      <Column lg={12} sm={4} md={8}>
        <Grid>
          {/* Main post taking up all the grid */}
          <Column lg={9} md={8} sm={4}>
            <Post />
          </Column>
          {/* Rest of the posts */}
          <Column lg={3} md={2} sm={4}>
            <Post />
          </Column>
          <Column lg={3} md={2} sm={4}>
            <Post />
          </Column>
          <Column lg={3} md={2} sm={4}>
            <Post />
          </Column>
          <Column lg={3} md={2} sm={4}>
            <Post />
          </Column>
          <Column lg={3} md={2} sm={4}>
            <Post />
          </Column>
        </Grid>
      </Column>
      <Column lg={2} sm={0} md={0}>
        <RightNav />
      </Column>
    </Grid>
    </div>
  );
}

export default Content;