import React, { useContext } from 'react'
import { SideNav, SideNavItems, SideNavLink, SideNavMenu, SideNavMenuItem, SideNavDivider} from '@carbon/react'
import {Home, Fire, ChevronSort} from '@carbon/icons-react'
import { AppContext } from '../App'

function LeftNav() {
  const { handleLatestSort, handleTopVotedSort} = useContext(AppContext);
  return (
    <SideNav>
      <SideNavItems>
        <SideNavLink renderIcon={Home} href="/">Home</SideNavLink>
        <SideNavLink renderIcon={Fire} href="/Mission">Mission</SideNavLink>
        <SideNavDivider />
        <SideNavMenu title="Sort By" renderIcon={ChevronSort}>
          <SideNavMenuItem onClick={handleLatestSort}>
            Latest
          </SideNavMenuItem>
          <SideNavMenuItem onClick={handleTopVotedSort}>
            Most Voted
          </SideNavMenuItem>
        </SideNavMenu>
      </SideNavItems>
    </SideNav>
  )
}

export default LeftNav