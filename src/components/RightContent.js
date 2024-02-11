import React from 'react'
import PremiumSection from './PremiumAccount'
import PersonalInformation from './PersonalInformation'
import DeleteProfile from './DeleteProfile'
import SupportSection from './SupportSection'

const RightContent = () =>{
    return(
        <div className='rightContent'>
            <PremiumSection/>
            <PersonalInformation/>
            <DeleteProfile/>
            <SupportSection/>
        </div>
    )
}

export default RightContent