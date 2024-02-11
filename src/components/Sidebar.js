import React from 'react'
import SideBarHeading from './SidebarHeading'
import SideBarContent from './SidebarContent'

const SideBar = () =>{
    return(
        <div className='leftContent'>
            <SideBarHeading/>
            <SideBarContent/>
        </div>
    )
}

export default SideBar